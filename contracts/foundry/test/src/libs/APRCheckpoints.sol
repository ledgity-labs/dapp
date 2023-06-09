// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "hardhat/console.sol";

/**
 * @title UDS3
 * @author Lila Rest (lila@ledgity.com)
 * @notice This library provides utilities to create and interact with APR checkpoints.
 * APR checkpoints are basically a way to efficiently store an history of APRs on-chain.
 * @dev For further details, see "APRCheckpoints" section of whitepaper.
 * @custom:security-contact security@ledgity.com
 */
library APRCheckpoints {
    /**
     * @dev High-level representation of an APR checkpoint. It doesn't represent how
     * checkpoints are stored on-chain (see "Pack" instead) but are used to represent
     * checkpoint data in-memory.
     * @param aprUD3 APR in UD3 format (3 digits fixed point number, e.g., 12.345% = 12345)
     * @param timestamp Timestamp of the checkpoint creation
     */
    struct Checkpoint {
        uint16 aprUD3; // Allows up to 65.536% APR (3 digits of precision)
        uint40 timestamp; // Allows datetime up to 20/02/36812
    }

    /**
     * @dev Gas-efficient checkpoints storage on-chain. Each pack can hold up to 4
     * checkpoints.
     * For further details, see "APRCheckpoints library" section of whitepaper.
     * @param aprsUD3 Array of checkpoint's APRs
     * @param timestamps Array of checkpoint's timestamps
     * @param cursor Index of the next checkpoint to be written
     */
    struct Pack {
        uint16[4] aprsUD3;
        uint40[4] timestamps;
        uint32 cursor;
    }

    /**
     * @dev Represents a storage pointer to an APR checkpoint in an array of packs (Pack).
     * @param packIndex Index of the pack the checkpoint belongs to (in the array of packs).
     * @param cursorIndex Index of the checkpoint in this pack (between 0 and 3)
     */
    struct Reference {
        uint256 packIndex;
        uint32 cursorIndex;
    }

    /**
     * @dev From a given checkpoint reference, it returns the reference of the checkpoint that
     * should come after it in an array of packs.
     * @param ref The reference to be incremented
     * @return The incremented reference
     */
    function incrementReference(Reference memory ref) internal pure returns (Reference memory) {
        // Ensure the given cursor index is in expected range [0, 3]
        require(ref.cursorIndex <= 3, "APRCheckpoints: cursor index overflow");

        // If the given checkpoint is stored in the last slot of its pack
        if (ref.cursorIndex == 3) {
            // Increment the pack index by 1 and reset the cursor index
            ref.packIndex++;
            ref.cursorIndex = 0;
        }
        // Else, increment the cursor index
        else ref.cursorIndex++;

        return ref;
    }

    /**
     * @dev Extacts a checkpoint data from its reference in a given array of packs.
     * @param packs The array of packs to extract the checkpoint from
     * @param ref The reference of the checkpoint to extract
     * @return checkpoint The extracted checkpoint data (Checkpoint struct)
     */
    function getDataFromReference(
        Pack[] storage packs,
        Reference memory ref
    ) internal view returns (Checkpoint memory checkpoint) {
        // Ensure the given cursor index is in expected range [0, 3]
        require(ref.cursorIndex <= 3, "APRCheckpoints: cursor index overflow");

        // Ensure the given pack index is not out of bounds
        require(ref.packIndex < packs.length, "APRCheckpoints: pack index out of bounds");

        // Retrive pack data
        Pack memory pack = packs[ref.packIndex];

        // Ensure the given cursor index has been written
        require(ref.cursorIndex < pack.cursor, "APRCheckpoints: cursor index not written yet");

        // Build and return the high-level representation of the checkpoint data
        return
            Checkpoint({
                aprUD3: pack.aprsUD3[ref.cursorIndex],
                timestamp: pack.timestamps[ref.cursorIndex]
            });
    }

    /**
     * @dev Compute and return the reference of the latest checkpoint written in the given
     * array of packs.
     * @param packs The array of packs to compute the reference from
     * @return The reference of the latest checkpoint
     */
    function getLatestReference(Pack[] storage packs) internal view returns (Reference memory) {
        // Retrieve latest pack index and its cursor
        uint256 packIndex = packs.length - 1;
        uint32 packCursor = packs[packIndex].cursor;

        // If the pack is empty, the latest checkpoint reference is in the previous
        // pack (packIndex--) and at the last slot of this one (packCursor = 3)
        if (packCursor == 0) {
            packIndex--;
            packCursor = 3;
        }
        // Else decrement the cursor to obtain the last written slot index (and not
        // the "to be written" one)
        else packCursor--;

        return Reference(packIndex, packCursor);
    }

    /**
     * @dev Appends a new empty pack at the end the given array of packs.
     * @param packs The array of packs to append the new empty pack to
     */
    function newBlankPack(Pack[] storage packs) internal {
        // If packs array is not empty, ensure the latest pack is full
        if (packs.length != 0)
            require(
                getLatestReference(packs).cursorIndex == 3,
                "APRCheckpoints: latest pack not full yet"
            );

        // Append a new empty pack to the array of packs
        packs.push(
            APRCheckpoints.Pack({
                aprsUD3: [uint16(0), uint16(0), uint16(0), uint16(0)],
                timestamps: [uint40(0), uint40(0), uint40(0), uint40(0)],
                cursor: 0
            })
        );
    }

    /**
     * @dev Write an new APR checkpoint from a given APR into a given array of packs.
     * For further details, see "APRCheckpoints library" section of whitepaper.
     * @param packs The array of packs to write the new checkpoint to
     * @param aprUD3 The new APR in UD3 format
     */
    function setAPR(Pack[] storage packs, uint16 aprUD3) internal {
        // In-memory reference that will point to the checkpoint slot to be written
        Reference memory newRef = Reference(0, 0);

        // If packs array is not empty, get new checkpoint's ref and create its pack if missing
        if (packs.length != 0) {
            newRef = incrementReference(getLatestReference(packs));
            if (newRef.packIndex > packs.length - 1) newBlankPack(packs);
        }
        // Else, create a first blank pack in it
        else newBlankPack(packs);

        // Retrieve the pack to write the checkpoint in
        Pack memory pack = packs[newRef.packIndex];

        // Write the new checkpoint in the pack and increment its cursor
        pack.aprsUD3[newRef.cursorIndex] = aprUD3;
        pack.timestamps[newRef.cursorIndex] = uint40(block.timestamp);
        pack.cursor++;

        // Store the updated pack
        packs[newRef.packIndex] = pack;
    }

    /**
     * @dev Returns the latest APR checkpoint written in the given array of packs.
     * If no checkpoint has been written yet, returns 0.
     * @param packs The array of packs to retrieve the latest checkpoint from
     * @return The latest APR checkpoint or 0
     */
    function getAPR(Pack[] storage packs) internal view returns (uint16) {
        // Returns 0 if no APR checkpoint has been written yet
        if (packs.length == 0) return 0;

        // Else retrieve the latest checkpoint and return its APR
        Reference memory ref = getLatestReference(packs);
        Checkpoint memory data = getDataFromReference(packs, ref);
        return data.aprUD3;
    }
}

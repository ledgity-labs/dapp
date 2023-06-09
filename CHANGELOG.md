## [1.119.0](https://github.com/ledgity-labs/Ledgity-DeFi/compare/v1.118.1...v1.119.0) (2023-07-13)


### Features

* **contracts:** setup foundry next to hardhat for unit tests ([f23b851](https://github.com/ledgity-labs/Ledgity-DeFi/commit/f23b851e1a962f9cfe2b8bb63a682688bf8e4626))


### Others

* forge init ([b0e44b4](https://github.com/ledgity-labs/Ledgity-DeFi/commit/b0e44b4a9f7ff6a2f3d9dd0c79596c6490dc1afa))

## [1.118.1](https://github.com/ledgity-labs/Ledgity-DeFi/compare/v1.118.0...v1.118.1) (2023-07-13)


### Fixes

* fix build error ([bf09e61](https://github.com/ledgity-labs/Ledgity-DeFi/commit/bf09e61ca5263b584ea48bf6aa5e04ac8a188ad1))


### Others

* **deps:** update dependency @openzeppelin/hardhat-upgrades to v2.0.1 ([8c741ce](https://github.com/ledgity-labs/Ledgity-DeFi/commit/8c741cecda1e9d5329ba269e53d15594b8f39c5a))
* **deps:** update dependency @types/node to v20.4.2 ([b157a7f](https://github.com/ledgity-labs/Ledgity-DeFi/commit/b157a7ff74543d75834b8d7a257c2a2427a68bbc))
* **deps:** update dependency @types/react-dom to v18.2.7 ([0680d30](https://github.com/ledgity-labs/Ledgity-DeFi/commit/0680d3097e1c8ba894003f73b2adf6724c6d5ef4))

## [1.118.0](https://github.com/ledgity-labs/Ledgity-DeFi/compare/v1.117.2...v1.118.0) (2023-07-13)


### Features

* **contracts:** don't rely anymore on Beacon, rewrite deploy scripts to fit new contracts and ([334c0dc](https://github.com/ledgity-labs/Ledgity-DeFi/commit/334c0dceeaf8c67efc19ccfe0782ab584174772a))
* **contracts:** track and allow funding a rewards reserve in LTYStaking contract ([f172369](https://github.com/ledgity-labs/Ledgity-DeFi/commit/f17236957c57eaa7c5140ec1b172b1c7be57a772))


### Docs

* **contracts:** document LTokenSignaler contract ([97e4690](https://github.com/ledgity-labs/Ledgity-DeFi/commit/97e469096c779a82a45d23f52c74d135100e3da1))


### Others

* **contracts:** improve docs and code readability of LToken contract ([e97c7e2](https://github.com/ledgity-labs/Ledgity-DeFi/commit/e97c7e2ce7873cf483fce20cce8513e452e3c342))
* **contracts:** improve docs and code readability of LTYStaking contract ([af15bd9](https://github.com/ledgity-labs/Ledgity-DeFi/commit/af15bd9d5bf087de55a517ce8ee43e05b418181e))

## [1.117.2](https://github.com/ledgity-labs/Ledgity-DeFi/compare/v1.117.1...v1.117.2) (2023-07-11)


### Fixes

* **contracts:** ensure GlobalBlacklist cannot blacklist zero address ([6e05249](https://github.com/ledgity-labs/Ledgity-DeFi/commit/6e05249199fdb9052ec5153eaad79c7774a14f63))


### Docs

* **contracts:** document GlobalBlacklist, GlobalOwner and GlobalPauser contracts ([c2eb5f5](https://github.com/ledgity-labs/Ledgity-DeFi/commit/c2eb5f58ff9729d3120610ef03255b8e72d71bab))


### Others

* **contracts:** rename GlobalPauser to GlobalPause ([e28e8d2](https://github.com/ledgity-labs/Ledgity-DeFi/commit/e28e8d238fe9df03497699fccbbf9ddac086d0f6))

## [1.117.1](https://github.com/ledgity-labs/Ledgity-DeFi/compare/v1.117.0...v1.117.1) (2023-07-11)


### Fixes

* **contracts:** add missing RecoverableUpgradeable initializer call in BaseUpgradeable.sol ([7c7b18b](https://github.com/ledgity-labs/Ledgity-DeFi/commit/7c7b18b279a008d5e176a913bc69bb0b597029eb))
* **contracts:** fix typo in LToken.getWithdrawnAmountAndFees() ([d96c859](https://github.com/ledgity-labs/Ledgity-DeFi/commit/d96c859e54adcc12756274f62043a70ed473720d))

## [1.117.0](https://github.com/ledgity-labs/Ledgity-DeFi/compare/v1.116.0...v1.117.0) (2023-07-11)


### Features

* **contracts:** make global contracts addresses states private and offer getter for those + ([8dce56f](https://github.com/ledgity-labs/Ledgity-DeFi/commit/8dce56f4f0e26bf471344453d6b571a40b24e9e1))


### Fixes

* some calculation were still using old ud3ToDecimals pattern, which may incur precision loss if ([7bd4cc8](https://github.com/ledgity-labs/Ledgity-DeFi/commit/7bd4cc80173727cb7ec59eb6c5b3cc3bc0c592f8))


### Others

* **contracts:** end improving InvestUpgradeable code readability and documentation ([0ba4848](https://github.com/ledgity-labs/Ledgity-DeFi/commit/0ba48489345b93b366dba2503f384da3625f3870))
* **deps:** update dependency @types/node to v20.4.1 ([068e40b](https://github.com/ledgity-labs/Ledgity-DeFi/commit/068e40b624ac32822f1488d5cb6059c94431bcbb))
* **deps:** update dependency prettier to v3 ([5739d9f](https://github.com/ledgity-labs/Ledgity-DeFi/commit/5739d9f3bbb8eee9c6a357fec3439b8c1262cd58))

## [1.116.0](https://github.com/ledgity-labs/Ledgity-DeFi/compare/v1.115.1...v1.116.0) (2023-07-11)


### Features

* **contracts:** security: makes all global contracts addresses immutable after initialization ([37a0765](https://github.com/ledgity-labs/Ledgity-DeFi/commit/37a0765658fba6c3af8d656fc2f36e319d2221fc))


### Fixes

* **contracts:** properly and explicitely check in Global abstracts that global contract is set ([34a415a](https://github.com/ledgity-labs/Ledgity-DeFi/commit/34a415a75bd2b97dab85d1418fba6b577780a8cc))


### Docs

* **contracts:** document GlobalOwnable, GlobalPausable and GlobalRestrictable contracts ([d312182](https://github.com/ledgity-labs/Ledgity-DeFi/commit/d3121828f32c0006d355e941e831c7525344966d))
* **contracts:** improve docs of ERC20BaseUpgradeable ([32a33e4](https://github.com/ledgity-labs/Ledgity-DeFi/commit/32a33e495f27dcf7839c985bdf89a3da4386c348))
* **contracts:** improve documentation of BaseUpgradeable ([ada81b9](https://github.com/ledgity-labs/Ledgity-DeFi/commit/ada81b9fb7c1ce0a0bd5bceaef1008456ecca65f))


### Others

* **contracts:** prefix global abstracts by "Global" + strictly follow the unchained pattern ([dacd5b9](https://github.com/ledgity-labs/Ledgity-DeFi/commit/dacd5b9b1db5ae6db2d2ee6bb46af728394b0e21))
* **contracts:** some readability improvements over performances ([5c57d1e](https://github.com/ledgity-labs/Ledgity-DeFi/commit/5c57d1e765d1db545c44a4ed4f262d5e0a01fbcf))

## [1.115.1](https://github.com/ledgity-labs/Ledgity-DeFi/compare/v1.115.0...v1.115.1) (2023-07-10)


### Fixes

* fix build error (since Amount component API change) ([8cdeb98](https://github.com/ledgity-labs/Ledgity-DeFi/commit/8cdeb983039dbb9766e72853bcf10f56e0749365))


### Others

* **contracts:** improve UDS3 and APRCheckpoints docs, code readability and code logic safety ([986b395](https://github.com/ledgity-labs/Ledgity-DeFi/commit/986b39515fb3b09e63a2ba2d85f79937d2a9c584))
* **deps:** update dependency postcss to v8.4.25 ([91081d7](https://github.com/ledgity-labs/Ledgity-DeFi/commit/91081d7f03b563c088a04072301e3e92fb725740))
* **deps:** update ipfs/go-ipfs docker tag to v0.21.0 ([8702ab7](https://github.com/ledgity-labs/Ledgity-DeFi/commit/8702ab787d399f674d7d80254e7da5ead65a7d90))
* **deps:** update nextjs monorepo to v13.4.9 ([1f2952c](https://github.com/ledgity-labs/Ledgity-DeFi/commit/1f2952ce341ff9a9dc0417d05e20a7aa35582941))

## [1.115.0](https://github.com/ledgity-labs/dapp/compare/v1.114.1...v1.115.0) (2023-07-09)


### Features

* **app:** add 10 minutes cache on growth/revenue data from subgraph ([fb2b65d](https://github.com/ledgity-labs/dapp/commit/fb2b65dba12670941cb48d9d691a10cc8547fb2d))
* **app:** connect dashboard profits stats card to subgraph data + improve rate/amount display ([aeb994e](https://github.com/ledgity-labs/dapp/commit/aeb994e41053574d63f2a463249dee185a5fba34))
* **app:** improve display of rate and amounts in the revenue/growth chart ([131f074](https://github.com/ledgity-labs/dapp/commit/131f07414009a3aa80389839c0ec91f344ecfb9b))

## [1.114.1](https://github.com/ledgity-labs/dapp/compare/v1.114.0...v1.114.1) (2023-07-09)


### Fixes

* **contracts:** fix period rewards calculation in InvestUpgradeable ([331c068](https://github.com/ledgity-labs/dapp/commit/331c068c50475b390cc0b2f9e4a6c7be7b322541))

## [1.114.0](https://github.com/ledgity-labs/dapp/compare/v1.113.0...v1.114.0) (2023-07-09)


### Features

* make growth chart calculation relative to balanceBefore + fix wrong data representation ([011506c](https://github.com/ledgity-labs/dapp/commit/011506cf490a0f2912dbfa22907a7ad2a1e6344a))

## [1.113.0](https://github.com/ledgity-labs/dapp/compare/v1.112.0...v1.113.0) (2023-07-06)


### Features

* **app>dash:** implement ChartJS and design revenue/growth chart ([d760b14](https://github.com/ledgity-labs/dapp/commit/d760b141d7e389ac8b59924f8083a63772607a5b))
* connect 1Y variation to subgraph data + fix APRCheckpoints.incrementReference ([71ef237](https://github.com/ledgity-labs/dapp/commit/71ef23740eddbaa034d57bf7ae057de92dacb01b))

## [1.112.0](https://github.com/ledgity-labs/dapp/compare/v1.111.0...v1.112.0) (2023-07-06)


### Features

* **app>invest:** break dependency between AppInvestTVL and AppInvestTokens, start working on reward ([187bebf](https://github.com/ledgity-labs/dapp/commit/187bebf3ca59392d8bf6a2b21cca619d0884319b))
* connect distributed rewards stat to subgraph data ([85e2c28](https://github.com/ledgity-labs/dapp/commit/85e2c28d3ac030a309e793cfc689caab3259c5a7))


### Others

* **app:** split AppInvest into 5 components ([4ae35de](https://github.com/ledgity-labs/dapp/commit/4ae35dec43ca1a7bad1868ddbf4b22cc63ee7110))

## [1.111.0](https://github.com/ledgity-labs/dapp/compare/v1.110.0...v1.111.0) (2023-07-06)


### Features

* **app,graph:** add amoutAfterFees data,  display it in dashboard + fix non-unique activities ([48badcf](https://github.com/ledgity-labs/dapp/commit/48badcf0467c71e0c9dfac70043410360dd592fc))
* **app:** make withdrawal request cancelling functionnal ([e795827](https://github.com/ledgity-labs/dapp/commit/e795827d47e78eb64f93cb5c16bafe7dea569dfe))

## [1.110.0](https://github.com/ledgity-labs/dapp/compare/v1.109.0...v1.110.0) (2023-07-06)


### Features

* add more pnpm commands + fix owner problem with ltokensignaler contract ([31b38eb](https://github.com/ledgity-labs/dapp/commit/31b38eb94cb04a9e49f1d1cb341acb9d81754fa7))
* **app:** connect subgraph data to dashboard activities ([15bb306](https://github.com/ledgity-labs/dapp/commit/15bb30604a603d2e2c7a49569b2f8c3eaa0e1ff9))
* **app:** update L-Tokens icons ([1363e9d](https://github.com/ledgity-labs/dapp/commit/1363e9deb8e355205abae5755e73b389c2d7ee7b))
* fix subgraph mappings, fix InvestUpgradeable infinite re-entrancy, setup graphclient ([3e7c5f6](https://github.com/ledgity-labs/dapp/commit/3e7c5f6c38ef98dae194b5c0bffbbe0350f2f375))

## [1.109.0](https://github.com/ledgity-labs/dapp/compare/v1.108.0...v1.109.0) (2023-07-05)


### Features

* **app>admin:** add new admin brick to LToken section allowing to signal it + fix build error ([323ab6f](https://github.com/ledgity-labs/dapp/commit/323ab6fea792eab4494f47b4890dfbd2729bb53d))


### Others

* **deps:** update dependency @openzeppelin/hardhat-upgrades to v2.0.0 ([b17d3ea](https://github.com/ledgity-labs/dapp/commit/b17d3eaf2f8ac4bca97c3180a4ed6d3547734ee3))
* **deps:** upgrade dependencies ([f1a4f20](https://github.com/ledgity-labs/dapp/commit/f1a4f20240f3526d6b0c84256cfc54dd2e6b4dc8))

## [1.108.0](https://github.com/ledgity-labs/dapp/compare/v1.107.0...v1.108.0) (2023-07-05)


### Features

* implement TheGraph subgraph and local node, ABI extractor script, new LTokenSignaler contract ([0257158](https://github.com/ledgity-labs/dapp/commit/02571586695792fe1fc2db23dd3bf933f3f49d34))

## [1.107.0](https://github.com/ledgity-labs/dapp/compare/v1.106.0...v1.107.0) (2023-07-04)


### Features

* **app>staking:** add remaining lock time + unlock button ([3c6c72f](https://github.com/ledgity-labs/dapp/commit/3c6c72fa47fe13b0b0f6d45805dcd0892b3a3dda))
* **app>staking:** add stake lock period increase message when a user extends its stake ([a6e1679](https://github.com/ledgity-labs/dapp/commit/a6e16790e2d3fa7ad4767089c47b5a5629672a6e))

## [1.106.0](https://github.com/ledgity-labs/dapp/compare/v1.105.0...v1.106.0) (2023-07-04)


### Features

* add fake LTY minting to "Testing" admin section + refresh pause preparation on pause change ([b099b74](https://github.com/ledgity-labs/dapp/commit/b099b74bbda8ca5cd0e876b2de9dc7e0ec66dc08))
* **admin:** populate the "Pause" section with buttons to global pause and unpause the contracts ([c559fd6](https://github.com/ledgity-labs/dapp/commit/c559fd675288bf793ef8e396004e8741634494a5))
* **app:** refresh preparation on allowance change in AllowanceTxButton component ([85d990c](https://github.com/ledgity-labs/dapp/commit/85d990cba88f5cbc1c855942dace328064ec9110))
* improve display of TxButton modal + pretty error formatting ([ab8f359](https://github.com/ledgity-labs/dapp/commit/ab8f359c6a47acac8346fb15f921a6ec95ff6e8f))


### Fixes

* **app:** staking page was still relying on old LTY wagmi functions ([a8ef33e](https://github.com/ledgity-labs/dapp/commit/a8ef33e4866b831e3ab1c448ccd9cb28260746a6))
* lTYStaking.tierOf() shouldn't return 1 when staking is == 0 ([8b7b3cd](https://github.com/ledgity-labs/dapp/commit/8b7b3cda9fee45e62fcf6027e97d614b682eda0b))


### Others

* upgrade deps ([e8db5f4](https://github.com/ledgity-labs/dapp/commit/e8db5f4a0cef334c12aba19792f24d26df0917b2))

## [1.105.0](https://github.com/ledgity-labs/dapp/compare/v1.104.0...v1.105.0) (2023-07-03)


### Features

* populate "Ownership" admin section with UI to transfer ownership in two steps ([e7e19b0](https://github.com/ledgity-labs/dapp/commit/e7e19b06ac0d6f523e63253732792abe7a51c374))

## [1.104.0](https://github.com/ledgity-labs/dapp/compare/v1.103.0...v1.104.0) (2023-07-03)


### Features

* **admin:** add "Fund contract" card to L-Token admin ([f5aeec1](https://github.com/ledgity-labs/dapp/commit/f5aeec138c66bac3c151b873207e684c484de2b9))
* **admin:** add addresses setter card to L-Token admin + new <AdminAddressSetter/> component ([8a49426](https://github.com/ledgity-labs/dapp/commit/8a49426c628111cc6e7db52c90eb3a466173cca7))
* **admin:** add claim fees card to L-Token admin ([184d8ab](https://github.com/ledgity-labs/dapp/commit/184d8ab89db3c5e3a429fdd61b00d4cafaa05b13))
* **admin:** add process big queued request card to L-Token admin ([9d6c6f1](https://github.com/ledgity-labs/dapp/commit/9d6c6f109bdbd6c6e2a40122527c041eeaf4997e))

## [1.103.0](https://github.com/ledgity-labs/dapp/compare/v1.102.0...v1.103.0) (2023-07-03)


### Features

* **admin:** allow setting Stake lock duration in "Staking" section ([57f8a21](https://github.com/ledgity-labs/dapp/commit/57f8a21d5e4040ed43f7fde8a2ce408dfb6eadf1))

## [1.102.0](https://github.com/ledgity-labs/dapp/compare/v1.101.0...v1.102.0) (2023-07-03)


### Features

* **admin:** add AdminMasonry and AdminBrick components to normalize admin pages layouts ([1091252](https://github.com/ledgity-labs/dapp/commit/109125237d63e8edd2ef19600d06f4319456a6ca))

## [1.101.0](https://github.com/ledgity-labs/dapp/compare/v1.100.0...v1.101.0) (2023-07-03)


### Features

* **admin:** add L-Tokens retention rate setter + fix LTYStaking missing functions ([dce9d78](https://github.com/ledgity-labs/dapp/commit/dce9d783eeeaa29711c186e8c582dce430285ba0))

## [1.100.0](https://github.com/ledgity-labs/dapp/compare/v1.99.0...v1.100.0) (2023-07-03)


### Features

* remove admin "LTY" section and move $LTY infos to "Staking" one + fix contract deployments ([28f8e58](https://github.com/ledgity-labs/dapp/commit/28f8e581f8f8adcdbbd66a36ae7101be380685c8))


### Others

* LTY token contract have been moved to https://github.com/ledgity-labs/LTY-token ([972dcc1](https://github.com/ledgity-labs/dapp/commit/972dcc1d5c2b1b3acc5735adc4cf5d7404459e2f))

## [1.99.0](https://github.com/ledgity-labs/dapp/compare/v1.98.0...v1.99.0) (2023-07-02)


### Features

* **contracts:** add unlock() function to LTYStaking contract allowing to prematurely unlock a stake ([631f48d](https://github.com/ledgity-labs/dapp/commit/631f48d942f35551556317173ee73cb928bd2e67))

## [1.98.0](https://github.com/ledgity-labs/dapp/compare/v1.97.0...v1.98.0) (2023-07-02)


### Features

* **contracts:** make LTY token non-ownable, pausable, upgradeable and  restrictable ([2f98e9a](https://github.com/ledgity-labs/dapp/commit/2f98e9ad30e6abbaa6b10920243f0a38ad8ef198))
* **contracts:** update subsequent deploy all script to match new contracts architecture ([7adeac8](https://github.com/ledgity-labs/dapp/commit/7adeac868a94b2f2b8eecbf7d6dae7192ae231d3))

## [1.97.0](https://github.com/ledgity-labs/dapp/compare/v1.96.0...v1.97.0) (2023-07-02)


### Features

* **contracts:** make all globally owned contracts accepting globalOwner address during init + ([5f33116](https://github.com/ledgity-labs/dapp/commit/5f33116f76dd5c827a0081717cc8a40beecc012b))

## [1.96.0](https://github.com/ledgity-labs/dapp/compare/v1.95.0...v1.96.0) (2023-07-02)


### Features

* **contracts:** add stake locking to LTYStaking contract ([508c557](https://github.com/ledgity-labs/dapp/commit/508c557bb7a1ee23829de28f816329550c1634a1))

## [1.95.0](https://github.com/ledgity-labs/dapp/compare/v1.94.1...v1.95.0) (2023-07-02)


### Features

* **admin>staking:** improve appearance of APR card ([2e3ac88](https://github.com/ledgity-labs/dapp/commit/2e3ac880eb5730c0255e6636dd8a8c4ced615ceb))
* **contracts:** new GlobalPause and GlobalOwner contracts. New bases & pausables abstracts ([828482a](https://github.com/ledgity-labs/dapp/commit/828482a5744699e1b14500f35a64fbd637d2652f))
* programatically prevent AmountInput and RateInput to receive NaN characters ([d667e58](https://github.com/ledgity-labs/dapp/commit/d667e58cdac481eee5cd6fcbb803e8dd0d44b7be))
* remove type="number" to Amount and Rate inputs + adjust right padding to prevent overlap ([8ff76c6](https://github.com/ledgity-labs/dapp/commit/8ff76c6554f62c82e0f8d8650f89e13767c8e63f))


### Fixes

* **app:** remove USD rate console log ([9e3c8c2](https://github.com/ledgity-labs/dapp/commit/9e3c8c2894138b0a4f291f65e5fc2e182ea5066c))

## [1.94.1](https://github.com/ledgity-labs/dapp/compare/v1.94.0...v1.94.1) (2023-07-01)


### Fixes

* fix typeerror in chain.ts due to change in getContractAddress() API ([ab27953](https://github.com/ledgity-labs/dapp/commit/ab2795361dd73a0ede9b7219e49914c76b993dd8))


### Others

* **deps:** update dependency @types/node to v20.3.3 ([0c215d3](https://github.com/ledgity-labs/dapp/commit/0c215d32cd26d09bf5345f811809c277b9801fc2))
* **deps:** update dependency eslint to v8.44.0 ([def0085](https://github.com/ledgity-labs/dapp/commit/def00852422bb41015eec1e0e896578f109ca7c1))

## [1.94.0](https://github.com/ledgity-labs/dapp/compare/v1.93.0...v1.94.0) (2023-07-01)


### Features

* **app:** entire rewrite of network switching system, make many UI element reacting to chain switch ([8691531](https://github.com/ledgity-labs/dapp/commit/8691531edd80c1198939f9703c0966b590d8ffc2))

## [1.93.0](https://github.com/ledgity-labs/dapp/compare/v1.92.1...v1.93.0) (2023-06-30)


### Features

* **admin>staking:** add a "Tiers" card allowing to change staking tiers caps ([3c2504e](https://github.com/ledgity-labs/dapp/commit/3c2504ed9778394145bda36306065027c99f4130))
* give some style to error page ([d15deba](https://github.com/ledgity-labs/dapp/commit/d15deba29077dc2de51843d566de3e7d97c6eaca))
* support leading zeroes discarding in Amount component, fix rewards calculation in InvestUpgrad ([2ac3975](https://github.com/ledgity-labs/dapp/commit/2ac3975973f832a31ada258afa7c06430fe97209))


### Fixes

* **admin>staking:** graphical adjustements ([f07b3e9](https://github.com/ledgity-labs/dapp/commit/f07b3e9abbe66f32f8bed719d21f2c9973faac65))

## [1.92.1](https://github.com/ledgity-labs/dapp/compare/v1.92.0...v1.92.1) (2023-06-29)


### Fixes

* **app): many fixes (see long description:** fixed staking "total staked" and "eligible to tier" ([0bb75a7](https://github.com/ledgity-labs/dapp/commit/0bb75a7bc686e2278cbb36378350863cdb9431ca))

## [1.92.0](https://github.com/ledgity-labs/dapp/compare/v1.91.0...v1.92.0) (2023-06-29)


### Features

* **app>invest:** use coinbase exchanges rates API to provides dollar-based TVL ([fe6d325](https://github.com/ledgity-labs/dapp/commit/fe6d325316ad7e343252ad03ce1b26463a91de66))
* **app:** add "LTY" admin with token infos and mint form ([b0d70a8](https://github.com/ledgity-labs/dapp/commit/b0d70a88c18b3a4896985204d2fe9e6287316372))
* **app:** enable watching for many data in app>staking so they're updated in real-time ([cb46f6e](https://github.com/ledgity-labs/dapp/commit/cb46f6efdb279e59a7f66e2b16db555b97a5c6b3))


### Others

* **deps:** update dependency @types/node to v20.3.2 ([92f2cd9](https://github.com/ledgity-labs/dapp/commit/92f2cd95990879ee45c771a1e7cd3e590b42934c))

## [1.91.0](https://github.com/ledgity-labs/dapp/compare/v1.90.0...v1.91.0) (2023-06-29)


### Features

* **app:** add fade and move in animation to app and admin tabs ([5816e18](https://github.com/ledgity-labs/dapp/commit/5816e18ed9f26b510356f3b436d71254974f8b48))
* **app:** link invested tokens to contracts data, update components to fit new <Amount/> behaviors+ ([e2eee59](https://github.com/ledgity-labs/dapp/commit/e2eee59c45f810664c14c783f13f7b07ba5ca997))
* **app:** the frontend is now fully connected to contracts. See long description ([bae8b26](https://github.com/ledgity-labs/dapp/commit/bae8b268b280836443d088eee98d0ce64003cc01))
* improve <Amount/> component so it directly accepts bigint and performs required formatting ([c4d0992](https://github.com/ledgity-labs/dapp/commit/c4d09924751cf103faa8f8710e9cfac65ef54d7d))


### Fixes

* a bunch of tiny values, typos, animations improvements and fixes ([8c08b91](https://github.com/ledgity-labs/dapp/commit/8c08b913525c5ec3e082c4d368ab0e5c0f7a2857))


### Others

* **deps:** update dependency typescript to v5.1.6 ([373a4ac](https://github.com/ledgity-labs/dapp/commit/373a4ac0a1ff492c51df72886c6eacd498cae2ee))
* **deps:** upgrade deps ([ccbfe1b](https://github.com/ledgity-labs/dapp/commit/ccbfe1b18add3c9647ce27a7d2eebd51fb8ef0bc))

## [1.90.0](https://github.com/ledgity-labs/dapp/compare/v1.89.0...v1.90.0) (2023-06-27)


### Features

* **app:** improve admin underlying tokens testing + new <Address/> component to display addresses ([fe5a3ac](https://github.com/ledgity-labs/dapp/commit/fe5a3acf4d0e9f16681c3560b0deeb8b92c12128))

## [1.89.0](https://github.com/ledgity-labs/dapp/compare/v1.88.0...v1.89.0) (2023-06-27)


### Features

* new useLToken() and useAvailableLTokens() hooks + start populating admin testing ([dd589f3](https://github.com/ledgity-labs/dapp/commit/dd589f35fad45c828772a060fd7327cd9e245547))

## [1.88.0](https://github.com/ledgity-labs/dapp/compare/v1.87.2...v1.88.0) (2023-06-26)


### Features

* **app:** start working on admin route, create empty components for each page and add page switcher ([ebd9bde](https://github.com/ledgity-labs/dapp/commit/ebd9bdedacbde9ad0a7ab3b8c9f59ea35df3f124))

## [1.87.2](https://github.com/ledgity-labs/dapp/compare/v1.87.1...v1.87.2) (2023-06-26)


### Fixes

* fix build command to include contracts compilation ([be4f730](https://github.com/ledgity-labs/dapp/commit/be4f73070033cdb22546896cac564c588daf07c4))

## [1.87.1](https://github.com/ledgity-labs/dapp/compare/v1.87.0...v1.87.1) (2023-06-26)


### Fixes

* **deps:** update dependency @t3-oss/env-nextjs to ^0.6.0 ([9ca0ab8](https://github.com/ledgity-labs/dapp/commit/9ca0ab8c5b70f116ac09da93e49ad90647749fb4))


### Others

* **deps:** update dependency @types/node to v20.3.1 ([6f419c2](https://github.com/ledgity-labs/dapp/commit/6f419c2f042077b69635299f46db08a97266eecb))

## [1.87.0](https://github.com/ledgity-labs/dapp/compare/v1.86.0...v1.87.0) (2023-06-26)


### Features

* replace tailwind-animate by handwritten animations to fix durations and animation durations ([81ed5db](https://github.com/ledgity-labs/dapp/commit/81ed5db00e3e624b57c966bef56ec460a1c488fc))

## [1.86.0](https://github.com/ledgity-labs/dapp/compare/v1.85.0...v1.86.0) (2023-06-26)


### Features

* **contracts:** improve deploy scripts by tracking networks by chain ID instead of Hardhat name ([908e04a](https://github.com/ledgity-labs/dapp/commit/908e04a39428ab2b57642b2d7a744beda08be2ff))
* implement Wagmi CLI, improve contract deployment, improve AmountInput component ([0e7b076](https://github.com/ledgity-labs/dapp/commit/0e7b0769782301b26b08bb55eaa4ac67cd104722))

## [1.85.0](https://github.com/ledgity-labs/dapp/compare/v1.84.0...v1.85.0) (2023-06-25)


### Features

* **contracts:** first version of deploy scripts ([57f2ab7](https://github.com/ledgity-labs/dapp/commit/57f2ab7890e78b6e6caae7cc9b0641b14b3c147b))
* **ltoken:** rework withdrawal functions to fit new withdrawal process design ([85b52a8](https://github.com/ledgity-labs/dapp/commit/85b52a814a60861cf0720b1c4e418c0746e99d86))

## [1.84.0](https://github.com/ledgity-labs/dapp/compare/v1.83.0...v1.84.0) (2023-06-24)


### Features

* adjust staking actions boxes + dashboard activity status colors ([5681773](https://github.com/ledgity-labs/dapp/commit/568177362b137c6d26201681293b8587c579aac1))

## [1.83.0](https://github.com/ledgity-labs/dapp/compare/v1.82.0...v1.83.0) (2023-06-24)


### Features

* **app:** improve Withdrawal dialog explanations ([4f370a4](https://github.com/ledgity-labs/dapp/commit/4f370a458f41c6f9f69856789fe564271a5821c3))

## [1.82.0](https://github.com/ledgity-labs/dapp/compare/v1.81.0...v1.82.0) (2023-06-24)


### Features

* new AmountInput component. Implemented it in deposit/withdrawal dialogs + staking page ([a44612e](https://github.com/ledgity-labs/dapp/commit/a44612e70bfd65c5cc130175b9e2d12162e2d740))

## [1.81.0](https://github.com/ledgity-labs/dapp/compare/v1.80.0...v1.81.0) (2023-06-24)


### Features

* add <Dialog/> component as well as first version of <DepositDialog/> and <WithdrawDialog/> ([329ef89](https://github.com/ledgity-labs/dapp/commit/329ef89e92c4469bbfc8fe3c7729b24798d56421))

## [1.80.0](https://github.com/ledgity-labs/dapp/compare/v1.79.2...v1.80.0) (2023-06-24)


### Features

* new AlertDialog component + add alert dialog when cancelling a withdrawal request ([a107bcd](https://github.com/ledgity-labs/dapp/commit/a107bcd4c0fba38c18db08d69ce04d526a8ea425))


### Others

* **deps:** update dependencies ([2df07b0](https://github.com/ledgity-labs/dapp/commit/2df07b03ea5ca233b3d7d48840f508d784ffe43c))

## [1.79.2](https://github.com/ledgity-labs/dapp/compare/v1.79.1...v1.79.2) (2023-06-24)


### Fixes

* fix missing className forwarding in <Amount/> + improve it in <Datetime/> ([38096cd](https://github.com/ledgity-labs/dapp/commit/38096cd4f55c360e43c9324487b35c1a6a504b70))


### Others

* **deps:** update dependency @types/react to v18.2.14 ([f6f1e79](https://github.com/ledgity-labs/dapp/commit/f6f1e7935fc5a90af2e37e46a4122f7905510155))

## [1.79.1](https://github.com/ledgity-labs/dapp/compare/v1.79.0...v1.79.1) (2023-06-24)


### Fixes

* **app>dashboard:** adjust balances card paddings ([7c5dd09](https://github.com/ledgity-labs/dapp/commit/7c5dd09d1ef766be23c4c9f4444ffb9f2c1cd043))


### Others

* move amount and date tooltips to <Amount/> and <DateTime/> components directly ([96de906](https://github.com/ledgity-labs/dapp/commit/96de906377c9ceeee8d2a5433c3af97b14499957))

## [1.79.0](https://github.com/ledgity-labs/dapp/compare/v1.78.0...v1.79.0) (2023-06-24)


### Features

* **app>dashboard:** add amount to total profits, switch chart and activity, refactor each card in ([15f6174](https://github.com/ledgity-labs/dapp/commit/15f6174dda01348267f0184bd63ea1639889bf6c))

## [1.78.0](https://github.com/ledgity-labs/dapp/compare/v1.77.0...v1.78.0) (2023-06-23)


### Features

* **app:** add cancel request button on queued status hover + fix activity table padding ([7ad074b](https://github.com/ledgity-labs/dapp/commit/7ad074bd6a6cbd154f7110a1ff035f2b870351c5))

## [1.77.0](https://github.com/ledgity-labs/dapp/compare/v1.76.0...v1.77.0) (2023-06-23)


### Features

* **app:** first version of dashboard activity card ([21bc440](https://github.com/ledgity-labs/dapp/commit/21bc440fd1d77749080ca33f30533ab86c4d670d))
* **app:** improve version of activity logs ([f73cf42](https://github.com/ledgity-labs/dapp/commit/f73cf422f44a52debba82cd6cc8bf5a8c8c743d2))

## [1.76.0](https://github.com/ledgity-labs/dapp/compare/v1.75.0...v1.76.0) (2023-06-23)


### Features

* **app:** add Tooltip components, add tooltips to dashboard balances buttons + change their icons ([f030c0e](https://github.com/ledgity-labs/dapp/commit/f030c0e4d03c1a9b249389b5b2c4959ba56e7307))

## [1.75.0](https://github.com/ledgity-labs/dapp/compare/v1.74.0...v1.75.0) (2023-06-23)


### Features

* **app:** add L-Tokens balances to user dashboard ([c17bf2e](https://github.com/ledgity-labs/dapp/commit/c17bf2e780cdb4020cea810d55c58fdbf250a4ad))


### Others

* add og image to README file ([05bf52f](https://github.com/ledgity-labs/dapp/commit/05bf52f7b9422f47c9dbf32f7a455f4c4a52d267))
* **deps:** update nextjs monorepo to v13.4.7 ([b664d4f](https://github.com/ledgity-labs/dapp/commit/b664d4f9dcb80bebd4c3c6abd289cfd26c9b12db))

## [1.74.0](https://github.com/ledgity-labs/dapp/compare/v1.73.0...v1.74.0) (2023-06-23)


### Features

* allow cards' circles intensity to be configured. Set a lower intensity app's cards to improve ([3e3464a](https://github.com/ledgity-labs/dapp/commit/3e3464a0531d971fddeed2cba5800239812ebfb7))

## [1.73.0](https://github.com/ledgity-labs/dapp/compare/v1.72.0...v1.73.0) (2023-06-22)


### Features

* adjust site's footer size on <xl screens + fix footer paddings ([ef2348a](https://github.com/ledgity-labs/dapp/commit/ef2348a18ce4e087a4a047001a25810eab0b7e64))

## [1.72.0](https://github.com/ledgity-labs/dapp/compare/v1.71.0...v1.72.0) (2023-06-22)


### Features

* increase shadow of site's footer ([bbad6d2](https://github.com/ledgity-labs/dapp/commit/bbad6d205e9af80b4d0ad1e55c3737303a57866a))

## [1.71.0](https://github.com/ledgity-labs/dapp/compare/v1.70.0...v1.71.0) (2023-06-22)


### Features

* add grainy noise effect to whole website ([70d2da4](https://github.com/ledgity-labs/dapp/commit/70d2da49bfebf2c08d0c59df9675ce5ee36486f6))
* automate cards circle size calculation ([69e6238](https://github.com/ledgity-labs/dapp/commit/69e6238cbdd9f0b7710f4b3bdbfd8ce1a1ee184b))


### Fixes

* fix cubes display after changes to Card component ([71f4435](https://github.com/ledgity-labs/dapp/commit/71f44356bae49db696b4781b77661729959e6dd5))

## [1.70.0](https://github.com/ledgity-labs/dapp/compare/v1.69.0...v1.70.0) (2023-06-22)


### Features

* **home:** ton of adjustments, bolder headings, improved "How it works?" section ([4f97af5](https://github.com/ledgity-labs/dapp/commit/4f97af5f40be02101fe58869d872e7998bb92d26))
* improve cards glows so they are less likely to conflict with content + per card circle size ([58a9e9d](https://github.com/ledgity-labs/dapp/commit/58a9e9d4c15337a21e2bd0f7bede64a33e5c91cb))
* make top of site footer rounded ([f9dde3c](https://github.com/ledgity-labs/dapp/commit/f9dde3cadd7ee731591ed82d26f1b4c290d6a209))
* the site footer is now a floating island ([a7cbdf7](https://github.com/ledgity-labs/dapp/commit/a7cbdf72cb2a26d2f5cfc16e20da956b73dfe784))

## [1.69.0](https://github.com/ledgity-labs/dapp/compare/v1.68.0...v1.69.0) (2023-06-22)


### Features

* **app:** add dashboard chart switch ([b6b8511](https://github.com/ledgity-labs/dapp/commit/b6b8511d94b5910da3bfe02738487b1f250088da))
* **app:** add period radio group to dashboard chart box ([5f89a78](https://github.com/ledgity-labs/dapp/commit/5f89a782068ba4fb5197a93deab92c412cbbd02d))

## [1.68.0](https://github.com/ledgity-labs/dapp/compare/v1.67.0...v1.68.0) (2023-06-22)


### Features

* **app:** populate stats boxes, empty titles and coming soon charts in the app ([3881d86](https://github.com/ledgity-labs/dapp/commit/3881d86f6548db899122394cb68bedfab6760468))

## [1.67.0](https://github.com/ledgity-labs/dapp/compare/v1.66.1...v1.67.0) (2023-06-21)


### Features

* **app:** base desktop layouts for dashboard and staking tabs ([448f04f](https://github.com/ledgity-labs/dapp/commit/448f04fdd212b4b398b50bf11b1209d1fdb7264f))
* **app:** start populating the staking tab ([c81f1e1](https://github.com/ledgity-labs/dapp/commit/c81f1e1fef771747c02de99cef53edf7af6ba2fd))

## [1.66.1](https://github.com/ledgity-labs/dapp/compare/v1.66.0...v1.66.1) (2023-06-21)


### Fixes

* **app:** alignment adjustments on invest tab ([dc24e0f](https://github.com/ledgity-labs/dapp/commit/dc24e0f95875ce03fc03157d54c7d39a8df9681b))

## [1.66.0](https://github.com/ledgity-labs/dapp/compare/v1.65.0...v1.66.0) (2023-06-21)


### Features

* **app:** first structure of invest tab + cleaner rewrite of Card component ([bdffbe4](https://github.com/ledgity-labs/dapp/commit/bdffbe4ba4334cd3b8187bcb0454d94dccda573d))
* create 3 empty components for the 3 app's tabs + implement those in the app page.tsx ([7a4b279](https://github.com/ledgity-labs/dapp/commit/7a4b279e607c42fef969dda7ffac8577bca3dd5d))

## [1.65.0](https://github.com/ledgity-labs/dapp/compare/v1.64.1...v1.65.0) (2023-06-21)


### Features

* **app:** new Tabs component + implements app tabs and temporarily hide app footer ([f802834](https://github.com/ledgity-labs/dapp/commit/f8028347efc243140a96e9e338db48056a1bb605))


### Others

* re-organize components/ folder and prepare folders and file for the app + fix app loader ([60bb301](https://github.com/ledgity-labs/dapp/commit/60bb30105d71a1877875fc81fd53f305badba293))

## [1.64.1](https://github.com/ledgity-labs/dapp/compare/v1.64.0...v1.64.1) (2023-06-21)


### Fixes

* **home:** fix more button position on xs screens ([017770b](https://github.com/ledgity-labs/dapp/commit/017770b2992442306596176691779f704634b763))

## [1.64.0](https://github.com/ledgity-labs/dapp/compare/v1.63.1...v1.64.0) (2023-06-21)


### Features

* create a LazyDApp component that prevents preloading of DApp from other layouts ([ff65d4f](https://github.com/ledgity-labs/dapp/commit/ff65d4f6ba4cf71084e48dd630418863c3af96b9))


### Fixes

* add missing NextJS metadataBase url ([9dc1bf5](https://github.com/ledgity-labs/dapp/commit/9dc1bf52bbd881123b3bc65b0033b85ee2c95acc))

## [1.63.1](https://github.com/ledgity-labs/dapp/compare/v1.63.0...v1.63.1) (2023-06-20)


### Fixes

* **ci:** remove changed files check ([5bb4ec1](https://github.com/ledgity-labs/dapp/commit/5bb4ec15b2885975bf2caead04feedfc88e9a535))


### Others

* **deps:** update dependency eslint to v8.43.0 ([01b73f4](https://github.com/ledgity-labs/dapp/commit/01b73f4ccca75eeb6e4cb53b08244e28e9310d08))
* **deps:** update dependency eslint-config-next to v13.4.6 ([b150ae0](https://github.com/ledgity-labs/dapp/commit/b150ae09d1013d9b1300f61368f71dac47a25aea))
* **deps:** update react monorepo ([ddb116e](https://github.com/ledgity-labs/dapp/commit/ddb116e947b45fb4edcb4c48396a58048006cf95))

## [1.63.0](https://github.com/ledgity-labs/dapp/compare/v1.62.2...v1.63.0) (2023-06-20)


### Features

* a ton of updates, see long description ([4684576](https://github.com/ledgity-labs/dapp/commit/46845761fec0b9577b259f303b1ef523a381219a))


### Others

* move fonts declarations to their own file ([a7c797a](https://github.com/ledgity-labs/dapp/commit/a7c797a2dcb5be3dce81ff81a2f949443947002b))

## [1.62.2](https://github.com/ledgity-labs/dapp/compare/v1.62.1...v1.62.2) (2023-06-14)


### Others

* **deps:** update react monorepo ([667a8b8](https://github.com/ledgity-labs/dapp/commit/667a8b8600a10b664a1f3335cb3f1420978d2471))


### Fixes

* remove old version of LToken contract ([af44a2b](https://github.com/ledgity-labs/dapp/commit/af44a2b5261229016f3ac83daf3e5d342b91a25d))

## [1.62.1](https://github.com/ledgity-labs/dapp/compare/v1.62.0...v1.62.1) (2023-06-12)


### Fixes

* fix typo and move setAPR() to InvestUpgradeable abstract contract ([44106ca](https://github.com/ledgity-labs/dapp/commit/44106ca72454a53deabf688663166a9a821c3be3))


### Others

* hide new files and folders in settings.json ([5dca8c9](https://github.com/ledgity-labs/dapp/commit/5dca8c9e5f35b25c465139115f5128ed03d14c8e))

## [1.62.0](https://github.com/ledgity-labs/dapp/compare/v1.61.0...v1.62.0) (2023-06-12)


### Features

* ends a first version of LTYStaking contract by implementing stake() and unstake() as well as ([afdfe75](https://github.com/ledgity-labs/dapp/commit/afdfe7550c849d4b744d309a530814ce973b7fae))


### Docs

* fix missing new functions documentation in contracts ([f15b7cf](https://github.com/ledgity-labs/dapp/commit/f15b7cf24b478840a9dfa5db6f58a56fe94d16d7))

## [1.61.0](https://github.com/ledgity-labs/dapp/compare/v1.60.0...v1.61.0) (2023-06-12)


### Features

* ton of update mostly about LToken, see long description ([95633bf](https://github.com/ledgity-labs/dapp/commit/95633bf4623aa383c4acbd858f46f2fdca8742f2))


### Others

* **deps:** update nextjs monorepo to v13.4.5 ([6fa3d4e](https://github.com/ledgity-labs/dapp/commit/6fa3d4ef3a6ef5c065fda5cf8bdb36d96edb96be))

## [1.60.0](https://github.com/ledgity-labs/dapp/compare/v1.59.0...v1.60.0) (2023-06-11)


### Features

* **investupgradeable:** rename some entities, improve code readability and documentation ([c7c1163](https://github.com/ledgity-labs/dapp/commit/c7c1163fac6d0721cdd92e99c80f9a9a32baaca2))


### Others

* prevent releases that only change hardhat related stuff to trigger a Vercel deploy ([ac4c2b3](https://github.com/ledgity-labs/dapp/commit/ac4c2b38891f189d1f2261885e13db2b337cfe12))

## [1.59.0](https://github.com/ledgity-labs/dapp/compare/v1.58.1...v1.59.0) (2023-06-11)


### Features

* huge contract docs cleanup + rewrite of some code to improve readability and/or efficiency ([29f74bf](https://github.com/ledgity-labs/dapp/commit/29f74bf53537d868f7921418c14dcd6902c83175))


### Others

* **deps:** update dependency @types/react to v18.2.11 ([152e4d0](https://github.com/ledgity-labs/dapp/commit/152e4d00849879a9e869f8fdbd22c8c27f46e266))

## [1.58.1](https://github.com/ledgity-labs/dapp/compare/v1.58.0...v1.58.1) (2023-06-10)


### Fixes

* **home:** fix not well placed hero cube ([6e3f52b](https://github.com/ledgity-labs/dapp/commit/6e3f52baa6f4e383c72dd5ee596b5b8033029521))


### Others

* code and documentation cleanups in UDS3 and APRCheckpoints libraries ([c3fb245](https://github.com/ledgity-labs/dapp/commit/c3fb24584666a86a0705e30cb8ed9a544d9aba65))
* prevent hardhat related stuff to trigger Vercel redeploy ([8880108](https://github.com/ledgity-labs/dapp/commit/88801086aa1ea4bd95f6f5d37108ad32b862e22d))

## [1.58.0](https://github.com/ledgity-labs/dapp/compare/v1.57.1...v1.58.0) (2023-06-10)


### Features

* **home:** scale down glow image + background color adjustment ([5b37d19](https://github.com/ledgity-labs/dapp/commit/5b37d197059d1e6d5f2ac121a98073ef6d9d6e5d))

## [1.57.1](https://github.com/ledgity-labs/dapp/compare/v1.57.0...v1.57.1) (2023-06-10)


### Fixes

* fix some accessibility issues (no name links & viewport maximum scale < 5) ([ad15c77](https://github.com/ledgity-labs/dapp/commit/ad15c7765da4a565b09e9f12a9c9eb3f9653adc6))

## [1.57.0](https://github.com/ledgity-labs/dapp/compare/v1.56.0...v1.57.0) (2023-06-10)


### Features

* add a ton of page metadata to improve experience on referrers ([bb4ead1](https://github.com/ledgity-labs/dapp/commit/bb4ead19676982547df4ddcaca46a7ec579c096b))


### Others

* remove usage of UDS3 where it wasn't required ([f7668a6](https://github.com/ledgity-labs/dapp/commit/f7668a6b44717a4863cd48906f577783d82a949e))

## [1.56.0](https://github.com/ledgity-labs/dapp/compare/v1.55.0...v1.56.0) (2023-06-09)


### Features

* **ltoken:** refactory exceeding funds transfering in a function + implement it also in _withdrawTo ([9ca5c08](https://github.com/ledgity-labs/dapp/commit/9ca5c08e2c7a0a3c1e25e0532086f0c175f930b1))

## [1.55.0](https://github.com/ledgity-labs/dapp/compare/v1.54.1...v1.55.0) (2023-06-09)


### Features

* **ltoken:** improve contract's resiliency by using SafeERC20 library to interact with underlying ([1bd185b](https://github.com/ledgity-labs/dapp/commit/1bd185b704817096888cb020481501ef1d9ba880))


### Others

* move LTY staking tiers to LTYStaking contract + add isEligibleTo() helper function ([cd2c10e](https://github.com/ledgity-labs/dapp/commit/cd2c10e333c0934c8ff754dd9cc7d0c3f941f928))

## [1.54.1](https://github.com/ledgity-labs/dapp/compare/v1.54.0...v1.54.1) (2023-06-09)


### Fixes

* **home:** add webkit mask position to support chrome and co ([6254542](https://github.com/ledgity-labs/dapp/commit/625454210268dac04bf9ee5c3cfaf7ccbd1b64d1))

## [1.54.0](https://github.com/ledgity-labs/dapp/compare/v1.53.0...v1.54.0) (2023-06-09)


### Features

* **home:** animations and reponsive adjustments ([52ee196](https://github.com/ledgity-labs/dapp/commit/52ee1964df9671dda7e81049c106cdea775f0931))

## [1.53.0](https://github.com/ledgity-labs/dapp/compare/v1.52.0...v1.53.0) (2023-06-09)


### Features

* **home:** a ton of responsive adjustments ([4e02387](https://github.com/ledgity-labs/dapp/commit/4e02387d75ec55e0ce3cc33e612690703b326542))

## [1.52.0](https://github.com/ledgity-labs/dapp/compare/v1.51.1...v1.52.0) (2023-06-08)


### Features

* **home:** adjust glows on mobile screens ([de252bd](https://github.com/ledgity-labs/dapp/commit/de252bdc5549158a0a9e88c1dec0a9f1d839f25b))

## [1.51.1](https://github.com/ledgity-labs/dapp/compare/v1.51.0...v1.51.1) (2023-06-08)


### Fixes

* **home:** prevent "?" of CTA title to wrap alone ([0c0220b](https://github.com/ledgity-labs/dapp/commit/0c0220b57a982696c889d833ab9c49fb1909c827))

## [1.51.0](https://github.com/ledgity-labs/dapp/compare/v1.50.0...v1.51.0) (2023-06-08)


### Features

* **home:** wrap CTA title on xs screens ([afd6a4e](https://github.com/ledgity-labs/dapp/commit/afd6a4ee8b93a025740d1cd8680fa619f4d19e49))

## [1.50.0](https://github.com/ledgity-labs/dapp/compare/v1.49.2...v1.50.0) (2023-06-08)


### Features

* **home:** cleanups and tiny adjustments ([14f6252](https://github.com/ledgity-labs/dapp/commit/14f62529813a153d0dd5e685b338100b974833f2))

## [1.49.2](https://github.com/ledgity-labs/dapp/compare/v1.49.1...v1.49.2) (2023-06-08)


### Fixes

* **home:** fix rendering on Safary mobile ([5894468](https://github.com/ledgity-labs/dapp/commit/5894468b1c4bf3a0007facf37576b671e18e8711))

## [1.49.1](https://github.com/ledgity-labs/dapp/compare/v1.49.0...v1.49.1) (2023-06-08)


### Fixes

* fix typeform buttons and Learn more button ([5cfe604](https://github.com/ledgity-labs/dapp/commit/5cfe604b4e9a0de3854985ff86b359f067a4bd17))

## [1.49.0](https://github.com/ledgity-labs/dapp/compare/v1.48.0...v1.49.0) (2023-06-08)


### Features

* **home:** re-enable FadeIn and disable it on small screens ([2cf5573](https://github.com/ledgity-labs/dapp/commit/2cf5573562e911663b28053b44d2a2210e35f2dd))

## [1.48.0](https://github.com/ledgity-labs/dapp/compare/v1.47.1...v1.48.0) (2023-06-08)


### Features

* disable hero animation on mobile screens ([8fc3328](https://github.com/ledgity-labs/dapp/commit/8fc332831650d815827e02c4c07779a0650a8837))

## [1.47.1](https://github.com/ledgity-labs/dapp/compare/v1.47.0...v1.47.1) (2023-06-08)


### Fixes

* **home:** fix glows on small screens + cubes' hoverring ([08b8e87](https://github.com/ledgity-labs/dapp/commit/08b8e870b74f07fd034034dd35418e935382d15e))

## [1.47.0](https://github.com/ledgity-labs/dapp/compare/v1.46.2...v1.47.0) (2023-06-08)


### Features

* **home:** re-enable hero section animation ([d37b7dc](https://github.com/ledgity-labs/dapp/commit/d37b7dcf0def72479c557fc1ebc8acb68c7dc0f9))

## [1.46.2](https://github.com/ledgity-labs/dapp/compare/v1.46.1...v1.46.2) (2023-06-08)


### Fixes

* fix horizontal scroll on small screens + defer typeform script ([06699f8](https://github.com/ledgity-labs/dapp/commit/06699f82fadd8a67db37e2e79718c14222a7b167))

## [1.46.1](https://github.com/ledgity-labs/dapp/compare/v1.46.0...v1.46.1) (2023-06-08)


### Fixes

* remove unused fonts groups ([39d7419](https://github.com/ledgity-labs/dapp/commit/39d7419402428df5d8d026b18f4a710149144f74))

## [1.46.0](https://github.com/ledgity-labs/dapp/compare/v1.45.1...v1.46.0) (2023-06-08)


### Features

* **home:** update glows images in webp ([972f1da](https://github.com/ledgity-labs/dapp/commit/972f1da2d77aaf363496feb071ee20ab3b40a24a))


### Others

* update hardhat-related dependencies to support Ethers v6 + some contract fixes ([6dfc5b3](https://github.com/ledgity-labs/dapp/commit/6dfc5b370e9f53a30a3ba384d75aa6bae2df0e6d))

## [1.45.1](https://github.com/ledgity-labs/dapp/compare/v1.45.0...v1.45.1) (2023-06-08)


### Others

* refactor the FadeIn animation in its own component ([3a99be0](https://github.com/ledgity-labs/dapp/commit/3a99be0900b3d4f2ae40ea2d8861c2c439e5f88f))


### Fixes

* **home:** fix fadein animation on small screens ([afbac31](https://github.com/ledgity-labs/dapp/commit/afbac314fdca5c66d55652a29ca526ab127cacbb))

## [1.45.0](https://github.com/ledgity-labs/dapp/compare/v1.44.0...v1.45.0) (2023-06-08)


### Features

* randomly reverse cubes spinning, refactor cubes in their own components ([1677583](https://github.com/ledgity-labs/dapp/commit/167758333a68ba112a5fb096714e2778e6d847fb))

## [1.44.0](https://github.com/ledgity-labs/dapp/compare/v1.43.0...v1.44.0) (2023-06-08)


### Features

* upload new og image ([d2d0168](https://github.com/ledgity-labs/dapp/commit/d2d0168bec4fc71866673cbd8f4c213bdae6520f))

## [1.43.0](https://github.com/ledgity-labs/dapp/compare/v1.42.0...v1.43.0) (2023-06-08)


### Features

* optimize assets (some of them are used as bg as so not optimized by NextJS automatically) ([bf4d3b2](https://github.com/ledgity-labs/dapp/commit/bf4d3b224a48593660f3918fb157f8cc017070bd))

## [1.42.0](https://github.com/ledgity-labs/dapp/compare/v1.41.0...v1.42.0) (2023-06-08)


### Features

* open typeform on whitepaper button click ([70a143f](https://github.com/ledgity-labs/dapp/commit/70a143f8d1adc2f61f872661d56746507aae21d1))

## [1.41.0](https://github.com/ledgity-labs/dapp/compare/v1.40.0...v1.41.0) (2023-06-08)


### Features

* **home:** add delubac partner, fix some typo and missing links ([0005133](https://github.com/ledgity-labs/dapp/commit/0005133efa70f4f4d82f50d2a31c6e3b65ebf49b))


### Others

* **deps:** update dependency @types/react to v18.2.9 ([ec182d1](https://github.com/ledgity-labs/dapp/commit/ec182d14effc7a8fccd506039338959352468c0b))
* **deps:** update dependency conventional-changelog-conventionalcommits to v6 ([33deeeb](https://github.com/ledgity-labs/dapp/commit/33deeeb48afd97ec0edce18ed85183576d445b46))

## [1.40.0](https://github.com/ledgity-labs/dapp/compare/v1.39.0...v1.40.0) (2023-06-08)


### Features

* upload opengraph-image.jpg ([e3db830](https://github.com/ledgity-labs/dapp/commit/e3db83079791ab822707b35a0e50e9d3521578b9))


### Others

* update dependencies ([11c02bb](https://github.com/ledgity-labs/dapp/commit/11c02bb9f807d55005a2a2516aa9b2a125b4acb9))

## [1.39.0](https://github.com/ledgity-labs/dapp/compare/v1.38.0...v1.39.0) (2023-06-08)


### Features

* **contracts:** a ton of progress about contracts, see description ([dbe04a9](https://github.com/ledgity-labs/dapp/commit/dbe04a9fe705e523aa4cd706b6ed830f0078d53f))
* implement "No liquidations" feature's illustration ([a8104f0](https://github.com/ledgity-labs/dapp/commit/a8104f0e728bb61576c08724a2b95f74e8d88065))


### Others

* **contracts:** refact Blacklist stuff in an abstract Blacklistable contract ([5886801](https://github.com/ledgity-labs/dapp/commit/58868011b49351cc1c22908d39dce687648b8bff))

## [1.38.0](https://github.com/ledgity-labs/dapp/compare/v1.37.0...v1.38.0) (2023-06-06)


### Features

* refactor APRCheckpoints stuff into a library and implement blacklist in LTYStaking contract ([053aa3a](https://github.com/ledgity-labs/dapp/commit/053aa3a4d4611152e384e7ee0d6d572d72a67908))


### Others

* **deps:** update dependency eslint to v8.42.0 ([d8e035a](https://github.com/ledgity-labs/dapp/commit/d8e035a8fe72b5ab18ec82a4bc94768fa9e712b9))


### Fixes

* fix ui/ page missing "use client"; statement ([63517f2](https://github.com/ledgity-labs/dapp/commit/63517f2173b12baab9094b4ba061a8c4dffcc126))
* fix warning caused by mixed default and names exports in UI components ([ad790a6](https://github.com/ledgity-labs/dapp/commit/ad790a65ff2068a00d8cdc5f0193524067a92416))

## [1.37.0](https://github.com/ledgity-labs/dapp/compare/v1.36.0...v1.37.0) (2023-06-06)


### Features

* **contracts:** setup hardhat and write a first version of L-Token, LTY staking and blacklist contr ([a72b996](https://github.com/ledgity-labs/dapp/commit/a72b9962b4ca591b0b8cfd5a0b56820f4264710b))

## [1.36.0](https://github.com/ledgity-labs/dapp/compare/v1.35.0...v1.36.0) (2023-06-02)


### Features

* add padding to whitepaper CTA to prevent it reaching screen border on small devices ([e5ef49f](https://github.com/ledgity-labs/dapp/commit/e5ef49f6a777043712387e86ee3c07b1c9ba41a7))


### Others

* **deps:** update dependency @types/react to v18.2.8 ([c00e24c](https://github.com/ledgity-labs/dapp/commit/c00e24cf1e4ad81cd6eafd9b376e9eee9d70a9e8))
* **deps:** update dependency typescript to v5.1.3 ([0666440](https://github.com/ledgity-labs/dapp/commit/0666440f9bb2447a7dcf064a1b8cb717c3857936))

## [1.35.0](https://github.com/ledgity-labs/dapp/compare/v1.34.0...v1.35.0) (2023-06-02)


### Features

* **home:** add new hero stats design for xs devices ([5327626](https://github.com/ledgity-labs/dapp/commit/53276267638c8b47338d59f4d0631dd279f7d475))
* improve hero heading display by wrapping words on xs screens and auto-resizing heading ([e5993cb](https://github.com/ledgity-labs/dapp/commit/e5993cb851551b486278775cf6f6c1f82d511607))

## [1.34.0](https://github.com/ledgity-labs/dapp/compare/v1.33.0...v1.34.0) (2023-06-02)


### Features

* decrease z-index of cubes + add backdrop blur to outline buttons for smooth effect ([70c98f2](https://github.com/ledgity-labs/dapp/commit/70c98f27ebb6a1af0ad851d285d4c3ae7ba3f188))
* **home:** reposition and hide some cubes on sm and md devices ([50bbc23](https://github.com/ledgity-labs/dapp/commit/50bbc233d52685197113a2d1546f97af479f34f9))

## [1.33.0](https://github.com/ledgity-labs/dapp/compare/v1.32.0...v1.33.0) (2023-06-01)


### Features

* hide and move some cubes on lg screen compared to xl ones ([6e67710](https://github.com/ledgity-labs/dapp/commit/6e67710aa84694110bb12bd3f1bc2f5a2feda5c4))
* **home:** add more cubes + add webkit mask properties to support chrome browser ([ec69d22](https://github.com/ledgity-labs/dapp/commit/ec69d22701ca0a9c96158484231a1ba1c7c427dd))

## [1.32.0](https://github.com/ledgity-labs/dapp/compare/v1.31.0...v1.32.0) (2023-06-01)


### Features

* add animated subtle animated cubes ([4a45632](https://github.com/ledgity-labs/dapp/commit/4a456324750268d646744badf1bd9b98794fb6d1))
* **home:** add fadein to other home sections ([f1059ec](https://github.com/ledgity-labs/dapp/commit/f1059ec482404b6d04c07b05f6d1a39e4d02e159))

## [1.31.0](https://github.com/ledgity-labs/dapp/compare/v1.30.0...v1.31.0) (2023-06-01)


### Features

* adjust animation + make it appears correctly on devices smaller than 900px width ([9500c22](https://github.com/ledgity-labs/dapp/commit/9500c22f0413c5cd966115d39c152daf815967f0))

## [1.30.0](https://github.com/ledgity-labs/dapp/compare/v1.29.0...v1.30.0) (2023-06-01)


### Features

* **home:** add animation while scrolling from hero to features ([f0fb30d](https://github.com/ledgity-labs/dapp/commit/f0fb30d96c14fdd7b4caec9808e659a7270bcd90))

## [1.29.0](https://github.com/ledgity-labs/dapp/compare/v1.28.0...v1.29.0) (2023-06-01)


### Features

* make the "Learn more" button functional + install Framer Motion ([94f556c](https://github.com/ledgity-labs/dapp/commit/94f556c55d3155edab6fe13077206bba8a26f464))

## [1.28.0](https://github.com/ledgity-labs/dapp/compare/v1.27.0...v1.28.0) (2023-06-01)


### Features

* add hover effect to logo ([79464b9](https://github.com/ledgity-labs/dapp/commit/79464b982b7ee8e77467b66d50e2f21757e6b22a))
* bunch of tiny spacing and contrast adjustments ([96a9e75](https://github.com/ledgity-labs/dapp/commit/96a9e755b3444cd1c9d952165dfdce9844e99d46))
* enforce global transition duration ([8ee34c8](https://github.com/ledgity-labs/dapp/commit/8ee34c8d0480e199723157fcb4fe5a0fb002632e))
* tiny adjustments on How it works section ([4580578](https://github.com/ledgity-labs/dapp/commit/458057801cf2752bf79511117faf6fc5e696311a))

## [1.27.0](https://github.com/ledgity-labs/dapp/compare/v1.26.1...v1.27.0) (2023-06-01)


### Features

* add social links URLs ([ea32eae](https://github.com/ledgity-labs/dapp/commit/ea32eae0ed2a5810234afc73e9811f2feb19525a))
* integrate typeform to retrieve emails until app is available ([a7a55c5](https://github.com/ledgity-labs/dapp/commit/a7a55c5653487e6794d3e6518e9362c1b0a82549))


### Others

* **deps:** update dependency postcss to v8.4.24 ([4fa2ebd](https://github.com/ledgity-labs/dapp/commit/4fa2ebda5bdb339a347bd3bf90a375f4edbaf63e))


### Fixes

* remove margin gap right before footer ([0c1e908](https://github.com/ledgity-labs/dapp/commit/0c1e908ace8050da59290c7ca2700dd3a226912a))

## [1.26.1](https://github.com/ledgity-labs/dapp/compare/v1.26.0...v1.26.1) (2023-06-01)


### Others

* **deps:** update dependency @types/react to v18.2.7 ([4a0779d](https://github.com/ledgity-labs/dapp/commit/4a0779d751c640533e2a47074e886566f53db8d7))
* **deps:** update nextjs monorepo to v13.4.4 ([187f3ed](https://github.com/ledgity-labs/dapp/commit/187f3edda8e6531528132debd93cbf24c1d5a3e3))


### Fixes

* **deps:** update dependency @t3-oss/env-nextjs to ^0.4.0 ([608dc76](https://github.com/ledgity-labs/dapp/commit/608dc7649c72e13840fd846f774b88b6ac53d10b))

## [1.26.0](https://github.com/ledgity-labs/dapp/compare/v1.25.0...v1.26.0) (2023-06-01)


### Features

* make "How it works?" section responsive ([088024a](https://github.com/ledgity-labs/dapp/commit/088024aabe1a713b502ef4c325481d234b17cb83))
* new version of "How it works?" section of home page ([bf464b8](https://github.com/ledgity-labs/dapp/commit/bf464b820507b1af000ad3b18fd3dccde2b48890))
* refactor logo in its own component + improve its readability on light theme ([4777f4c](https://github.com/ledgity-labs/dapp/commit/4777f4c5de72bd88d80bba50518a49159ea13c7c))


### Fixes

* fix background gap at the bottom of home page ([f638160](https://github.com/ledgity-labs/dapp/commit/f638160cca58f87923f25cf25d147632b13c2f1c))

## [1.25.0](https://github.com/ledgity-labs/dapp/compare/v1.24.0...v1.25.0) (2023-05-31)


### Features

* a bunch of tiny readability and reading priority improvements ([056c438](https://github.com/ledgity-labs/dapp/commit/056c4380ee14633a5b5e945d339cf112c8538d7e))
* add subtle radial gradients to features cards texts to improve readability ([30a4e07](https://github.com/ledgity-labs/dapp/commit/30a4e07a5661c7c52c1ebba21d964ab8cbbcbb00))
* some graphical adjustments to cards and illustrations to improve hover effect and readability ([86f901a](https://github.com/ledgity-labs/dapp/commit/86f901a14387e51a8f6f678020d6a9d8ee9b699f))

## [1.24.0](https://github.com/ledgity-labs/dapp/compare/v1.23.1...v1.24.0) (2023-05-31)


### Features

* makes features cards animated on hover ([a708b04](https://github.com/ledgity-labs/dapp/commit/a708b04808e94c925ca49dcd9f118e1c346f87ce))
* upload new features cards' illustrations and texts ([53021ea](https://github.com/ledgity-labs/dapp/commit/53021ea6f0235c5f41d8737f467ef2855ed48f6d))


### Others

* **deps:** update dependency eslint to v8.41.0 ([9a127c1](https://github.com/ledgity-labs/dapp/commit/9a127c1c41de7a70502d6058b79695c0d7bb83ca))
* **deps:** update nextjs monorepo to v13.4.3 ([7bd7042](https://github.com/ledgity-labs/dapp/commit/7bd70422465ecb5e105d6b30f73bbbd528a34b5a))

## [1.23.1](https://github.com/ledgity-labs/dapp/compare/v1.23.0...v1.23.1) (2023-05-22)


### Fixes

* tiny adjustments about responsivness ([cf877ef](https://github.com/ledgity-labs/dapp/commit/cf877ef2317cdb296b0810a3c5dc4e502651ee50))

## [1.23.0](https://github.com/ledgity-labs/dapp/compare/v1.22.0...v1.23.0) (2023-05-22)


### Features

* **home:** make features cards and "how it works?" section responsive ([b3e218e](https://github.com/ledgity-labs/dapp/commit/b3e218e6faeef174281ab69d0568fb5ef8ebb723))
* **home:** make partners section responsive ([26c50c6](https://github.com/ledgity-labs/dapp/commit/26c50c60af0dd7361aa103c768ed03c342b86712))
* make footer responsive ([0c42188](https://github.com/ledgity-labs/dapp/commit/0c421889410e594a35f9398441011049f00fcc1a))

## [1.22.0](https://github.com/ledgity-labs/dapp/compare/v1.21.0...v1.22.0) (2023-05-22)


### Features

* first version of footer ([8c18d1a](https://github.com/ledgity-labs/dapp/commit/8c18d1a07e61e41f8028b7255a9e5141beb18b72))
* make header and hero responsive ([bbe0e27](https://github.com/ledgity-labs/dapp/commit/bbe0e27e31b527a6ae45338e564426b690e74fce))

## [1.21.0](https://github.com/ledgity-labs/dapp/compare/v1.20.0...v1.21.0) (2023-05-18)


### Features

* **home:** add partners section ([05f4fac](https://github.com/ledgity-labs/dapp/commit/05f4facf39c50f385f1bbb3155da9ada9aad3bd0))
* **home:** increase spacing between section and add hover effect to partners logos ([7320c3d](https://github.com/ledgity-labs/dapp/commit/7320c3d71015d761eadce1fd35f7468ace1c52ed))
* **home:** progessively hide scroll indicator onscroll ([aca3dbb](https://github.com/ledgity-labs/dapp/commit/aca3dbb5d9823083d92b14041e8c1338314c18d1))
* **home:** tiny adjustments, new CTA, mono-column "How it works?" section ([ab3a02b](https://github.com/ledgity-labs/dapp/commit/ab3a02b17aa7f76e5878ee6ee64e23dff1173fd1))

## [1.20.0](https://github.com/ledgity-labs/dapp/compare/v1.19.0...v1.20.0) (2023-05-18)


### Features

* **home:** improve feature card appearance + new glow asset (used as background for home body) ([bdb864d](https://github.com/ledgity-labs/dapp/commit/bdb864d7aa87e6b454da11ae7808bb711dcd604d))

## [1.19.0](https://github.com/ledgity-labs/dapp/compare/v1.18.0...v1.19.0) (2023-05-18)


### Features

* **home:** a bunch of home page updates (hero transition, CSS replaced by tailwind, new glow, ...) ([9ba4b14](https://github.com/ledgity-labs/dapp/commit/9ba4b145a7765a5da61c80c3f7b0723a2014992e))

## [1.18.0](https://github.com/ledgity-labs/dapp/compare/v1.17.0...v1.18.0) (2023-05-17)


### Features

* add radius-based variants of <Card/> component ([888915b](https://github.com/ledgity-labs/dapp/commit/888915b31418a39e66b5681a38d0a7f2a3b0bca7))
* **ui:** add new <Card/> radius variant to UI kit page ([f62064d](https://github.com/ledgity-labs/dapp/commit/f62064d79437478c4dc339f2cae319e8ac313995))


### Fixes

* fix deployment error + some text typos ([26ac08f](https://github.com/ledgity-labs/dapp/commit/26ac08fcf6daa2f76097e11f20c89ddaefd8770e))

## [1.17.0](https://github.com/ledgity-labs/dapp/compare/v1.16.0...v1.17.0) (2023-05-17)


### Features

* **home:** add a minimal Footer component and implement it on layout ([2ae8fca](https://github.com/ledgity-labs/dapp/commit/2ae8fcabf4c489316abc971ccd3d043e7e71aff9))
* **home:** first version of "How it works?" section ([41c8a16](https://github.com/ledgity-labs/dapp/commit/41c8a161eb4f3e0b748886fa8e985ec0cf696c6e))

## [1.16.0](https://github.com/ledgity-labs/dapp/compare/v1.15.0...v1.16.0) (2023-05-17)


### Features

* **card:** add subtle glow to card content also + enable turbopack ([cd20b5d](https://github.com/ledgity-labs/dapp/commit/cd20b5d0bb555e0b90fd2cdeeca5201dfc34a2e4))

## [1.15.0](https://github.com/ledgity-labs/dapp/compare/v1.14.0...v1.15.0) (2023-05-17)


### Features

* **home:** first version of feature cards ([42f65e7](https://github.com/ledgity-labs/dapp/commit/42f65e7fa9d34519a9902cac5b4d87c0b5a33524))

## [1.14.0](https://github.com/ledgity-labs/dapp/compare/v1.13.0...v1.14.0) (2023-05-17)


### Features

* add favicon + replace usage of deprecated next/head by metadata API ([43af5f2](https://github.com/ledgity-labs/dapp/commit/43af5f20c7881ff3e6494aca88fa738b58b9c3fe))
* **header:** add a blured transparent background to header when scrollY is not at the very top ([efa0384](https://github.com/ledgity-labs/dapp/commit/efa0384032e1342afa5184a201a364ce755e46c5))


### Fixes

* fix ui page that were still relying on old card component + clean unused cards variants ([8da4b86](https://github.com/ledgity-labs/dapp/commit/8da4b8675c5a9f63c7c4e3e545d4562df1e37c2f))

## [1.13.0](https://github.com/ledgity-labs/dapp/compare/v1.12.0...v1.13.0) (2023-05-17)


### Features

* **cardshelper:** make the CardsHelper working on page change and improve its performances ([da352c9](https://github.com/ledgity-labs/dapp/commit/da352c9871fd3c19e25f6449409b190f48795333))


### Others

* cleanup unused backgroundImages in tailwind.config.js + remove old Card component ([2e5d5dc](https://github.com/ledgity-labs/dapp/commit/2e5d5dc5bf6c6c9dfe2396c92f145fab24ea7ebe))
* remove now unused stuff from Card component ([1025301](https://github.com/ledgity-labs/dapp/commit/1025301ec7f6058e1845736f31f5d39c98d3f2f3))

## [1.12.0](https://github.com/ledgity-labs/dapp/compare/v1.11.0...v1.12.0) (2023-05-17)


### Features

* **home:** a bunch of home page related features (see long description) ([5221c4a](https://github.com/ledgity-labs/dapp/commit/5221c4a7d65b9ef9e51c5eb47c0bfd12cd9b4789))

## [1.11.0](https://github.com/ledgity-labs/dapp/compare/v1.10.0...v1.11.0) (2023-05-16)


### Features

* **components:** add a tiny delay to Card glow movement and improvement CardsHelper performances ([2c000dc](https://github.com/ledgity-labs/dapp/commit/2c000dc7a4753a34b28525c4992a7c6158dc7c46))

## [1.10.0](https://github.com/ledgity-labs/dapp/compare/v1.9.0...v1.10.0) (2023-05-16)


### Features

* **components:** add first version of Cards glow effect ([9c0c58a](https://github.com/ledgity-labs/dapp/commit/9c0c58a5df0d1eabc73d9aaeeda584964b2e07c4))
* **components:** add style to the 2 Card components variants ([2966ef4](https://github.com/ledgity-labs/dapp/commit/2966ef48a697ca01ea346da72bc3e6f422384167))
* **home:** add empty features boxes ([49ebff5](https://github.com/ledgity-labs/dapp/commit/49ebff551041ff55c8971f6ecd91c9b6b9797e63))
* **ui:** improve the cards display in ui kit page ([a34639a](https://github.com/ledgity-labs/dapp/commit/a34639a0578c2806c5624d25e84f478d40f81f6a))

## [1.9.0](https://github.com/ledgity-labs/dapp/compare/v1.8.0...v1.9.0) (2023-05-16)


### Features

* **components:** add Card component outline ([a6c1a7d](https://github.com/ledgity-labs/dapp/commit/a6c1a7da972b083fdb1f701435a3f40601bc99ea))
* **home:** slightly reduce glow-light.png opacity ([6274619](https://github.com/ledgity-labs/dapp/commit/62746199feb0eac5e9fce750694bd0814211772b))
* **ui:** add Card component to the ui kit page ([174718b](https://github.com/ledgity-labs/dapp/commit/174718bb95d92339bad4299120e136bd8d3a1b54))

## [1.8.0](https://github.com/ledgity-labs/dapp/compare/v1.7.0...v1.8.0) (2023-05-15)


### Features

* **home:** make subtle glow more intense as well as tagline text gradient ([3876fda](https://github.com/ledgity-labs/dapp/commit/3876fda25cba6f5829ffe85184ddb998559aa492))

## [1.7.0](https://github.com/ledgity-labs/dapp/compare/v1.6.0...v1.7.0) (2023-05-15)


### Features

* **home:** temporarily remove header backdrop blur effect for a more immersive experience ([81d5467](https://github.com/ledgity-labs/dapp/commit/81d5467985a9a1b11d5b6b35b204c4fd84635664))

## [1.6.0](https://github.com/ledgity-labs/dapp/compare/v1.5.0...v1.6.0) (2023-05-15)


### Features

* center a bit more home tagline + tiny improvements on redability and maintainability ([abaffae](https://github.com/ledgity-labs/dapp/commit/abaffae2f95ba56f483c25ed71bf02e897a5941d))
* **home:** add a subtle top-right gradient effect to "real world assets" in tagline ([6a96b32](https://github.com/ledgity-labs/dapp/commit/6a96b323ff50454b74a35eb3f2fc66476bb2a2b2))
* **home:** add repeated radial gradient effect + makes stats cards more blurry and visible ([fbcd236](https://github.com/ledgity-labs/dapp/commit/fbcd236c4a82bc242f7afea066fdd229cf071b8a))

## [1.5.0](https://github.com/ledgity-labs/dapp/compare/v1.4.0...v1.5.0) (2023-05-15)


### Features

* improve home page by adding CTAs + elegant background glows ([22ab112](https://github.com/ledgity-labs/dapp/commit/22ab11291290259632d47a0e429ec544263d8ec6))

## [1.4.0](https://github.com/ledgity-labs/dapp/compare/v1.3.0...v1.4.0) (2023-05-15)


### Features

* improve <Button/> component usability using forwardRef and React.HTMLAttributes ([0422023](https://github.com/ledgity-labs/dapp/commit/0422023ab90014dd2c756c49338f887ba0bac7c7))


### Others

* include all types of commits into generated changelogs ([26654b9](https://github.com/ledgity-labs/dapp/commit/26654b98cf08b67acddd31be492c5e2ab7b5d5cd))

# [1.3.0](https://github.com/ledgity-labs/dapp/compare/v1.2.0...v1.3.0) (2023-05-14)


### Bug Fixes

* import alias prefix in api/score route.ts ([48bb83c](https://github.com/ledgity-labs/dapp/commit/48bb83ccdc97330d1922d93bec28f01a6659b1ed))


### Features

* add a minimal hero on home page ([8e98105](https://github.com/ledgity-labs/dapp/commit/8e9810529f58ae6555958b4eb5330f5239f6f82b))
* import assets and add a minimal header for outside app layout ([1f21b8e](https://github.com/ledgity-labs/dapp/commit/1f21b8ec4c11cd569b55ddc9bdb5040a39243b06))
* improve header logo alignment + refactor this one in its own component ([cfdcd1f](https://github.com/ledgity-labs/dapp/commit/cfdcd1f667fef6bb0152bac0ce4d1bafa0723645))

# [1.2.0](https://github.com/ledgity-labs/dapp/compare/v1.1.1...v1.2.0) (2023-05-13)


### Features

* a bunch of UI-related features (see commit long description) ([e0d8929](https://github.com/ledgity-labs/dapp/commit/e0d8929ccf2f7a4d94804bfc70da91eaec11dcde))
* **ui:** setup a minimal ui kit page ([b267377](https://github.com/ledgity-labs/dapp/commit/b2673772488c50769bd8ef026eabe71f92f15f6f))

## [1.1.1](https://github.com/ledgity-labs/dapp/compare/v1.1.0...v1.1.1) (2023-05-13)

### Bug Fixes

- fix Eslint config and apply Eslint recommandations ([bdeae33](https://github.com/ledgity-labs/dapp/commit/bdeae33f74dffe207c860ca33e71f6545c016705))

# 1.0.0 (2023-05-11)

### Features

- add minimal loading and error pages ([8d6fea1](https://github.com/ledgity-labs/dapp/commit/8d6fea1a5425cb0bc80654ae9f1e5e707cb75165))
- minimal project from create-next-app CLI ([add908b](https://github.com/ledgity-labs/dapp/commit/add908b973b5ea52ff419d1f6e3b4a1ff3b43b4a))
- setup minimal app routes skeleton ([83d1e5d](https://github.com/ledgity-labs/dapp/commit/83d1e5dec8758cbfe5095ffef4a6015145221552))

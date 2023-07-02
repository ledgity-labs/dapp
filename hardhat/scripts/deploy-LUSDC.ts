import { deployLTokenBeaconProxy } from "./lib/deployLTokenBeaconProxy";

const main = async () => await deployLTokenBeaconProxy("USDC", true);

export default main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
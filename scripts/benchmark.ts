import { Bench } from "tinybench";
import { exec } from "node:child_process";

const bench = new Bench({ time: 100 });

bench.add("vitest", async () => {
  await exec("pnpm --filter react-app run test");
});

await bench.warmup(); // make results more reliable, ref: https://github.com/tinylibs/tinybench/pull/50
await bench.run();

console.table(bench.table());

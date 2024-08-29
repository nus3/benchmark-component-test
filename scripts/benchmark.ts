import { Bench } from "tinybench";

const bench = new Bench({ time: 100 });

bench
  .add("faster task", () => {})
  .add("slower task", async () => {
    await new Promise((r) => setTimeout(r, 1)); // we wait 1ms :)
  })
  .todo("unimplemented bench");

await bench.warmup(); // make results more reliable, ref: https://github.com/tinylibs/tinybench/pull/50
await bench.run();

console.table(bench.table());

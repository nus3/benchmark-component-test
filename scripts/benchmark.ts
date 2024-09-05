import { Bench } from "tinybench";
import { exec } from "node:child_process";

const roundToFourthDecimal = (num: number) => {
  return Math.round(num * 10000) / 10000;
};

const bench = new Bench();

// TODO: なんか無限にtimestampが生成されるかも。バグってそう
// vitestでテスト実行したら終わるようなオプションが確かあったはず
bench.add("vitest", async () => {
  await exec("pnpm --filter react-app run test-ci");
});

await bench.warmup(); // make results more reliable, ref: https://github.com/tinylibs/tinybench/pull/50
await bench.run();

console.table(
  bench.table((task) => ({
    "Task Name": task.name,
    // the number of operations per second
    // 1秒間に何回、登録されたタスクが何回実行されるか？
    hz: roundToFourthDecimal(task.result.hz),
    min: roundToFourthDecimal(task.result.min),
    max: roundToFourthDecimal(task.result.max),
    // samples mean/average (estimate of the population mean)
    mean: roundToFourthDecimal(task.result.mean),
    // p75 percentile
    p75: roundToFourthDecimal(task.result.p75),
    p99: roundToFourthDecimal(task.result.p99),
    // relative margin of error
    rme: roundToFourthDecimal(task.result.rme),
    samples: roundToFourthDecimal(task.result.samples.length),
  })),
);

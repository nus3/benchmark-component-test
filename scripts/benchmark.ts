import { exec } from "node:child_process";
import { performance } from "node:perf_hooks";
import { promisify } from "node:util";

const execAsync = promisify(exec);

const runScript = async (script: string, label: string) => {
  const start = performance.now();
  await execAsync(script);
  const end = performance.now();
  const duration = (end - start) / 1000;
  return { name: label, duration: `${duration.toFixed(2)}s` };
};

const main = async () => {
  const scripts = [
    { script: "pnpm --filter react-app run test:jsdom", label: "vitest-jsdom" },
    {
      script: "pnpm --filter react-app run test:playwright",
      label: "vitest-playwright",
    },
    // TODO: webdriverioでテストファイルごとにテストを並列で実行できたら計測対象に追加する
    // {
    //   script: "pnpm --filter react-app run test:webdriverio",
    //   label: "vitest-webdriverio",
    // },
    // TODO: storybookをビルドして、サーバー起動するのが前段階で必要
    // {
    //   script: "pnpm --filter react-app run test:storybook",
    //   label: "storybook",
    // },
  ];

  const isParallel = process.argv.includes("--parallel");

  if (isParallel) {
    const results = await Promise.all(
      scripts.map(({ script, label }) => runScript(script, label)),
    );
    console.table(results);
  } else {
    const results = [];
    for (const { script, label } of scripts) {
      const result = await runScript(script, label);
      results.push(result);
    }
    console.table(results);
  }
};

main();

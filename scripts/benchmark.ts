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
    { script: "pnpm --filter react-app run test-ci", label: "vitest" },
    { script: "pnpm --filter react-app run test-ci", label: "vitest2" },
  ];

  const results = await Promise.all(
    scripts.map(({ script, label }) => runScript(script, label)),
  );
  console.table(results);
};

main();

# WebdriverIO

Component Testingの機能を提供してそう

https://webdriver.io/docs/component-testing/

- WebdriverIOの[Browser Runner](https://webdriver.io/docs/runner/#browser-runner)を使うとWebdriverIOとWebDriverプロトコルを使用して、ページにレンダリングされるものの操作を自動化できる
- Browser RunnerはViteを使ってテストページをレンダリングし、テストを実行する
- 現在はMochaのみをサポートしているが、JasmineやCucumberも[ロードマップ](https://github.com/orgs/webdriverio/projects/1/views/1)に含まれている
- NuxtとTailwindCSSのサポートがある
- React, TypeScript, Viteのサンプルリポジトリ
  - https://github.com/webdriverio/component-testing-examples/tree/main/react-typescript-vite
- `pnpm create wdio@latest`でセットアップ
- 実行してみたらmochaがないからって怒られた
  - 2024-09-13T10:22:22.327Z ERROR @wdio/browser-runner:plugin: Failed to render template: Cannot find package 'mocha' imported from /Users/nus3/dev/playground/benchmark-component-test/apps/react-app/node_modules
- webdriverio用のtesting-libraryがある

  - https://testing-library.com/docs/webdriverio-testing-library/intro/

- @wdio/browser-runner@latest
- @wdio/mocha-framework@latest
- @vitejs/plugin-react
- @wdio/spec-reporter@latest

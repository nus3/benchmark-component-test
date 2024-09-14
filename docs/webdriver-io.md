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
  - monorepoの場合、monorepoで管理しているパッケージ配下のnode_modulesにmochaが必要そう
  - ということで`pnpm add --save-dev --save-exact mocha@10.7.3`をmonorepo配下のパッケージに追加
  - monorepo配下でやろうと思うと、エラーが出ちゃう...
    - ` expect.js: Uncaught SyntaxError: The requested module ... does not provide an export named 'expect'`
  - rootで作った場合、5ファイルでそれぞれ50ケース実行すると実行時間は以下だった
    - `Spec Files: 5 passed, 5 total (100% completed) in 00:00:48`
- webdriverio用のtesting-libraryがある
  - https://testing-library.com/docs/webdriverio-testing-library/intro/
- examplesのものは動いたので、これを持ってくる
  - https://github.com/webdriverio/component-testing-examples

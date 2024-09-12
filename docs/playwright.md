# Playwright

Component testはexperimental

https://playwright.dev/docs/test-components

- 対象のパッケージで`pnpm create playwright --ct`を実行すると必要なファイルや依存関係を追加してくれる
- playwrightのcomponent testの仕組み
  - https://playwright.dev/docs/test-components#under-the-hood
  - 対象コンポーネントのバンドルにはViteを利用している
- playwrightのParallelism
  - https://playwright.dev/docs/test-parallel
  - テストファイルは並列で、1つのファイル内のテストは同じworkerプロセスで順番に実行される

インストールして実行しようと思うとエラーが出た
`TypeError [ERR_INVALID_ARG_TYPE]: The "parentURL" argument must be of type string or an instance of URL. Received an instance of Object`

Node.jsのバージョンをv20.6.1から20.16.0に変更すると動いた

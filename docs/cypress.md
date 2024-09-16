# Cypress

https://docs.cypress.io/guides/component-testing/overview

- `pnpm dlx cypress open`でCypressのcomponentsテストはGUIでセットアップができる
- 必要なファイルが作成される
- cypressが提供するmount関数を使い、各種UIライブラリで定義されたコンポーネントをiframe上にレンダリングする
  - https://docs.cypress.io/guides/component-testing/faq#What-is-the-Mount-Function
- `ReferenceError: exports is not defined in ES module scope`おっふ
  - cypressが使ってるts-node側でESMとして認識してくれてない？
  - cypress.config.ts→cypress.config.jsに変更したら動いた
  - https://github.com/cypress-io/cypress/issues/23552#issuecomment-1456477053
- 画面に従ってけばCypress用のコンポーネントテストが作成された
- テスト対象のファイルを指定する方法
  - https://docs.cypress.io/guides/component-testing/component-framework-configuration#Spec-Pattern-for-Component-Tests
  - デフォルトだと`.cy.js`, `.cy.jsx`, `.cy.ts`, `cy.tsx`が対象
- Cypressのカスタムコマンドやdescribe, itの型を適用するためにtsconfigを変更
  - https://docs.cypress.io/guides/tooling/typescript-support#Configure-tsconfigjson
- コンポーネント駆動開発の勧めが書いてある
  - https://docs.cypress.io/guides/component-testing/overview#Component-Testing-vs-End-to-End-Testing
  - このComponent Drivenにはstorybookも関連してそう
- CypressのコンポーネントテストでのEvent Handlersの書き方
  - https://docs.cypress.io/guides/component-testing/react/examples#Testing-Event-Handlers
- Cypress用のtesting-libraryは用意されている
  - https://testing-library.com/docs/cypress-testing-library/intro/
- CypressをCLIから実行する
  - https://docs.cypress.io/guides/guides/command-line#Using-scripts
- Cypressのcomponent testを実行する場合は`--component`をつける
  - https://docs.cypress.io/guides/guides/command-line#Options
- `describe`と`it`はサポートしてるが`test`は実装されてなそう
- Cypressのテストを並列で実行する仕組み
  - https://docs.cypress.io/guides/cloud/smart-orchestration/parallelization
  - `--parallel`で並列に実行してくれそう？
  - `These flags can only be used when recording to Cypress Cloud.`
  - Cypress Cloudを使わないといけなそう
- Cypress Cloud
  - https://docs.cypress.io/guides/cloud/introduction
  - Cypressが提供しているエンタープライズ版のサービス
  - テストの並列化以外にテストに関連する便利な機能を提供している
  - 値段
    - https://www.cypress.io/pricing

## TODO

- Cypressだけtsconfigの設定分けても良さそう

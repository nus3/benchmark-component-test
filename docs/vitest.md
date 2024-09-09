## CLI

`vitest run`で watch せずに実行  
https://vitest.dev/guide/cli.html#vitest-run

## Config

https://vitest.dev/config/

## Browser Mode

https://vitest.dev/guide/browser/

- Experimental
- `pnpx vitest init browser`で初期設定
  - Browser provider何選びますか
    - `Playwright relies on Chrome DevTools protocol. Read more: https://playwright.dev`
    - webdriverio
      - https://webdriver.io/docs/why-webdriverio/
      - コアの部分はWebDriver-BiDiを使ってそう
      - Vitestのブラウザモードであればwebdriverioも選択肢として取れそう
    - preview: CIには向かないが、実行したテストを簡単に確認できる
- `◼ Add "@vitest/browser/providers/playwright" to your tsconfig.json "compilerOptions.types" field to have better intellisense support.`
  - apps/react-app/tsconfig.node.jsonに追加
- テストの種類、戦略に応じてvitestのworkspace機能が使える
  - https://vitest.dev/guide/workspace
  - `pnpm run test --project e2e`のように`--project`を指定することで、vitest.workspace.tsで定義したnameの環境のテストが実行できる
- 複数のテストファイルを実行するとテストがパスしない
  - 別プロセスもしくはワーカーで扱われていた

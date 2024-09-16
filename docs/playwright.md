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
- インストールして実行しようと思うとエラーが出た
  - `TypeError [ERR_INVALID_ARG_TYPE]: The "parentURL" argument must be of type string or an instance of URL. Received an instance of Object`
  - Node.jsのバージョンをv20.6.1から20.16.0に変更すると動いた
- testing-libraryの記法をplaywrightで書く場合
  - https://playwright.dev/docs/testing-library#cheat-sheet
- CJSとESMが混合している時にPlaywright側でエラーが出る？
  - https://github.com/microsoft/playwright/issues/23662#issuecomment-2276416857
  - Error: url: expected string, got undefined
  - Node.js 22の`NODE_OPTIONS=--experimental-require-module`を付与して実行すると?
  - ダメだった
- monorepoではなく、ルートでstorybookのportable storiesと組み合わせるといけた
- playwright自体はmockやspyを提供する方針ではなさそう？
  - https://github.com/microsoft/playwright/issues/19536#issuecomment-1355851755
  - playwrightのコンポーネントテストはいくつかの制限がある
    - https://playwright.dev/docs/test-components#test-stories
    - プレーンなJSオブジェクトと文字列などのみ
    - コールバックでコンポーネントにデータを同期的に渡すことができない
- playwrightもstorybookもexperimentalな印象

```
import { createTest } from "@storybook/react/experimental-playwright";
import { test as base, expect } from "@playwright/experimental-ct-react";
```

## 検証したいもの

- vitest, testing-library
- jest, testing-library
- vitest, browser mode
  - https://vitest.dev/guide/browser/#browser-mode
- playwright components test
  - https://playwright.dev/docs/test-components
- cypress components test
  - https://docs.cypress.io/guides/component-testing/overview
- storybook test runner
  - https://storybook.js.org/docs/writing-tests/test-runner
  - 中身は playwright
  - https://storybook.js.org/blog/visual-testing-is-the-greatest-trick-in-ui-development/
- Storybook portable test
  - https://storybook.js.org/blog/portable-stories-for-playwright-ct/
- netflix の safe test
  - https://netflixtechblog.com/introducing-safetest-a-novel-approach-to-front-end-testing-37f9f88c152d
- webdriverioのcomponent test
  - https://webdriver.io/docs/component-testing

## テストケース数

現状

```
Test Suites: 635 passed, 635 total
Tests:       1 todo, 3502 passed, 3503 total
```

10ファイル50ケースの500件でやってみる

## 参考リンク

- [SeleniumとPlaywrightとCypressとWebdriver.ioのアーキテクチャーについて](https://zenn.dev/taku_nakagawa/articles/665048ada0ec58)
- Vitestのドキュメントにjsdomと実際のブラウザ上でテストすることの違いの説明が記載されている
  - https://vitest.dev/guide/browser/#the-simulation-caveat
- [次世代のブラウザテスト自動化プロトコルWeb Driver BiDi](https://zenn.dev/togami2864/articles/65af759b4a34f6)

## TODO

- Vitestでwebdriverioを使っている場合にファイルごとにテストを並列で実行する方法
- GitHub Actionsでbenchスクリプトを実行する
- playwrightのcomponent testでなぜコンポーネントが描画されないか調べる

## memo

```
[TEST] ┌─────────┬──────────────────────┬───────────┐
[TEST] │ (index) │ name                 │ duration  │
[TEST] ├─────────┼──────────────────────┼───────────┤
[TEST] │ 0       │ 'vitest-jsdom'       │ '46.36s'  │
[TEST] │ 1       │ 'vitest-playwright'  │ '83.55s'  │
[TEST] │ 2       │ 'vitest-webdriverio' │ '197.90s' │
[TEST] │ 3       │ 'storybook'          │ '81.90s'  │
[TEST] │ 4       │ 'cypress'            │ '670.20s' │
[TEST] └─────────┴──────────────────────┴───────────┘
```

cypressが50ケース、5ファイルを実行するととても遅い

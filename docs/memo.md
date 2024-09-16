## TODO

- monorepoやめて、単一でかつnpmで動くかやってみる
- monorepoでpnpmではなく、npmで動くかやってみる
- Vitestでwebdriverioを使っている場合にファイルごとにテストを並列で実行する方法

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

ローカルでwebdriverioのcomponent testを実行した時の結果。
`Spec Files:      5 passed, 5 total (100% completed) in 00:00:48`

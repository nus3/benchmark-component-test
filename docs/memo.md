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

## togami さんの記事を読んで

https://zenn.dev/togami2864/articles/65af759b4a34f6

- WebDriver 型(Selenium, WebDriverIO など)
- Native 型(Cypress, TestCafe)
- CDP 型(Puppeteer, PlayWright)

### WebDriver 型

2018 年に WebDriver は W3C 勧告された
WebDriver は仕組み上 flaky になりやすかったり、websocket を使った実装に比べて低速である

- Driver に対してクライアントから自動化コマンドを送信
- Driver が実際のブラウザ操作に変換し、ブラウザを自動操作

### Native 型

Cypress は Native 型
WebDriver を使用せず JavaScript API を直接利用

テストランサー自体が実際のブラウザ内で動作しており、iframe を通じてロードしたテスト対象のアプリケーションを直接操作することで UI のテストをする

https://docs.cypress.io/guides/overview/key-differences

- Cypress が他と違う点
- Cypress はアプリケーションと同じスレッド（？ブラウザって言い換えてもいいかも）で実行される
- Cypress コマンドはブラウザ内で実行される
- ブラウザ上で動作するため、すべてのオブジェクトにアクセスできる

https://docs.cypress.io/guides/references/trade-offs

- トレードオフ
- Cypress を使用して 2 つのブラウザを同時に操作することができない
- だからファイルごとにテストが並列で実行されないのかも

Cypress のアーキテクチャはこれも良さそう
https://www.lambdatest.com/learning-hub/cypress-tutorial

でも GitHub 上にあるこれが良さそう
https://github.com/cypress-io/cypress-documentation/issues/872#issuecomment-586708267

### CDP 型

Chrome Dev Tools Protocol

クライアントからのリクエストを CDP コマンドに変換し、ブラウザを操作する
クライアントとサーバー間は websocket で通信することで高速に動作

CDP は Chromium ベースのブラウザでしか動作しない
Playwright は Firefox と Safari の特定のバージョンに何かしらのパッチを当てて動かしている

Chrome の新バージョンのリリースごとに CDP も新バージョンがリリースされるので互換性の問題がある

### WebDriver BiDi

W3C の Browser Testing and Tools Working Group にで WebDriver BiDi の策定が進んでいる
https://w3c.github.io/webdriver-bidi/

Working Group には主要なブラウザベンダー(Chrome、Edge、Safari、FireFox)、テストフレームワークの開発チーム(Selenium、WebDriver IO)、関連 SaaS(BrowserStack、SauseLabs、LAMBDATEST)が参加

特徴は WebDriver 型と CDP 型のいいとこどり

- クロスブラウザ対応
- W3C 準拠
- 高速
- 低レベルな操作も対応

local end(クライアント) と remote end(ユーザーエージェント) 間の双方向通信プロトコルの定義をはじめとして session 管理や local-remote 間のコマンド、イベント、エラー定義などが含まれています。

Chrome、Edge、Firefox での実装が進んでいる、Safari はあんまかも
https://wpt.fyi/results/webdriver/tests/bidi?label=experimental&label=master&aligned

Puppeteer の v23 のリリースで Firefox がサポートされた。この際にブラウザ操作に使われるプロトコルが WebDriver BiDi
https://hacks.mozilla.org/2024/08/puppeteer-support-for-firefox/

WebDriver BiDi の仕様策定やブラウザでの実装が進めば、WebDriver 型と CDP 型では恩恵が大きそう
CDP 型から WebDriver BiDi のマイグレーションもそんなに大変ではない？

BrowserStack で WebDriver BiDi が使えるようになった
https://developer.chrome.com/blog/webdriver-bidi-support-in-browserstack?hl=ja

## Different Approaches (Protocols) to Automate the Browser

https://dev.to/jankaritech/different-approaches-protocols-to-automate-the-browser-39f1

この記事の画像使うのも良さそう

CDP は双方向通信も可能になります。

native 型のトレードオフの話。複数のブラウザ タブをサポートできない、一度に複数のブラウザを制御できないなどのトレードオフが伴います。

## Browser Automation Tools & Protocols: WebDriver vs CDP

https://www.neovasolutions.com/2022/05/19/browser-automation-tools-protocols-webdriver-vs-cdp/

- プロキシサーバーが必要だし、WebDriver プロトコルは比較的遅く、不安定
- CDP はドライバーも不要だし、高速かつ不安定さが少ない

Playwright は CDP を主要なブラウザで動作できるように Firefox と

## WebDriverIO

https://webdriver.io/docs/automationProtocols/

デフォルトでは WebDriver BiDi プロトコルを使う

WebDriverIO は Sharding も提供してそう
https://webdriver.io/docs/sharding

CDP も使える
https://webdriver.io/docs/setuptypes/#protocol-bindings

WebDriverIO v9 でデフォルトで Webdriver BiDi 機能が有効化されている
https://webdriver.io/blog/2024/08/15/webdriverio-v9-release

これでも良さそう
https://brahmakothapalli.hashnode.dev/playwright-01-selenium-playwright-architecture-comparison

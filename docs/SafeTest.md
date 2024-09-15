# Safe Test

https://netflixtechblog.com/introducing-safetest-a-novel-approach-to-front-end-testing-37f9f88c152d
https://github.com/kolodny/safetest

- Safe Testのexamples
  - https://github.com/kolodny/safetest/tree/main/examples
- Safe TestはNetflixで採用されているテストフレームワーク
- 実際のアプリのエントリーポイントにsafetestが提供するbootstrapを実行することで、テスト実行時にviteサーバーンドを利用して画面を描画
  - コンポーネントが指定されたときは画面にコンポーネントを描画する
- examplesみてるとCI時はデプロイ先が必要？
- Jest, Vitest, Reactのサポート
- またフレームワークに依存しない
- セットアップも簡単
- UIのテストにはIntegrationとE2Eの二つがある
- testing-libraryとjsdomの問題
  - z-index が間違っているために送信ボタンがクリックできないなど等の問題は、これらのテストでは検出されません
  - 実際にブラウザで実行されているわけではないので、何かが機能しなくなった際のデバックも困難
  - E2Eだとコンポーネントを対象にしたテストができない
  - また、テストのフィクスチャをセットアップするのも難しい
- Safe Testの図がE2EとIntegrationの違いとしてわかりやすい
- E2Eとintegrationテストの課題を解決するために作ったのがSafe Test
- Safe Testのレポートが見れる
  - https://safetest-two.vercel.app/
- package.jsonにSafe Test用のコマンドを追加する
- `OPT_URL`などの環境変数はSafeTestで使われるフラグ
- ViteのGlob Import機能を使ってsafe testとして定義したテストファイルのモジュールを個別にバンドルする
  - https://vitejs.dev/guide/features.html#glob-import
- Safe Testを実行するにはアプリがすでに実行されている必要がある
  - Storybookのtest runnerと同じ感じな気がする
- render関数で何も指定しない場合、アプリケーション全体が描画される
- プロダクトのコードに`createOverride`を使うことで任意のhooksや関数をテスト時にオーバーライドできる
- `debugger`や`pause`を使うことでデバッグもできる
- 書き方のベースはplaywrightの記法
  - locatorが使える
- safetestが依存しているvitestがv0.34系かも...
- browserMockを使う場合、awaitすることで型の補完が効くように
  - `expect(await onSubmit).toHaveBeenCalledWith();`
- OPT_URLが読み込まれてないかも？
  - https://github.com/kolodny/safetest/issues/8#issuecomment-1954900649
- setupで設定できる内容にheadlessかどうかもある
  - https://github.com/kolodny/safetest/issues/18#issuecomment-1967014174
- safetestのexamplesはvitestもviteもバージョンが少し前

```json
"vite": "^4.4.5",
"vitest": "^0.34.3"
```

- pnpmだとエラー出るかも？

## TODO

- SafeTestのexamplesが動くかどうか試してみる

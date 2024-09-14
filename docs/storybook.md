# Storybook

## Interaction Testでのハンドラーが呼ばれたかどうか確認する方法

https://storybook.js.org/docs/writing-tests/component-testing#assert-tests-with-vitests-apis

## Portable stories in Playwright CT

https://storybook.js.org/blog/portable-stories-for-playwright
https://storybook.js.org/docs/api/portable-stories/portable-stories-playwright

- 現状はVitest、Jest（これはおそらくcomposeStory）
- Playwright CT
- 今後、Cypressなどにも対応予定？
- まずはPlaywright CTの設定を入れる
  - https://playwright.dev/docs/test-components
  -

## memo

- Storybookのtest-runnerはjestを使ってる？
  - https://storybook.js.org/docs/writing-tests/test-runner#cli-options
- StorybookをどこにもデプロイせずにCI上でtest-runnerを実行する方法
  - https://storybook.js.org/docs/writing-tests/test-runner#run-against-non-deployed-storybooks
- CIで実行するときはあらかじめStorybookを起動する必要あり
  - Storybookのビルドと起動時間をテストの実行時間に含めるかは考えた方が良さそう
- tagsを使ってstoryごとにテスト対象かどうかの設定ができそう
  - https://storybook.js.org/docs/writing-tests/test-runner#experimental-filter-tests
  - https://storybook.js.org/docs/writing-docs/autodocs#set-up-automated-documentation

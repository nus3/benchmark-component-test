# Storybook

## Interaction Testでのハンドラーが呼ばれたかどうか確認する方法

https://storybook.js.org/docs/writing-tests/component-testing#assert-tests-with-vitests-apis

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

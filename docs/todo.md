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

## テストケース数

現状

```
Test Suites: 635 passed, 635 total
Tests:       1 todo, 3502 passed, 3503 total
```

10ファイル50ケースの500件でやってみる

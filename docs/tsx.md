# tsx

https://tsx.is/

## TypeScript 周りの設定

tsx のドキュメントに記載されている tsconfig.json の推奨設定を採用
https://tsx.is/typescript#recommendation

```jsonc
{
  "compilerOptions": {
    // Treat files as modules even if it doesn't use import/export
    "moduleDetection": "force",

    // Ignore module structure
    "module": "Preserve",

    // Allow JSON modules to be imported
    "resolveJsonModule": true,

    // Allow JS files to be imported from TS and vice versa
    "allowJs": true,

    // Use correct ESM import behavior
    "esModuleInterop": true,

    // Disallow features that require cross-file awareness
    "isolatedModules": true,

    "target": "ESNext"
  }
}
```

Top level await 使わないかもだけども一応、対応できるように`"target": "ESNext"`を追加

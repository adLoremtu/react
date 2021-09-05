# コンポーネントのimportとexport
## コンポーネントを分けよう
- 1ファイル = 1コンポーネントにすべし
- なぜコンポーネントを分ける？
  - 責務を明確にするため（何おためのパーツなのか？）
  - 大規模アプリでも管理しやすくするため
  - 再利用するため  
-> 別ファイルのコンポーネントってどう使うの？？？

## JavaScriptのモジュール機能
- プログラムをモジュールという単位で分割する
- 原則1ファイル = 1モジュール
- 必要な時に必要なモジュールのみ読み込む
- exportとimportという考えがモジュール機能に存在する  
-> Reactのコンポーネントの考え方とほぼ同じ（というかReactがこの考えを取り入れて作られている）

## default export（名前なしexport）
- JavaScriptのモジュール機能で推奨されるexport方法
- 1ファイル = 1export
- 1度宣言したアロー関数をdefault export
- 名前付き関数宣言と同時にdefault export
- 実際はdefaultという名前でexportされている（名前付きでより詳しく）

## default import (名前なしimport)
- default exportしたモジュールをそのまま読み込む
- import モジュール名 from 'ファイルパス'

## 名前付きexport
- 1ファイルから複数モジュールをexportしたいとき（例えばよく使われる関数を1ファイルにまとめた場合など）
- Reactではエントリポイントと呼ばれるファイルでよく使う
- エントリポイントでは別名exportも併用する
  - `export default Title`としている場合、まずdefaultという名前でexportされる。その後それをTitleという名前に変更してさらにexportされる
  - わかりにくいよね。
  - /components/index.jsが基本的にエントリポイントとなるファイル

```jsx
// helper.js
export const addTax = (price) => {
    return Math.floor(price * 1.1)
}
export const getWild = () => {
    console.log("get wild and touch")
}

// index.js
export { default as Article } from "./Article";
export { default as Content } from "./Content";
export { default as Title } from "./Title";
```

## 名前付きimport
- 1ファイルから複数モジュールを読み込む
- エントリポイントから複数コンポーネントを読み込む
- /components/index.jsにひとまとめにすると恩恵を受けやすい。

```jsx
import { Article, Test } as index;

function App() {
    // ...
}
```
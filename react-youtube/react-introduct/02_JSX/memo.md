# JSXの記法
## JSXとは（Facebookが作成）
- JavaScriptの拡張言語 ≠ テンプレート言語
- HTMLライクな記述 + JavaScriptの構文が使える
- JSXは最終的にReact要素を生成する

## なぜJSXを使う？
- JSXを使わない場合
  - React.createElementを用いる。 => React要素を生成する式
  - 毎回書くのは面倒・・・。

- JSXを使う場合
  - HTMLライクにかける

## JSXは何をしているの？
- コンパイル時
  - JSX -> React.createElementの式に変換
  - React要素を生成
- React.createElementを使った構文は直感的ではない
  - JSXを使うことで楽に記述することができる

## JSXの基礎文法１
- Reactライブラリをimportする
- return文の中がJSXの構文
  - 基本的にはHTMLと同じ
  - classはclassNameにする（なぜ？ -> オブジェクトの`class`と判定されるため・・・。なのでclassNameとして使い分けている）
- ファイルの拡張子は`.jsx`とする（明示的にこれはjsxを使ってますよということを表す）

## JSXの基礎文法２
- キャメルケース（imgWidthやobjTxtなど、大文字繋ぎ） -> JavaScriptでは-（ハイフン）を理解することができない
- {}内でJavascriptの変数を使用することができる => {}の中はJavaScriptの世界になる。
- 閉じタグが必ず必要（imgやinputなど閉じタグ不要なものでも閉じタグを使用する必要がある）

## JSXの基礎文法３
- JSXは必ず階層構造でないといけない
  - 最上位コンポーネントは並列にすることはできない（必ず1つ）
- 最上位コンポーネントは出力したくない場合・・・
  - React.Fragmentで囲むことでHTMLタグとして出力されない！
  - 不要なHTMLタグを入れずに出力することができる
  - React.Fragmentは省略系で書くことが可能！（<>でOK）
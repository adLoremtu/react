# create-react-appで環境構築
## create-react-appとは？
- 最も簡単にReactの開発環境を構築することができる（React公式でも推奨してる）
- 本来のReact環境構築には以下設定が必要(これは最初から考える必要がはない)
  - トランスパイラのbabel
  - バンドラーのwebpack

## 必要なもの
- Node.js: 10.16以上
  - サーバ環境で動くJavaScript 
  - 手元のPCをサーバとしたとき、PCでJavaScriptを動かすために必要
- npm: 5.6以上
  - node package manager
  - node.jsで使うpackage（便利機能）のバージョンやどれを使っているかを管理してくれている
  - create-react-appもnodeのpackageの1つで、npmで管理する
- Homebrewとnodebrewを使ってインストール
  - Homebrew: MacOSのパッケージ管理
  - nodebrew: nodeのバージョン管理ツール

## インストール手順
- Homebrewのインストール
- nodebrewのインストール
- nodeのインストール
- nodeの環境パスを通す

## 環境の解説
- src
  - 開発用ファイルが格納される
  - ReactコンポーネントのJSXファイルなどはここに置く
- public
  - 静的ファイルが格納される
  - htmlファイルや画像ファイルなど
- build
  - 本番用ファイルが格納される
  - `npm run build`で生成される

## スクリプトの解説
- npm start
  - ローカルサーバを起動してReactアプリを確認できる
  - ホットリロード対応（ファイル保存で自動更新） -> src/App.js更新
- npm run build
  - 本番用ファイルを生成してbuildディレクトリに出力する
  - srcとpublicを一つにまとめる（バンドル）
- npm run eject
  - babelやwebpackの設定を変えたいときに使う
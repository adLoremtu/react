# 環境構築
## create-react-app
- npx create-react-app 作りたいプロジェクト名
- 作成後、cdで作ったプロジェクトフォルダに移動し、npm startを実行
- ローカルサーバが立ち上がるので、正常に表示されればOK

## material-uiのインストール
- npm install --save @material-ui/core @material-ui/icons @material-ui/system
- package.jsonを確認すると、先ほど入れた3つのパッケージが正しく反映されていることが確認できる
- [公式サイト](https://material-ui.com/)に移動し、get startedをクリックするとinstallationが表示
- Roboto Fontを使用するため、linkをコピー。public/index.htmlを開き、headタグ内にペースト
- Font Iconsを使用するため、linkをコピー。public/index.htmlを開き、headタグ内にペースト
- create-react-appを用いて環境構築すると、無駄なコメントが多く追記されているので削除。
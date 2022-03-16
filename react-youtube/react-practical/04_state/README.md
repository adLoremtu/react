## データモデル設計の始め方
- データモデルはViewから設計する（MVCモデルでググると出てくる）
- まずはViewから書いてみる（いわゆるワイヤフレーム）
- ワイヤフレームは手書きでもOK

## ルートで管理するstate
```js
constructor(props) {
    super(props);
    this.state = {
        answers: [],            // 回答コンポーネントに表示するデータ
        chats: [],              // チャットコンポーネントに表示するデータ
        currentId: "init",      // 現在の質問ID
        dataset: {},            // 質問と回答のデータセット
        open: false             // 問い合わせ用フォームモーダル の開閉管理
    }
}
```

## データモデルを設計してみよう
```js
// chats
chat: {
    text: string,   // チャット本文
    type: string    // 質問か回答か
}

// answers
answer: {
    content: string,
    nextId: string
}

// dataset
const defaultDataset = {
    "init": {
        answers: [
            {content: "仕事を依頼したい", nextId: "job_offer"},
            {content: "エンジニアのキャリアについて相談したい", nextId: "consultant"},
            {content: "学習コミュニティについて知りたい", nextId: "community"},
            {content: "お付き合いしたい", nextId: "dating"}
        ],
        question: "こんにちは！私へのご用件は何でしょうか？"
    }
}
```
# コンポーネントの状態管理
## Hooksとは？
- クラスコンポーネントでしか使えなかったもの・・・。
  - コンポーネント内で状態を管理するstate
  - コンポーネントの時間の流れに基づくライフサイクル
- Hooksにより関数コンポーネントでも使えるように！
- Hooks = クラスコンポーネントの機能に接続する

## なぜStateを使うのか？
- Reactコンポーネント内の値を書き換えたい・・・
  - コンポーネント内の要素をDOMで直接書き換える - ×
  - 新しい値を使って再描画（再レンダリング）させる - ○
- Reactコンポーネントが再描画するきっかけは？
  - stateが変更された時
  - propsが変更された時

## useStateの使い方
- useStateによるstateの宣言
```jsx
// state: 現在の状態
// setState: 更新関数
// initialState: 初期値
// -> useStateを使用することで、現在の状態とそれを更新するための関数が返却される
const [ state, setState ] = useState(initialState)
```

- stateの更新
```jsx
// setState: 更新関数
// newState: 新しい値

setState(newState)
```

- 具体例
```jsx
const [ message, setMessage ] = useState('hoge')
const [ likes, setLikes ] = useState(0)
const [ isPublished, setIsPublished ] = useState(false)

setIsPublished(true);
```

## propsとstateの違い
- 両者ともに再描画のきっかけになる
  - propsは引数のようにコンポーネントに渡される値 -> 今回の場合、titleやcontentが該当
  - stateはコンポーネントの内部で宣言、制御される値 -> 今回の場合、isPublishedが該当

## stateをpropsに渡す
- 更新関数はそのままpropsとして渡さず関数化する
- 関数をpropsに渡すときは注意する（const hoge = () => {...}を上に記述してから、onClick={hoge}のように渡す方が良い）
- prop.onClick()は親コンポーネントで関数化したpublishArticle()
- HTMLのbuttonが持つonClickイベントに渡す

## propsへ関数を渡す際の注意点
- OKな関数の渡し方
  - `<PublishButton isPublished={isPublished} onClick={publishArticle} />`
  - `<PublishButton isPublished={isPublished} onClick={() => publishArticle()} />`
- NGな関数の渡し方（無限レンダリング発生）
  - `<PublishButton isPublished={isPublished} onClick={publishArticle()} />`

- コールバック関数か関数自体を渡す
- propsを渡すときに関数を実行しない

- NGな関数の理由として、propsとして渡すときに関数を実行するという意味になる。
  - レンダリングが実行されるたびに関数が実行される
  - 関数が実行されるとまたレンダリングが実行されるので、結果的にまた関数が実行される
  - これが繰り返しとなり、無限レンダリングが発生することになる。
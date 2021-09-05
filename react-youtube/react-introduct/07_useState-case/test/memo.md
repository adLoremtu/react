# useStateのケース
## 引数を使って更新する
- 入力フォームでよく使う
- onChangeイベントでhandleName関数に渡す
- handleName関数のパラメータであるeventを更新関数に渡す

## prevStateを活用する
- useStateの更新関数で使える特殊なprevState
- prevStateは更新前のState
- prevStateに変更を加えてreturn
- カウンタとか配列との差分を見てすでに含まれている場合は前の状態に戻すなんてこともできる

## ON/OFFを切り替えるボタン
- prevStateで受け取った値を`!`で反転してreturnする
- 参考演算子によってopenがtrue/falseで表示を切り替える

// エントリポイント
// 複数ファイルが存在していても、このファイルを参照することで複数ファイルを一気にimportすることができる
// 今回の場合は1つのファイルを呼ぶだけで複数コンポーネントの呼び出しが可能(それぞれで呼び出す必要がない)

export {default as AnswersList} from "./answersList";
export {default as Answer} from "./answer";
export {default as Chats} from "./chats";
export {default as Chat} from "./chat";
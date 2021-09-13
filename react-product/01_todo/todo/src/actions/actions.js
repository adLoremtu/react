// 完了に更新
export const TaskComplete = (id) => {
	return {
		type: 'TASK_COMPLETE',
		payload: id
	};
};

// 削除
export const TaskDelete = (id) => {
	return {
		type: 'TASK_DELETE',
		payload: id
	};
};

// 追加
export const TaskAdd = (text, complete) => {
	let now = Date.now();
	return {
		type: 'TASK_ADD',
		payload: {
			now,
			text,
			complete
		}
	};
};
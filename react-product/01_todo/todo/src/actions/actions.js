// 完了に更新
export const TaskComplete = (id) => {
	return {
		type: 'TASK_COMPLETE',
		payload: id
	};
};
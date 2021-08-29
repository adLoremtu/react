import Dispatcher from '../dispatcher/dispatcher';

// eslint-disable-next-line
export default {
	createTodo: (text) => {
		Dispatcher.dispatch({
			type: 'CREATE_TODO',
			text: text
		});
	},

	deleteTodo: (id) => {
		Dispatcher.dispatch({
			type: 'DELETE_TODO',
			id: id
		});
	},

	reloadTodos: () => {
		// 本来は外部API接続で行うけど、今回は擬似的にsetTimeoutで代用
		// axios("http://someurl.com/somedataendpoint").then(data) => {
		//     console.log("got data", data);
		// }

		Dispatcher.dispatch({
			type: 'RELOAD_TODOS'
		});

		setTimeout(() => {
			Dispatcher.dispatch({
				type: 'RECEIVE_TODOS',
				todos: [
					{
						id: 1630213653144,
						text: 'Go Shopping Again',
						complete: false
					},
					{
						id: 1630213661644,
						text: 'Sleep At The Yard',
						complete: true
					}
				]
			});
		}, 2000);
	}
};

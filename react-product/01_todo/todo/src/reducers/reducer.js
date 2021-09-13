// reducer

const initialState = {
	lists: [
		{
			id: 123,
			text: 'Todo Test 1',
			complete: false
		},
		{
			id: 456,
			text: '自主学習実施',
			complete: false
		},
		{
			id: 789,
			text: '早寝早起き',
			complete: true
		}
	]
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TASK_COMPLETE':
			return {
				lists: state.lists.map((list) => {
					if (list.id !== action.payload) return list;

					return {
						...list,
						complete: true
					};
				})
			};
		case 'TASK_DELETE':
			return {
				lists: state.lists.filter((list) => {
					return list.id !== action.payload;
				})
			};
		case 'TASK_ADD':
			return {
				lists: [...state.lists, action.payload]
			};
		default:
			return state;
	}
};

export default reducer;
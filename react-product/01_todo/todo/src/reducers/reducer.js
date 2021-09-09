// reducer

const initialState = {
	lists: [
		{
			text: 'Todo Test 1',
			complete: false
		},
		{
			text: '自主学習実施',
			complete: false
		},
		{
			text: '早寝早起き',
			complete: true
		}
	]
};

const reducer = (state = initialState, action) => {
	return state;
};

export default reducer;
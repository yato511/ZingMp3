import { homeActionTypes } from "../actions/types";

const initialState = {
	suggestList: {
		new: null,
		hot: null,
	},
	collection: {},
	chart: { top3: null, top5: null },
	weekChart: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case homeActionTypes.suggest.GET_HOT:
			return {
				...state,
				suggestList: {
					...state.suggestList,
					hot: action.payload,
				},
			};
		case homeActionTypes.suggest.GET_NEW:
			return {
				...state,
				suggestList: {
					...state.suggestList,
					new: action.payload,
				},
			};

		case homeActionTypes.collection.GET_COLLECTION:
			return {
				...state,
				collection: {
					...state.collection,
					[action.payload.query]: action.payload.data,
				},
			};

		case homeActionTypes.chart.GET_CHART_TOP3:
			return {
				...state,
				chart: {
					...state.chart,
					top3: action.payload,
				},
			};
		case homeActionTypes.chart.GET_CHART_TOP5:
			return {
				...state,
				chart: {
					...state.chart,
					top5: action.payload,
				},
			};
		case homeActionTypes.weekChart.GET_WEEK_CHART:
			return {
				...state,
				weekChart: {
					...state.weekChart,
					[action.payload.query]: action.payload.data,
				},
			};
		default:
			return state;
	}
};
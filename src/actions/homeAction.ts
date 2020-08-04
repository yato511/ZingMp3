import axios from "axios";
import {
	homeActionTypes,
	HomeActionWithQuery,
	HomeActionArtistChart,
	HomeActionWeekChart,
	HomeActionSongChart,
} from "@constants/types/homeTypes";
import { LoadingDispatchAction } from "@constants/types/loadingTypes";
import { setLoadingHome } from "./loadingAction";
import { proxy } from "./corsProxy";
import { Dispatch } from "react";

export const getSuggestList = (queryList: string[]) => (
	dispatch: Dispatch<LoadingDispatchAction | HomeActionWithQuery>
) => {
	dispatch(setLoadingHome("suggest", true));
	Promise.all(
		queryList.map(async (query) => {
			const response = await axios({
				method: "GET",
				url: "https://deezerdevs-deezer.p.rapidapi.com/search",
				headers: {
					"content-type": "application/octet-stream",
					"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
					"x-rapidapi-key":
						"3319f523f7msh49e3d6c5c3ee4b4p19f9fajsn66e90ad6334c",
					useQueryString: true,
				},
				params: {
					q: query,
					limit: 10,
				},
			});
			return dispatch({
				type: homeActionTypes.suggest.GET_SUGGEST,
				payload: { query, data: response.data.data },
			});
		})
	).then(() => dispatch(setLoadingHome("suggest", false)));
};

export const getCollection = (queryList: string[]) => (
	dispatch: Dispatch<LoadingDispatchAction | HomeActionWithQuery>
) => {
	dispatch(setLoadingHome("collection", true));

	Promise.all(
		queryList.map(async (query) => {
			const response = await axios({
				method: "GET",
				url: "https://deezerdevs-deezer.p.rapidapi.com/search",
				headers: {
					"content-type": "application/octet-stream",
					"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
					"x-rapidapi-key":
						"3319f523f7msh49e3d6c5c3ee4b4p19f9fajsn66e90ad6334c",
					useQueryString: true,
				},
				params: {
					q: query,
					limit: 8,
				},
			});
			return dispatch({
				type: homeActionTypes.collection.GET_COLLECTION,
				payload: { query, data: response.data.data },
			});
		})
	).then(() => dispatch(setLoadingHome("collection", false)));
};

export const getSongChart = () => (
	dispatch: Dispatch<HomeActionSongChart | LoadingDispatchAction>
) => {
	dispatch(setLoadingHome("songchart", true));
	axios({
		method: "GET",
		url: proxy + "https://api.deezer.com/chart/tracks/tracks",
		headers: {
			"content-type": "application/octet-stream",
			"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
			"x-rapidapi-key": "3319f523f7msh49e3d6c5c3ee4b4p19f9fajsn66e90ad6334c",
			useQueryString: true,
		},
	})
		.then((response) => {
			dispatch({
				type: homeActionTypes.chart.GET_SONG_CHART,
				payload: response.data.data.slice(0, 5),
			});
			dispatch(setLoadingHome("songchart", false));
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getArtistChart = () => (
	dispatch: Dispatch<LoadingDispatchAction | HomeActionArtistChart>
) => {
	dispatch(setLoadingHome("artistchart", true));

	axios({
		method: "GET",
		url: proxy + "https://api.deezer.com/chart/0/artists",
		headers: {
			"content-type": "application/octet-stream",
			"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
			"x-rapidapi-key": "3319f523f7msh49e3d6c5c3ee4b4p19f9fajsn66e90ad6334c",
			useQueryString: true,
		},
	})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: homeActionTypes.chart.GET_ARTIST_CHART,
					payload: response.data.data.slice(0, -1),
				});
				dispatch(setLoadingHome("artistchart", false));
			}
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getWeekChart = (typeList: string[]) => (
	dispatch: Dispatch<LoadingDispatchAction | HomeActionWeekChart>
) => {
	dispatch(setLoadingHome("weekchart", true));

	Promise.all(
		typeList.map(async (type) => {
			const response = await axios({
				method: "GET",
				url: proxy + `https://api.deezer.com/chart/${type}/${type}`,
				headers: {
					"content-type": "application/octet-stream",
					"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
					"x-rapidapi-key":
						"3319f523f7msh49e3d6c5c3ee4b4p19f9fajsn66e90ad6334c",
					useQueryString: true,
				},
			});
			return dispatch({
				type: homeActionTypes.weekChart.GET_WEEK_CHART,
				payload: { type, data: response.data.data },
			});
		})
	).then(() => dispatch(setLoadingHome("weekchart", false)));
};

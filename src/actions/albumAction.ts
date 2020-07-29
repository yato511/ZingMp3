import axios from "axios";
import { albumActionTypes, AlbumAction } from "../constants/albumTypes";
import { LoadingDispatchAction } from "../constants/loadingTypes";
import { setLoadingAlbum } from "./loadingAction";
import { Dispatch } from "react";

export const getAlbumDetail = (id: string) => (
	dispatch: Dispatch<AlbumAction | LoadingDispatchAction>
) => {
	dispatch(setLoadingAlbum(true));
	axios({
		method: "GET",
		url: "https://deezerdevs-deezer.p.rapidapi.com/album/" + id,
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
					type: albumActionTypes.GET_ALBUM_DETAIL,
					payload: response.data,
				});
			}
		})
		.then(() => dispatch(setLoadingAlbum(false)));
};
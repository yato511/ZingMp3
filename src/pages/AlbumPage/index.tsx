import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAlbumDetail } from "../../actions/albumAction";
import { RootState } from "../../constants/rootState";
import withLoading from "../../HOCs/withLoading";
import TrackInfo from "./TrackInfo";
import Player from "../DetailPage/components/Player";
import SingerInfo from "../DetailPage/dumps/SingerInfo";
import ButtonGroup from "../DetailPage/components/ButtonGroup";
import "./style.scss";
import TrackList from "./TrackList";

interface Props {
	match: {
		params: {
			id: string;
		};
	};
}

const AlbumPage: React.FC<Props> = ({ match }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAlbumDetail(match.params.id));
	}, [dispatch, match.params.id]);

	const { isLoading, detail } = useSelector((state: RootState) => state.album);
	const { data: tracks } = detail.tracks;
	const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);

	return withLoading(isLoading)(
		<div className="album-page-wrapper">
			<div className="col-span-2">
				<TrackInfo track={tracks[currentTrackIndex]} album={detail} />
				<Player
					song={tracks[currentTrackIndex]}
					cover={detail.cover}
					onListen={(e: any) => {
						setCurrentTime(e.target.currentTime);
						if (
							Math.floor(e.target.currentTime) === Math.floor(duration) &&
							currentTrackIndex < tracks.length - 1
						) {
							setCurrentTrackIndex(currentTrackIndex + 1);
							setCurrentTime(0);
						}
					}}
					onPlay={(e: any) => {
						setDuration(e.target.duration);
					}}
				/>
				<div className="margin-y">
					<ButtonGroup song={tracks[currentTrackIndex]} />
				</div>
				<div className="margin-y">
					<SingerInfo singer={detail.artist} />
				</div>
			</div>
			<div className="col-span-1">
				<TrackList
					list={tracks}
					currentTrackIndex={currentTrackIndex}
					setCurrentTrackIndex={setCurrentTrackIndex}
					setCurrentTime={setCurrentTime}
					currentTime={currentTime}
					duration={duration}
				/>
			</div>
		</div>
	);
};

export default AlbumPage;
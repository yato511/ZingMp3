// Libs
import React from "react";
// Components
import TrackItem from "../../components/TrackItem";
// Types
import { Track } from "@constants/DataTypes/TrackTypes";
// SCSS
import "./style.scss";
import TrackItemCurrent from "@AlbumPage/components/TrackItemCurrent";

interface Props {
	list: Track[];
	currentTrackIndex: number;
	currentTime: number;
	duration: number;
	setCurrentTrackIndex: React.Dispatch<React.SetStateAction<number>>;
	setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
}

const TrackList: React.FC<Props> = ({
	list,
	currentTrackIndex,
	setCurrentTrackIndex,
	setCurrentTime,
	currentTime,
	duration,
}) => {
	return (
		<div className="track-list-wrapper">
			<h2>Tiếp theo</h2>
			<div className="scroll-zone">
				{list.map((item, id) =>
					id === currentTrackIndex ? (
						<TrackItemCurrent
							item={item}
							index={id}
							key={id}
							setCurrentTrackIndex={setCurrentTrackIndex}
							setCurrentTime={setCurrentTime}
							currentTime={currentTime}
							duration={duration}
						/>
					) : (
						<TrackItem
							item={item}
							index={id}
							key={id}
							setCurrentTrackIndex={setCurrentTrackIndex}
							setCurrentTime={setCurrentTime}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default TrackList;

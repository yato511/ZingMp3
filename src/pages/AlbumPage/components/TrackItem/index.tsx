// Libs
import React, { useEffect } from "react";
// Components
// Types
import { Track } from "@constants/DataTypes/TrackTypes";
// SCSS
import "./style.scss";
import ButtonGroupInline from "@GlobalComponents/mains/ButtonGroupInline";
import TrackItemInfo from "../TrackItemInfo";

interface Props {
	item: Track;
	index: number;
	setCurrentTrackIndex: React.Dispatch<React.SetStateAction<number>>;
	setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
}

const TrackItem: React.FC<Props> = ({
	item,
	setCurrentTrackIndex,
	setCurrentTime,
	index,
}) => {
	useEffect(() => {
		console.log("track item", index);
	});
	return (
		<div className="track-item-wrapper">
			<TrackItemInfo
				{...{ item, setCurrentTrackIndex, setCurrentTime, index }}
			/>
			<ButtonGroupInline item={item} />
		</div>
	);
};

export default React.memo(TrackItem);

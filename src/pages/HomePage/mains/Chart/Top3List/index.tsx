import React from "react";
import Top3Item from "@HomePage/components/Top3Item";
import "./style.scss";
import { SongDetail } from "@constants/types/songDetailTypes";

const Top3List: React.FC<{ list: SongDetail[] }> = ({ list }) => {
	return (
		<div className="top3-list-wrapper">
			{list.map((item, id) => (
				<div className="col-span-1" key={id}>
					<Top3Item rank={id + 1} item={item} />
				</div>
			))}
		</div>
	);
};

export default Top3List;

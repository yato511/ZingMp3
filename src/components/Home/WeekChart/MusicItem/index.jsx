import React, { useState } from "react";
import SongInfo from "../../../Global/SongInfo";
import ButtonGroup from "../../../Global/ButtonGroup";
import "./style.scss";

export default function MusicItem({ rank, item, color, hasBorder, hasHover }) {
	const [hovering, setHovering] = useState(false);
	return (
		<div
			className="music-item"
			style={{
				borderBottom: hasBorder ? "1px solid  gray" : "none",
			}}
			onMouseEnter={() => (hasHover ? setHovering(true) : {})}
			onMouseLeave={() => (hasHover ? setHovering(false) : {})}
		>
			<div className="text-dark d-flex align-center ">
				<span
					style={{ marginRight: 10, fontSize: 20 }}
					className={color === "light" ? "text-light" : "text-dark"}
				>
					{rank}
				</span>
				<SongInfo
					type="big"
					name={item.name}
					singer={item.singer}
					color={color === "light" ? "light" : "dark"}
					subcolor={color}
				/>
			</div>

			{hovering ? (
				<ButtonGroup type="small" color={color} />
			) : (
				<small className={color === "light" ? "text-light" : "text-gray"}>
					{item.count}
				</small>
			)}
		</div>
	);
}
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button } from "antd";
import {
	PlusOutlined,
	// DownloadOutlined,
	ShareAltOutlined,
	DeleteOutlined,
} from "@ant-design/icons";
import "./style.scss";
import { addFav, removeFav } from "../../../../actions/favListAction";

import { RootState } from "../../../../constants/state";
import {
	SongDetail,
	SongInAlbum,
} from "../../../../constants/types/songDetailTypes";

interface Props {
	song: SongDetail | SongInAlbum;
}

const ButtonGroup: React.FC<Props> = ({ song }) => {
	let isAdded = useSelector((state: RootState) =>
		state.favList.includes(song.id)
	);
	const [added, setAdded] = useState(isAdded);
	useEffect(() => {
		setAdded(isAdded);
	}, [isAdded]);
	const dispatch = useDispatch();

	return (
		<Row gutter={16} className="button-group-wrapper">
			<Col span={24}>
				{added ? (
					<Button
						type="primary"
						onClick={() => {
							dispatch(removeFav(song));
							setAdded(false);
						}}
						icon={<DeleteOutlined />}
					>
						Bỏ yêu thích
					</Button>
				) : (
					<Button
						onClick={() => {
							dispatch(addFav(song));
							setAdded(true);
						}}
						icon={<PlusOutlined />}
					>
						Yêu thích
					</Button>
				)}

				{/* <Button icon={<DownloadOutlined />}>Tải xuống</Button> */}
				<a href={song.link} target="_blank" rel="noopener noreferrer">
					<Button icon={<ShareAltOutlined />}>Chia sẻ</Button>
				</a>
			</Col>
		</Row>
	);
};

export default ButtonGroup;

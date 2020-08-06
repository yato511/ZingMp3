// Libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import withLoading from "@HOCs/withLoading";
import ChartHeader from "@HomePage/components/ChartHeader";
import LineChart from "@HomePage/atoms/LineChart";
import Top3List from "../../components/Top3List";
import Top5List from "@HomePage/components/Top5List";
// Types
import { RootState } from "@constants/state";
// Actions
import { getSongChart } from "@actions/homeAction";
// SCSS
import "./style.scss";

const Chart: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSongChart());
	}, [dispatch]);

	const { songChart } = useSelector((state: RootState) => state.home.chart);
	const { isLoading = false, data = [] } = songChart;
	return withLoading(isLoading)(
		<div className="chart-wrapper">
			<div className="chart-container">
				<ChartHeader />
				<LineChart data={data} />
				<Top3List list={data.slice(0, 3)} />
			</div>
			<Top5List list={data} />
		</div>
	);
};
export default Chart;

const path = require("path");

module.exports = {
	webpack: {
		alias: {
			"@constants": path.resolve(__dirname, "./src/constants"),
			"@actions": path.resolve(__dirname, "./src/actions"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@HOCs": path.resolve(__dirname, "./src/HOCs"),
			"@mocks": path.resolve(__dirname, "./src/mocks"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@HomePage": path.resolve(__dirname, "./src/pages/HomePage"),
			"@DetailPage": path.resolve(__dirname, "./src/pages/DetailPage"),
			"@SearchPage": path.resolve(__dirname, "./src/pages/SearchPage"),
			"@GlobalComponents": path.resolve(
				__dirname,
				"./src/pages/GlobalComponents"
			),
		},
	},
};

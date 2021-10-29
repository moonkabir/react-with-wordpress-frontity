const settings = {
	name: "my-first-frontity-project",
	state: {
		frontity: {
		url: "https://test.frontity.org",
		title: "Test Frontity Blog",
		description: "WordPress installation for Frontity development",
		},
	},
	packages: [
		// File: /frontity.settings.js

		{
		name: "my-first-theme",
		},

		// {
		//   "name": "@frontity/mars-theme",
		//   "state": {
		//     "theme": {
		//       "menu": [
		//         [
		//           "Home",
		//           "/"
		//         ],
		//         [
		//           "Nature",
		//           "/category/nature/"
		//         ],
		//         [
		//           "Travel",
		//           "/category/travel/"
		//         ],
		//         [
		//           "Japan",
		//           "/tag/japan/"
		//         ],
		//         [
		//           "About Us",
		//           "/about-us/"
		//         ]
		//       ],
		//       "featured": {
		//         "showOnList": false,
		//         "showOnPost": false
		//       }
		//     }
		//   }
		// },

		{
			name: "@frontity/wp-source",
			state: {
				source: {
				url: "https://test.frontity.org",
				postTypes: [
					{
					type: "destinations",
					endpoint: "destinations",
					archive: "/destinations",
					},
				],
				},
			},
		},
		"@frontity/tiny-router",
		"@frontity/html2react",
	],
};

export default settings;

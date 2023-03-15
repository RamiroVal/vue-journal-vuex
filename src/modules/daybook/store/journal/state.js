export default () => ({
	isLoading: true,
	entries: [
		{
			id: new Date().getTime(),
			date: new Date().toDateString(),
			text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta porro quisquam ex, aliquam cupiditate eius perspiciatis, dolores quas aut facere voluptatem rerum, veniam recusandae vero optio beatae. Fugiat, praesentium nihil.",
			picture: null,
		},
		{
			id: new Date().getTime() + 1000,
			date: new Date().toDateString(),
			text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta porro quisquam ex, aliquam cupiditate eius perspiciatis, dolores quas aut facere voluptatem rerum, veniam recusandae vero optio beatae. Fugiat, praesentium nihil.",
			picture: null,
		},
		{
			id: new Date().getTime() + 2000,
			date: new Date().toDateString(),
			text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta porro quisquam ex, aliquam cupiditate eius perspiciatis, dolores quas aut facere voluptatem rerum, veniam recusandae vero optio beatae. Fugiat, praesentium nihil.",
			picture: null,
		},
	],
});

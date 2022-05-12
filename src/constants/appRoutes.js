export const appRoutes = [
	{
		component: 'Login',
		breadcrumb: ['App', 'Login'],
		url: '/login',
	},
	{
		component: 'Home',
		breadcrumb: ['App', 'Home'],
		url: '/',
		isIndex: true,
	},
	{
		component: 'Inguiry',
		breadcrumb: ['App', 'Inguiry'],
		url: '/inquiry',
		children: [
			{
				component: 'Dayoff',
				breadcrumb: ['App', 'Inguiry', 'Dayoff'],
				url: '/dayoff',
				isIndex: true,
			},
			{
				component: 'IT',
				breadcrumb: ['App', 'Inguiry', 'IT'],
				url: '/it',
			},
		],
	},
];

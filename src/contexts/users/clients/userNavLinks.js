function userNavLinks(id, modals) {
	const prefixPath = (to) => `/clients/${id}/${to}`;

	const { subscriptionsModal, myProfessionalsModal } = modals;

	return [
		{ label: 'Profile', href: prefixPath('') },
		{
			label: 'Connections',
			children: [
				{
					label: 'My Professionals',
					onClick: myProfessionalsModal.onOpen,
				},
				{
					label: 'Subscriptions',
					onClick: subscriptionsModal.onOpen,
				},
			],
		},
		{ label: 'Find Professionals', href: '/professionals' },
	];
}

export { userNavLinks };

let upcomingBookings = [];
let finishedBookings = [];
let canceledBookings = [];

const fnsh1 = {
	// eventType
	name: 'Consultation',
	inviteeName: 'Monkey Luffy',
	inviteeEmail: 'luffy@email.com',
	startTime: '2022-05-16T08:00:00.000000Z',
	endTime: '2022-05-16T08:30:00.000000Z',
	location: {
		type: 'physical',
		location: 'My office',
	},
	inviteUri: 'example.com/abc',
};

const fnsh2 = {
	// eventType
	name: 'Cleaning',
	inviteeName: 'Sanji Vinsmoke',
	inviteeEmail: 'sanji@email.com',
	startTime: '2022-05-18T11:00:00.000000Z',
	endTime: '2022-05-18T11:30:00.000000Z',
	location: {
		type: 'physical',
		location: 'My office',
	},
	inviteUri: 'example.com/abc',
};

const fnsh3 = {
	// eventType
	name: 'Brace Installment',
	inviteeName: 'Nami Swan',
	inviteeEmail: 'nami@email.com',
	startTime: '2022-05-22T13:00:00.000000Z',
	endTime: '2022-05-22T15:00:00.000000Z',
	location: {
		type: 'physical',
		location: 'My office',
	},
	inviteUri: 'example.com/abc',
};

const upb1 = {
	// eventType
	name: 'Consultation',
	inviteeName: 'Shanks',
	inviteeEmail: 'red@email.com',
	startTime: '2022-05-29T08:00:00.000000Z',
	endTime: '2022-05-29T08:30:00.000000Z',
	location: {
		type: 'physical',
		location: 'My office',
	},
	inviteUri: 'example.com/abc',
};

const upb2 = {
	// eventType
	name: 'Cleaning',
	inviteeName: 'Blackbeard',
	inviteeEmail: 'bb@email.com',
	startTime: '2022-06-03T11:00:00.000000Z',
	endTime: '2022-06-03T11:30:00.000000Z',
	location: {
		type: 'physical',
		location: 'My office',
	},
	inviteUri: 'example.com/abc',
};

const upb3 = {
	// eventType
	name: 'Brace Installment',
	inviteeName: 'Boa',
	inviteeEmail: 'boa@email.com',
	startTime: '2022-06-04T13:00:00.000000Z',
	endTime: '2022-06-04T15:00:00.000000Z',
	location: {
		type: 'physical',
		location: 'My office',
	},
	inviteUri: 'example.com/abc',
};

const cncl1 = {
	// eventType
	name: 'Consultation',
	inviteeName: 'Ace',
	inviteeEmail: 'ace@email.com',
	startTime: '2022-05-30T08:00:00.000000Z',
	endTime: '2022-05-30T09:00:00.000000Z',
	location: {
		type: 'physical',
		location: 'My office',
	},
	inviteUri: 'example.com/abc',
};

const cncl2 = {
	// eventType
	name: 'Cleaning',
	inviteeName: 'Gold Roger',
	inviteeEmail: 'gdr@email.com',
	startTime: '2022-06-02T11:00:00.000000Z',
	endTime: '2022-06-02T11:30:00.000000Z',
	location: {
		type: 'physical',
		location: 'My office',
	},
	inviteUri: 'example.com/abc',
};

const cncl3 = {
	// eventType
	name: 'Brace Installment',
	inviteeName: 'Oden Kozuki',
	inviteeEmail: 'oden@email.com',
	startTime: '2022-06-04T15:00:00.000000Z',
	endTime: '2022-06-04T16:30:00.000000Z',
	location: {
		type: 'physical',
		location: 'My office',
	},
	inviteUri: 'example.com/abc',
};

for (let i = 0; i < 5; i++) {
	finishedBookings.push(fnsh1);
	upcomingBookings.push(upb1);
	canceledBookings.push(cncl1);
}
for (let i = 0; i < 5; i++) {
	finishedBookings.push(fnsh2);
	upcomingBookings.push(upb2);
	canceledBookings.push(cncl2);
}
for (let i = 0; i < 5; i++) {
	finishedBookings.push(fnsh3);
	upcomingBookings.push(upb3);
	canceledBookings.push(cncl3);
}

export { upcomingBookings, finishedBookings, canceledBookings };

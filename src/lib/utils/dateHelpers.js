const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const addZero = (i) => {
	if (i < 10) i = '0' + i;
	return i;
};

const convertHour = (i) => {
	if (i > 12) i = i - 12;
	return i;
};

export const getDate = (date) => {
	let d = new Date(date);
	let day = d.getUTCDate();
	let month = months[d.getUTCMonth()];
	let year = d.getUTCFullYear();
	let completeDate = `${month} ${day}, ${year}`;
	return completeDate;
};

export const getTime = (date) => {
	let d = new Date(date);
	let hour = d.getUTCHours();
	let time = hour > 11 ? 'pm' : 'am';
	let convertedHour = convertHour(d.getUTCHours());
	let minutes = addZero(d.getUTCMinutes());
	let completeTime = `${convertedHour}:${minutes} ${time}`;
	return completeTime;
};

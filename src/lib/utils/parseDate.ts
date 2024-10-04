export const parseDate = (date: Date): string => {
	const dateString = String(date);

	return dateString.split('T')[0];
};

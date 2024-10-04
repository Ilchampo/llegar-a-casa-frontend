import type { Handle } from '@sveltejs/kit';

import { redirect } from '@sveltejs/kit';

import status from '$lib/constants/status';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname !== '/') {
		throw redirect(status.REDIRECT, '/');
	}

	return resolve(event);
};

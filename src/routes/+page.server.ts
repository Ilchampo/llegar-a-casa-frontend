import type { Actions } from '@sveltejs/kit';

import { parsePlate } from '$lib/utils/parsePlate';

import status from '$lib/constants/status';
import config from '$lib/config';
import axios from 'axios';

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const plate = parsePlate(form.get('licensePlate') as string);

		const [vehicleResponse, reportsResponse] = await Promise.all([
			axios.get(`${config.api.baseUrl}/vehicle/${plate}`),
			axios.get(`${config.api.baseUrl}/reports/${plate}`)
		]);

		return {
			status: status.OK,
			data: {
				vehicle: vehicleResponse.data,
				reports: reportsResponse.data
			}
		};
	}
};

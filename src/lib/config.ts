import type { IConfig } from '$lib/interfaces/config.interface';
import type { Environment } from '$lib/types/environment';

const config: IConfig = {
	environment: (import.meta.env.VITE_ENVIRONEMNT as Environment) ?? 'development',
	api: {
		baseUrl: import.meta.env.VITE_API_URL ?? 'http://localhost:3000'
	}
};

export default config;

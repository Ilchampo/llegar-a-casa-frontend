import type { Environment } from '$lib/types/environment';

export interface IConfig {
	environment: Environment;
	api: {
		baseUrl: string;
	};
}

import type { IResult } from '$lib/interfaces/result.interface';
import type { Writable } from 'svelte/store';

import { writable } from 'svelte/store';

export const resultStore: Writable<IResult | undefined> = writable(undefined);

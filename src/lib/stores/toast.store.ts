import type { IToast } from '$lib/interfaces/toast.interface';
import type { Writable } from 'svelte/store';

import { writable } from 'svelte/store';

export const toastStore: Writable<IToast | undefined> = writable(undefined);

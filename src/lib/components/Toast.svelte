<script lang="ts">
	import { FIVE_SECONDS } from '$lib/constants/timeouts';
	import { toastStore } from '$lib/stores/toast.store';
	import { fade } from 'svelte/transition';

	const handleClickClose = (): void => {
		toastStore.update(() => undefined);
	};

	$: {
		if (toastStore) {
			setTimeout(() => {
				toastStore.update(() => undefined);
			}, FIVE_SECONDS);
		}
	}
</script>

{#if $toastStore}
	<div
		aria-live="assertive"
		class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
		in:fade={{ duration: 500 }}
		out:fade={{ duration: 500 }}
	>
		<div class="flex w-full flex-col items-center space-y-4 sm:items-end">
			<div
				class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
			>
				<div class="p-4">
					<div class="flex items-start">
						<div class="flex-shrink-0">
							{#if $toastStore.type === 'success'}
								<svg
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
									class="size-6 text-green-400"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							{:else if $toastStore.type === 'warning'}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="text-primary-400 size-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
									/>
								</svg>
							{:else}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="size-6 text-red-400"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
									/>
								</svg>
							{/if}
						</div>
						<div class="ml-3 w-0 flex-1 pt-0.5">
							{#if $toastStore.type === 'success'}
								<p class="text-sm font-medium text-gray-900">¡Consulta exitosa!</p>
							{:else if $toastStore.type === 'warning'}
								<p class="text-sm font-medium text-gray-900">¡Advertencia!</p>
							{:else}
								<p class="text-sm font-medium text-gray-900">¡Hubo un error en la consulta!</p>
							{/if}
							<p class="mt-1 text-sm text-gray-500">{$toastStore.message}</p>
						</div>
						<div class="ml-4 flex flex-shrink-0">
							<button
								type="button"
								class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								on:click={handleClickClose}
							>
								<span class="sr-only">Cerrar</span>
								<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path
										d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

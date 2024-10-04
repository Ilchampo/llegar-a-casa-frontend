<script lang="ts">
	import type { IResult } from '$lib/interfaces/result.interface';
	import type { SubmitFunction } from '@sveltejs/kit';

	import { resultStore } from '$lib/stores/result.store';
	import { toastStore } from '$lib/stores/toast.store';
	import { enhance } from '$app/forms';

	import Spinner from '$lib/components/Spinner.svelte';

	import status from '$lib/constants/status';

	export let title: string;
	export let description: string;

	let licensePlate = '';
	let isLoading = false;

	const onHandleSubmit: SubmitFunction = async () => {
		isLoading = true;
		resultStore.update(() => undefined);

		return ({ result }) => {
			if (result.status !== status.OK || result.type !== 'success') {
				resultStore.update(() => undefined);
				toastStore.update(() => ({
					type: 'error',
					message: 'No se pudo obtener la información del vehículo. Por favor, intenta de nuevo.'
				}));
				isLoading = false;
				return;
			}

			const newResult: IResult = {
				vehicle: result.data?.data.vehicle.data,
				reports: result.data?.data.reports.data ?? []
			};

			resultStore.update(() => newResult);
			toastStore.update(() => ({
				type: 'success',
				message: 'Información del vehículo obtenida correctamente.'
			}));
			isLoading = false;

			return;
		};
	};
</script>

<div class="flex animate-fadeIn flex-col space-y-4 rounded-xl bg-white p-6 shadow-xl">
	<div class="flex items-center gap-2">
		<div class="flex flex-col">
			<h1 class="text-2xl font-bold">{title}</h1>
			<span class="font-extralight">{description}</span>
		</div>
	</div>

	<form method="POST" class="space-y-4" use:enhance={onHandleSubmit}>
		<div
			class="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600"
		>
			<label for="name" class="block text-xs font-medium text-gray-900">Placa del Vehículo</label>
			<input
				type="text"
				name="licensePlate"
				id="licensePlate"
				class="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
				placeholder="PAB-1234"
				bind:value={licensePlate}
			/>
		</div>

		<div>
			<button
				type="submit"
				class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-400"
				disabled={!licensePlate || licensePlate.length < 5 || isLoading}
			>
				{#if isLoading}
					<Spinner />
				{:else}
					Consultar Información
				{/if}
			</button>
		</div>
		<form></form>
	</form>
</div>

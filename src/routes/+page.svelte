<script lang="ts">
	import { resultStore } from '$lib/stores/result.store';

	import RequestForm from '$lib/components/RequestForm.svelte';
	import Vehicle from '$lib/components/Vehicle.svelte';
	import Reports from '$lib/components/Reports.svelte';
	import Toast from '$lib/components/Toast.svelte';

	const onHandleClick = (): void => {
		resultStore.update(() => undefined);
	};
</script>

<div
	class="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-blue-800"
>
	{#if $resultStore}
		<div class="flex animate-fadeIn flex-col space-y-4 rounded-xl bg-white p-6 shadow-xl">
			<Vehicle vehicle={$resultStore.vehicle} />
			<Reports reports={$resultStore.reports} />
			<button
				type="button"
				class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-400"
				on:click={onHandleClick}
				disabled={!$resultStore}>Buscar otro vehículo</button
			>
		</div>
	{:else}
		<RequestForm
			title="Consultar Información del Vehículo"
			description="Ingresa la placa del vehículo para obtener información"
		/>
	{/if}
</div>

<Toast />

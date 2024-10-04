<script lang="ts">
	import type { IVehicle } from '$lib/interfaces/vehicle.interface';

	export let vehicle: IVehicle;
</script>

<h2 class="text-xl font-semibold">Información del Vehículo</h2>

{#if vehicle.model.length > 0 && vehicle.year !== null}
	<table class="table-auto border-collapse">
		<tbody>
			<tr class="border-b">
				<td class="px-4 py-2 font-bold text-gray-700">Marca</td>
				<td class="px-4 py-2 text-gray-900">{vehicle.brand}</td>
			</tr>
			<tr class="border-b">
				<td class="px-4 py-2 font-bold text-gray-700">Modelo</td>
				<td class="px-4 py-2 text-gray-900">{vehicle.model}</td>
			</tr>
			<tr class="border-b">
				<td class="px-4 py-2 font-bold text-gray-700">Año</td>
				<td class="px-4 py-2 text-gray-900">{vehicle.year}</td>
			</tr>
			<tr class="border-b">
				<td class="px-4 py-2 font-bold text-gray-700">Placa</td>
				<td class="px-4 py-2 text-gray-900">{vehicle.licensePlate}</td>
			</tr>
		</tbody>
	</table>

	<div class="flex items-center gap-2">
		{#if vehicle.stolen}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="size-6 text-red-500"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
				/>
			</svg>
			<span class="font-bold text-red-500">Este vehículo se ha reportado como robado.</span>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="size-6 text-green-500"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
				/>
			</svg>
			<span>Este vehículo no se ha reportado como robado.</span>
		{/if}
	</div>
{:else}
	<div class="flex items-center gap-2">
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
		<span class="font-bold text-red-500"
			>El servicio de consulta de vehículo no está disponible.</span
		>
	</div>
{/if}

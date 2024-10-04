<script lang="ts">
	import type { IReport } from '$lib/interfaces/reports.interface';

	import { parseDate } from '$lib/utils/parseDate';

	export let reports: IReport[];
</script>

{#if reports.length > 0}
	<h2 class="text-xl font-semibold">Denuncias Encontradas</h2>
	<span class="font-extralight"
		>A continuación, se muestra las denuncias que han involucrado este vehículo.<br />
		<b class="text-sm">Estas incluyen las denuncias donde también pudo haber sido víctima.</b></span
	>

	<div class="flex max-h-96 flex-col gap-4 overflow-scroll">
		{#each reports as report}
			<div class="grid grid-cols-2 gap-2 rounded-xl bg-red-100 p-4 shadow-xl">
				<div class="col-span-2 flex flex-col space-y-1">
					<span class="font-bold">Nombres de sospechosos:</span>
					{#each report.suspects as suspect}
						<span>{suspect}</span>
					{/each}
				</div>
				<div class="col-span-2 flex flex-col space-y-1">
					<span class="font-bold">Descripción de la denuncia:</span>
					<span>{report.description}</span>
				</div>
				<div class="flex flex-col space-y-1">
					<span class="font-bold">Fecha de la denuncia:</span>
					<span>{parseDate(report.date)}</span>
				</div>
				<div class="flex flex-col space-y-1">
					<span class="font-bold">Lugar de la denuncia:</span>
					<span>{report.place}</span>
				</div>
			</div>
		{/each}
	</div>
{:else}
	<div class="flex items-center gap-2">
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
		<span>Este vehículo no cuenta con denuncias</span>
	</div>
{/if}

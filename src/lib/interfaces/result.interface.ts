import type { IVehicle } from '$lib/interfaces/vehicle.interface';
import type { IReport } from '$lib/interfaces/reports.interface';

export interface IResult {
	vehicle: IVehicle;
	reports: IReport[];
}

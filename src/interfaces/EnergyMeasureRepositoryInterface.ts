import EnergyMeasure from "../domain/energyMeasure";

export default interface EnergyMeasureRepositoryInterface {
  getMeasuresByPeriodAndDevice(device: string, startDate: Date, endDate: Date): EnergyMeasure[]
  insertMeasure(measure: EnergyMeasure): Promise<string>
}
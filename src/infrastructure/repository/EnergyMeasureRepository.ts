import EnergyMeasureRepositoryInterface from '../../interfaces/EnergyMeasureRepositoryInterface';
import EnergyMeasure from '../../domain/energyMeasure';
import mongoose from 'mongoose';
import { EnergyMeasureModel } from '../config/energyMeasureConfig';

export default class EnergyMeasureRepository
  implements EnergyMeasureRepositoryInterface
{
  async insertMeasure(measure: EnergyMeasure): Promise<string> {
    try {
      const model = new EnergyMeasureModel(measure);
      await model.validate();
      await model.save();
      return model._id.toString();
    }
    catch (err: any) {
      console.error(err);
      throw err;
    }
    
  }

  getMeasuresByPeriodAndDevice(
    device: string,
    startDate: Date,
    endDate: Date,
  ): EnergyMeasure[] {
    return [
      {
        time_stamp: '2021-01-01T00:00:00.000Z',
        server_tag: 'server_tag',
        telemetry_type: 'energy',
        measures: [{
          device_tag: 'lsjalksdj',
          values: {
            consumption: {
              real: 1
            },
            totalizer: {
              real: 2
            }
          },
        }],
      },
    ];
  }
}

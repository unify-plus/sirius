import EnergyMeasureRepositoryInterface from '../../interfaces/EnergyMeasureRepositoryInterface';
import EnergyMeasure from '../../domain/energyMeasure';

export default class EnergyMeasureRepository
  implements EnergyMeasureRepositoryInterface
{
  getMeasuresByPeriodAndDevice(
    device: string,
    startDate: Date,
    endDate: Date,
  ): EnergyMeasure[] {
    return [
      {
        timestamp: new Date(),
        server: {
          tag: 'lsjalksdj',
        },
        type: 'energy',
        measures: {
          device: {
            tag: 'teste',
          },
          values: {
            consumption: {
              reactive: [1, 2, 3, 4],
              real: [1, 2, 3, 4],
            },
            demand: {
              reactive: [1, 2, 3, 4],
              real: [1, 2, 3, 4],
            },
          },
        },
      },
    ];
  }
}

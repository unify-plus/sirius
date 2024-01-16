import { inject, injectable } from "tsyringe";
import EnergyMeasure from "../../domain/energyMeasure";
import EnergyMeasureRepository from "../../infrastructure/repository/EnergyMeasureRepository";

@injectable()
class InsertMeasureUseCase {
  constructor(
    // @ts-ignore
    @inject("EnergyMeasureRepository") private readonly energyMeasureRepository: EnergyMeasureRepositoryInterface
  )
  {}

  async execute(input: EnergyMeasure): Promise<string> {
    return this.energyMeasureRepository.insertMeasure(input);
  }
}

export { InsertMeasureUseCase };
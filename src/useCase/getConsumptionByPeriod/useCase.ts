import { InjectionToken, container, inject, injectable } from "tsyringe";
import EnergyMeasureRepositoryInterface from "../../interfaces/EnergyMeasureRepositoryInterface";
import input from "./input";
import output from "./output";
import EnergyMeasureRepository from "../../infrastructure/repository/EnergyMeasureRepository";

@injectable()
class GetConsumptionByPeriodUseCase {
  
  constructor(
    // @ts-ignore
    @inject("EnergyMeasureRepository") private energyMeasureRepository: EnergyMeasureRepositoryInterface
  )
  {}

  execute(input: input): output {
    console.log(input)
    return {
      downTimeConsumption: 5,
      peakTimeConsumption: 10,
      mediumTimeConsumption: 20
    }
  }
}

export { GetConsumptionByPeriodUseCase };
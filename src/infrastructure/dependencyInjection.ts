import { container } from "tsyringe";
import EnergyMeasureRepository from "./repository/EnergyMeasureRepository";
import EnergyMeasureRepositoryInterface from "../interfaces/EnergyMeasureRepositoryInterface";

const registerDependencies = () => {
  container.register<EnergyMeasureRepositoryInterface>("EnergyMeasureRepository", { useClass: EnergyMeasureRepository})
}

export { registerDependencies }
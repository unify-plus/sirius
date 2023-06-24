import "reflect-metadata";
import express from 'express';
import { container } from 'tsyringe';
import { GetConsumptionByPeriodUseCase } from './useCase/getConsumptionByPeriod/useCase';
import { registerDependencies } from "./infrastructure/dependencyInjection";

const app = express();

registerDependencies();

app.get('/', (request, response) => {
  const useCase = container.resolve(GetConsumptionByPeriodUseCase);
  const output = useCase.execute({
    device: 'oiasdoi',
    periodStartDate: new Date(),
    periodEndDate: new Date(),
  });

  response.send(output);
});

app.listen(3333, () => console.log('Server started running on port 3333'));

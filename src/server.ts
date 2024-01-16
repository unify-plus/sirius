import 'reflect-metadata';
import express from 'express';
import { container } from 'tsyringe';
import { GetConsumptionByPeriodUseCase } from './useCase/getConsumptionByPeriod/useCase';
import { registerDependencies } from './infrastructure/dependencyInjection';
import { InsertMeasureUseCase } from './useCase/insertMeasure/useCase';
import EnergyMeasure from './domain/energyMeasure';
import bodyParser from 'body-parser';
import { connectToDb } from './infrastructure/db/mongoConnection';
import dotenv from 'dotenv';

const app = express();

app.use(bodyParser.json()); // for parsing application/json

dotenv.config(); 
connectToDb();

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

app.post('/', async (request, response) => {
  try {
    const useCase = container.resolve(InsertMeasureUseCase);
    const id = await useCase.execute(request.body as EnergyMeasure);
    response.send(id);
  } catch (err: any) {
    response.status(500).send(err.message);
  }
  
});

app.listen(process.env.PORT || 3333, () =>
  console.log('Server started running on port 3333'),
);

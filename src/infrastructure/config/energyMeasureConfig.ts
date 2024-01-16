import mongoose, { Schema } from "mongoose";
import EnergyMeasure from "../../domain/energyMeasure";

interface EnergyMeasureDocument extends EnergyMeasure, Document { }

const EnergyMeasureSchema = new Schema<EnergyMeasureDocument>({
  time_stamp: { type: String, required: true },
  server_tag: { type: String, default: null },
  telemetry_type: { type: String, required: true },
  measures: [{
    device_tag: { type: String, required: true },
    values: {
      consumption: {
        real: { type: Number, required: true }
      },
      totalizer: {
        real: { type: Number, required: true }
      }
    }
  }]
});

const EnergyMeasureModel = mongoose.model<EnergyMeasureDocument>('Telemetria', EnergyMeasureSchema, 'telemetria');
export { EnergyMeasureModel }
export default interface EnergyMeasure {
  time_stamp: String,
  server_tag: string,
  telemetry_type: string,
  measures: Measure[]
}

interface Measure {
  device_tag: string,
    values: {
      consumption: {
        real: number,
      },
      totalizer: {
        real: number
      }
    }
}
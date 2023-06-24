export default interface EnergyMeasure {
  timestamp: Date,
  server: {
    tag: string
  },
  type: string,
  measures: {
    device: {
      tag: string
    },
    values: {
      consumption: {
        real: number[],
        reactive: number[]
      },
      demand: {
        real: number[],
        reactive: number[]
      }
    }
  }
}
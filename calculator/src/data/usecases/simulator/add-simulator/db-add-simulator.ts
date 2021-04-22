import { HttpClient } from '@/data/protocols/http'
import { Simulator } from '@/domain/models/simulator'
import { AddSimulatorParam } from '@/domain/usecases/simulator/add-simulator'
import { AddSimulator, AddSimulatorParams, AddSimulatorRepository, LoadSimulatorByEmailRepository } from './db-add-simulator-protocols'

export class DbAddSimulator implements AddSimulator {
  constructor (
    private readonly addSimulatorRepository: AddSimulatorRepository,
    private readonly loadSimulatorByEmailRepository: LoadSimulatorByEmailRepository,
    private readonly httpClient: HttpClient
  ) {}

  async add (data: AddSimulatorParams): Promise<void> {
    const simulator = await this.loadSimulatorByEmailRepository.loadByEmail(data.email)
    if (!simulator) {
      const numbers = this.installment(data.number)
      const calculator = await this.callHttpClient(data, numbers)
      await this.addSimulatorRepository.add(calculator)
    } else {
      const numbers = this.installment(data.number)
      data.amount = simulator.data.reduce((acc: number, cur: Simulator) => acc + cur.installment, 0)
      const calculator = await this.callHttpClient(data, numbers)
      await this.addSimulatorRepository.add({ ...calculator, histories: simulator.data })
    }
  }

  private installment(parcel: number): number[] {
    let numbers = []
    for (let index = 0; index < parcel; index++) {
      numbers.push(index+1)
    }
    return numbers
  }

  private async callHttpClient(data: AddSimulatorParams, numbers: number[]): Promise<AddSimulatorParam> {
    const calculator = await this.httpClient.request({ 
      url: 'http://simulator:8082/v1/calculator',
      method: 'post',
      body: { ...data, numbers }
    })
    return calculator.body
  }
}

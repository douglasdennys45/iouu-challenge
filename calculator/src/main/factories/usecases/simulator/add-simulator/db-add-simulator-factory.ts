import { DbAddSimulator } from '@/data/usecases/simulator/add-simulator/db-add-simulator'
import { AddSimulator } from '@/domain/usecases/simulator/add-simulator'
import { SimulatorMongoRepository } from '@/infra/db/mongodb/simulator/simulator-mongo-repository'
import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios-http-client'

export const makeDbAddSimulator = (): AddSimulator => {
  const simulatorMongoRepository = new SimulatorMongoRepository()
  const httpClient = new AxiosHttpClient()
  return new DbAddSimulator(simulatorMongoRepository, simulatorMongoRepository, httpClient)
}

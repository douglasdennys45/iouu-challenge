import { LogControllerDecorator } from '@/main/decorators/log-controller-decorator'
import { Controller } from '@/presentation/protocols'
import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios-http-client'

export const makeLogControllerDecorator = (controller: Controller): Controller => {
  const httpClient = new AxiosHttpClient()
  return new LogControllerDecorator(controller, httpClient)
}

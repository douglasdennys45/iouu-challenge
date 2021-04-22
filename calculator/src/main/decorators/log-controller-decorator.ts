import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { HttpClient } from '@/data/protocols/http'

export class LogControllerDecorator implements Controller {
  constructor (
    private readonly controller: Controller,
    private readonly httpClient: HttpClient
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest)
    if (httpResponse.statusCode === 500) {
      await this.httpClient.request({
        url: 'http://tracker-error:8081/v1/errors',
        method: 'post',
        body: { error: httpResponse.body.stack }
      })
    }
    return httpResponse
  }
}

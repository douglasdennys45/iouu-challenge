import { LogControllerDecorator } from './log-controller-decorator'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { serverError, ok } from '@/presentation/helpers/http/http-helper'
import { mockSimulatorModel } from '@/domain/test'
import faker from 'faker'
import { HttpClientSpy } from '@/data/test'

class ControllerSpy implements Controller {
  httpResponse = ok(mockSimulatorModel())
  httpRequest: HttpRequest

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    this.httpRequest = httpRequest
    return this.httpResponse
  }
}

const mockRequest = (): HttpRequest => {
  const password = faker.internet.password()
  return {
    body: {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password,
      passwordConfirmation: password
    }
  }
}

const mockServerError = (): HttpResponse => {
  const fakeError = new Error()
  fakeError.stack = 'any_stack'
  return serverError(fakeError)
}

type SutTypes = {
  sut: LogControllerDecorator
  controllerSpy: ControllerSpy
  httpClientSpy: HttpClientSpy
}

const makeSut = (): SutTypes => {
  const controllerSpy = new ControllerSpy()
  const httpClientSpy = new HttpClientSpy()
  const sut = new LogControllerDecorator(controllerSpy, httpClientSpy)
  return {
    sut,
    controllerSpy,
    httpClientSpy
  }
}

describe('LogController Decorator', () => {
  test('Should call controller handle', async () => {
    const { sut, controllerSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(controllerSpy.httpRequest).toEqual(httpRequest)
  })

  test('Should return the same result of the controller', async () => {
    const { sut, controllerSpy } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(controllerSpy.httpResponse)
  })

  test('Should call httpClientSpy with correct error if controller returns a server error', async () => {
    const { sut, controllerSpy } = makeSut()
    const serverError = mockServerError()
    controllerSpy.httpResponse = serverError
    await sut.handle(mockRequest())
    expect(controllerSpy.httpResponse.body.stack).toBe(serverError.body.stack)
  })
})

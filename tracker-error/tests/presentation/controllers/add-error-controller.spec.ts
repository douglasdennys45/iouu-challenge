import { HttpRequest } from '../../../src/presentation/protocols'
import { AddErrorController } from '../../../src/presentation/controllers/error/add-error-controller'
import { badRequest, serverError, noContent } from '../../../src/presentation/helpers/http/http-helper'

import { ValidationSpy, AddErrorSpy } from '../mocks'
import { throwError } from '../../domain/mocks'
import faker from 'faker'

const mockRequest = (): HttpRequest => ({
  body: {
    name: faker.random.words(),
    phone: faker.phone.phoneNumber()
  }
})

type SutTypes = {
  sut: AddErrorController
  validationSpy: ValidationSpy
  addErrorSpy: AddErrorSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const addErrorSpy = new AddErrorSpy()
  const sut = new AddErrorController(validationSpy, addErrorSpy)
  return {
    sut,
    validationSpy,
    addErrorSpy
  }
}

describe('AddErrorController', () => {
  test('Should call Validation with correct values', async () => {
    const { sut, validationSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(validationSpy.input).toEqual(httpRequest.body)
  })

  test('Should return 400 if Validation fails', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new Error()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(validationSpy.error))
  })

  test('Should call AddError with correct values', async () => {
    const { sut, addErrorSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(addErrorSpy.addErrorParams).toEqual(httpRequest.body)
  })

  test('Should return 500 if AddError throws', async () => {
    const { sut, addErrorSpy } = makeSut()
    jest.spyOn(addErrorSpy, 'add').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(noContent())
  })
})

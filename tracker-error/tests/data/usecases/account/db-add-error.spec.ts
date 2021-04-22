import { DbAddError } from '../../../../src/data/usecases'
import { mockAddErrorParams, throwError } from '../../../domain/mocks'
import { AddErrorRepositorySpy } from '../../../data/mocks'

type SutTypes = {
  sut: DbAddError
  addErrorRepositorySpy: AddErrorRepositorySpy
}

const makeSut = (): SutTypes => {
  const addErrorRepositorySpy = new AddErrorRepositorySpy()
  const sut = new DbAddError(addErrorRepositorySpy)
  return {
    sut,
    addErrorRepositorySpy
  }
}

describe('DbAddError Usecase', () => {
  test('Should call AddErrorRepository with correct values', async () => {
    const { sut, addErrorRepositorySpy } = makeSut()
    const addErrorParams = mockAddErrorParams()
    await sut.add(addErrorParams)
    expect(addErrorRepositorySpy.params).toEqual(addErrorParams)
  })

  test('Should throw if AddErrorRepository throws', async () => {
    const { sut, addErrorRepositorySpy } = makeSut()
    jest.spyOn(addErrorRepositorySpy, 'add').mockImplementationOnce(throwError)
    const promise = sut.add(mockAddErrorParams())
    await expect(promise).rejects.toThrow()
  })

  test('Should return success', async () => {
    const { sut } = makeSut()
    const isValid = await sut.add(mockAddErrorParams())
    expect(isValid).toEqual(undefined)
  })
})

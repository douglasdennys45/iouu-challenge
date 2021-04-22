import { mockAddErrorParams } from '../../../domain/mocks/index'
import { ErrorMongoDBRepository } from '../../../../src/infra/db/mongodb/error/error-mongodb-repository'
import { MongoHelper } from '../../../../src/infra/db/mongodb/helpers/mongo-helper'

describe('ErrorMongoDbRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  const makeSut = (): ErrorMongoDBRepository => {
    return new ErrorMongoDBRepository()
  }

  describe('add()', () => {
    test('Should return an error on success', async () => {
      const sut = makeSut()
      const error = await sut.add(mockAddErrorParams())
      expect(error).toBeFalsy()
    })
  })
})

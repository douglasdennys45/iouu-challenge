import { MongoHelper } from '../../../../src/infra/db/mongodb/helpers/mongo-helper'

describe('Mongo Helper', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test('Should reconnect if mongodb is down', async () => {
    let accountCollection = await MongoHelper.getCollection('errors')
    expect(accountCollection).toBeTruthy()
    await MongoHelper.disconnect()
    accountCollection = await MongoHelper.getCollection('errors')
    expect(accountCollection).toBeTruthy()
  })
})

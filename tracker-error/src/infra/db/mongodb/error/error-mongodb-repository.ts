import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import { AddErrorRepository } from '@/data/protocols'

export class ErrorMongoDBRepository implements AddErrorRepository {
  async add(data: AddErrorRepository.Params): Promise<AddErrorRepository.Result> {
    const col = await MongoHelper.getCollection('errors')
    await col.insertOne(data)
  }
}

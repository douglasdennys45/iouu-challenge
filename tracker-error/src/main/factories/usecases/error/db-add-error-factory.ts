import { DbAddError } from '@/data/usecases/error/db-add-error'
import { AddError } from '@/domain/usecases/error/add-error'
import { ErrorMongoDBRepository } from '@/infra/db/mongodb/error/error-mongodb-repository'

export const makeDbAddError = (): AddError => {
  const repository = new ErrorMongoDBRepository()
  return new DbAddError(repository)
}
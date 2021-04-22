import { makeAddErrorValidation } from './add-error-validation-factory'
import { makeDbAddError } from '@/main/factories/usecases/error/db-add-error-factory'
import { Controller } from '@/presentation/protocols'
import { AddErrorController } from '@/presentation/controllers/error/add-error-controller'

export const makeAddErrorController = (): Controller => {
  return new AddErrorController(makeAddErrorValidation(), makeDbAddError())
}

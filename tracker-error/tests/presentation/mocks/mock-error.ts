import { AddError } from '@/domain/usecases'
import { mockErrorEntity } from '../../domain/mocks'

export class AddErrorSpy implements AddError {
  errorModel = mockErrorEntity()
  addErrorParams: AddError.Params

  async add (access: AddError.Params): Promise<AddError.Result> {
    this.addErrorParams = access
    return this.errorModel
  }
}

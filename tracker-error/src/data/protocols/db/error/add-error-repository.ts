import { AddError } from '@/domain/usecases'

export interface AddErrorRepository {
  add: (data: AddErrorRepository.Params) => Promise<AddErrorRepository.Result>
}

export namespace AddErrorRepository {
  export type Params = AddError.Params
  export type Result = AddError.Result
}

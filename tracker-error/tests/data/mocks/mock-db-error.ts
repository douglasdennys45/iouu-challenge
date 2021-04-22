import { AddErrorRepository } from '@/data/protocols'

export class AddErrorRepositorySpy implements AddErrorRepository {
  params: AddErrorRepository.Params

  async add (params: AddErrorRepository.Params): Promise<AddErrorRepository.Result> {
    this.params = params
  }
}

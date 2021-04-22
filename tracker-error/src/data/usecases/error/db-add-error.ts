import { AddError } from '@/domain/usecases'
import { AddErrorRepository } from '@/data/protocols'

export class DbAddError implements AddError {
  constructor (
    private readonly addErrorRepository: AddErrorRepository
  ) {}

  async add (data: AddError.Params): Promise<AddError.Result> {
    await this.addErrorRepository.add(data)
  }
}

import { AddError } from '@/domain/usecases'

import faker from 'faker'

export const mockAddErrorParams = (): AddError.Params => ({
  error: faker.name.findName(),
})

export const mockErrorEntity = (): AddError.Result => undefined

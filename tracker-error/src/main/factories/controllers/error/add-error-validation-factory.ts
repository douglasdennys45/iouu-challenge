import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols/validation'

export const makeAddErrorValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['error']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
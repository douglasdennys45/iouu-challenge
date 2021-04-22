import { makeAddErrorValidation } from '../../../../src/main/factories/controllers/error/add-error-validation-factory'
import { ValidationComposite, RequiredFieldValidation } from '../../../../src/validation/validators'
import { Validation } from '../../../../src/presentation/protocols/validation'

jest.mock('../../../../src/validation/validators/validation-composite')

describe('AddAccessValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeAddErrorValidation()
    const validations: Validation[] = []
    for (const field of ['error']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
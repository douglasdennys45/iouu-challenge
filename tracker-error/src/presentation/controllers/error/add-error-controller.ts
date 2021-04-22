import { Controller, HttpRequest, HttpResponse, Validation, AddError } from './add-error-controller-protocols'
import { badRequest, serverError, noContent } from '@/presentation/helpers/http/http-helper'

export class AddErrorController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addError: AddError
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      await this.addError.add(httpRequest.body)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
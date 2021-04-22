export interface AddError {
  add: (data: AddError.Params) => Promise<AddError.Result>
}

export namespace AddError {
  export type Params = {
    error: any
  }

  export type Result = void
}

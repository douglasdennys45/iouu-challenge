export type HttpResponse = {
  statusCode: number
  body: any
}

export type HttpRequest = {
  params?: any
  body?: any
  headers?: any
  query?: any
}

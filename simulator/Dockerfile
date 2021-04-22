FROM golang:1.16.3-alpine3.13 AS build
WORKDIR /app
COPY . .
RUN go build ./src/main.go

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=build /app/main .
EXPOSE 8082
CMD ["./main"]

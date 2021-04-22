package test

import (
	"github.com/bxcodec/faker/v3"
	"simulator/src/domain/entities"
)

func MockCalculatorModel() *entities.CalculatorModel {
	mock := entities.CalculatorModel{}
	err := faker.FakeData(&mock)
	if err != nil {
		panic(err)
	}
	return &mock
}

func MockCalculatorData() *entities.CalculatorData {
	mock := entities.CalculatorData{}
	err := faker.FakeData(&mock)
	if err != nil {
		panic(err)
	}
	return &mock
}

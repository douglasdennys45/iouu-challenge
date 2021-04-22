package test

import (
	"errors"
	"simulator/src/domain/entities"
	"simulator/src/domain/usecases/calculator"
)

type calculatorSpy struct {}

func NewMockCalculatorSpy() calculator.Calculator {
	return &calculatorSpy{}
}

func (mock *calculatorSpy) Calculator(data *entities.CalculatorData) (*entities.CalculatorModel, error) {
	return nil, nil
}

type calculatorErrorSpy struct {}

func NewMockCalculatorErrorSpy() calculator.Calculator {
	return &calculatorErrorSpy{}
}

func (mock *calculatorErrorSpy) Calculator(data *entities.CalculatorData) (*entities.CalculatorModel, error) {
	return nil, errors.New("error")
}

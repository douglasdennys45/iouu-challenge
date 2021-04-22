package calculator

import (
	"math"
	"simulator/src/domain/entities"
	"simulator/src/domain/usecases/calculator"
)

type logicCalculator interface {
	calculator.Calculator
}

type app struct{}

func NewLogicCalculator() logicCalculator {
	return &app{}
}

func (a *app) Calculator(data *entities.CalculatorData) (*entities.CalculatorModel, error) {
	amount := data.Amount
	var model entities.CalculatorModel
	var elements []entities.SimulatorM
	model.Email = data.Email
	model.Name = data.Name
	for parcel := range data.Numbers {
		var element entities.SimulatorM
		amountTax := a.calculatorTax(data.Tax, amount)
		valueParcel := a.calculator(data)
		amortization := a.calculatorAmortization(amountTax, valueParcel)
		total := a.toCalculateDebtBalance(amount, amortization)

		element.Number = parcel + 1
		element.Fees = math.Ceil(amountTax*100) / 100
		element.Amortization = math.Ceil(amortization*100) / 100
		element.Installment = math.Ceil(valueParcel*100) / 100
		element.OutstandingBalance = math.Ceil(total*100) / 100
		elements = append(elements, element)

		amount = amount - amortization
		model.Data = elements
	}

	return &model, nil
}

// calculo do saldo devedor
func (a *app) toCalculateDebtBalance(amount, amortization float64) float64 {
	return amount - amortization
}

// calculo do juros
func (a *app) calculatorTax(tax, amount float64) float64 {
	return (amount / 100) * tax
}

// calcula de amortização
func (a *app) calculatorAmortization(tax, amount float64) float64 {
	return amount - tax
}

// calcular financimento
func (a *app) calculator(data *entities.CalculatorData) float64 {
	return data.Amount * ((math.Pow((1+a.tax(data.Tax)), float64(data.Number)) * a.tax(data.Tax)) / (math.Pow((1+a.tax(data.Tax)), float64(data.Number)) - 1))
}

// calcular tax
func (a *app) tax(value float64) float64 {
	return value / 100
}

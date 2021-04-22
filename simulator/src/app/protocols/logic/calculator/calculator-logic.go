package calculator

import "simulator/src/domain/entities"

type CalculatorLogic interface {
	Calculator(data *entities.CalculatorData) (*entities.CalculatorModel, error)
}
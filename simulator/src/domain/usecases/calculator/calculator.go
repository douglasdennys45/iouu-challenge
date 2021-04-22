package calculator

import "simulator/src/domain/entities"

type Calculator interface {
	Calculator(data *entities.CalculatorData) (*entities.CalculatorModel, error)
}

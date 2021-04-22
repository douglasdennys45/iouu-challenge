package add_calculator

import (
	"simulator/src/main/factories/usecases/calculator"
	controller "simulator/src/presentation/controllers/calculator/add-calculator"
	"simulator/src/presentation/protocols"
	"simulator/src/validation"
)

func MakeAddCalculatorController() protocols.Controller {
	validator := validation.NewStructValidatorAdapter()
	return controller.NewAddCalculatorController(calculator.MakeAddCalculator(), validator)
}

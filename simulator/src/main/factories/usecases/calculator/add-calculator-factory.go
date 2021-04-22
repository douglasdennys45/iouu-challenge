package calculator

import (
	app "simulator/src/app/usecases/calculator/calculator"
	"simulator/src/domain/usecases/calculator"
)

func MakeAddCalculator() calculator.Calculator {
	simulator := app.NewLogicCalculator()
	return simulator
}

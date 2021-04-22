package add_calculator

import (
	"encoding/json"
	calc "simulator/src/app/protocols/logic/calculator"
	"simulator/src/domain/entities"
	"simulator/src/domain/usecases/calculator"
	"simulator/src/presentation/helpers/http"
	"simulator/src/presentation/protocols"
)

type controller struct {
	logic calculator.Calculator
	valid protocols.Validation
}

func NewAddCalculatorController(logic calc.CalculatorLogic, valid protocols.Validation) protocols.Controller {
	return &controller{logic, valid}
}

func (c *controller) Handle(request protocols.HttpRequest) protocols.HttpResponse {
	var calculatorData entities.CalculatorData
	_ = json.Unmarshal(request.Body, &calculatorData)
	err := c.valid.Validate(calculatorData)
	if err != nil {
		return http.BadRequest(err)
	}
	response, err := c.logic.Calculator(&calculatorData)
	if err != nil {
		return http.ServerError(err)
	}
	return http.Ok(response)
}
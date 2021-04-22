package add_calculator

import (
	"github.com/stretchr/testify/assert"
	"simulator/src/presentation/protocols"
	tests "simulator/src/presentation/test"
	"testing"
)

func TestController_Handle(t *testing.T) {
	faker := tests.NewMockCalculatorSpy()
	fakerValidator := tests.NewMockValidateSpy()
	app := NewAddCalculatorController(faker, fakerValidator)
	var httpRequest protocols.HttpRequest

	response := app.Handle(httpRequest)
	assert.Equal(t, response.Code, 200)

	faker = tests.NewMockCalculatorErrorSpy()
	app = NewAddCalculatorController(faker, fakerValidator)

	response = app.Handle(httpRequest)
	assert.Equal(t, response.Code, 500)

	fakerValidator = tests.NewMockValidateNotValidSpy()
	app = NewAddCalculatorController(faker, fakerValidator)
	response = app.Handle(httpRequest)
	assert.Equal(t, response.Code, 400)
}
package calculator

import (
	"github.com/stretchr/testify/assert"
	"simulator/src/domain/test"
	"testing"
)

func TestApp_Add(t *testing.T) {
	mock := test.MockCalculatorData()

	app := NewLogicCalculator()

	cur, err := app.Calculator(mock)
	assert.NotNil(t, cur)
	assert.Nil(t, err)
}

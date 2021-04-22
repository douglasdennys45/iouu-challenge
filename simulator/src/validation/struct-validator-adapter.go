package validation

import (
	"github.com/go-playground/validator/v10"
	"simulator/src/presentation/protocols"
)

type StructValidatorAdapter interface {
	protocols.Validation
}

type validators struct {
}

func NewStructValidatorAdapter() StructValidatorAdapter {
	return &validators{}
}

func (v *validators) Validate(inputs interface{}) error {
	validate := validator.New()
	return validate.Struct(inputs)
}

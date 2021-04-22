package test

import (
	"errors"
	"simulator/src/presentation/protocols"
)

type validationSpy struct {}

func NewMockValidateSpy() protocols.Validation {
	return &validationSpy{}
}

func (mock *validationSpy) Validate(inputs interface{}) error {
	return nil
}

type validationNotValidSpy struct {}

func NewMockValidateNotValidSpy() protocols.Validation {
	return &validationNotValidSpy{}
}

func (mock *validationNotValidSpy) Validate(inputs interface{}) error {
	return errors.New("error")
}

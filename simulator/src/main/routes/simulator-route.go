package routes

import (
	"simulator/src/main/adapters"
	add_calculator "simulator/src/main/factories/controllers/calculator/add-calculator"

	"github.com/labstack/echo/v4"
)

func SimulatorRouter(router *echo.Echo) {
	router.POST("/v1/calculator", adapters.AdapterRouter(add_calculator.MakeAddCalculatorController()))
}

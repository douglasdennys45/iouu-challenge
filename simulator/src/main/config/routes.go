package config

import (
	"simulator/src/main/routes"

	"github.com/labstack/echo/v4"
)

func Routes(router *echo.Echo) {
	routes.SimulatorRouter(router)
}

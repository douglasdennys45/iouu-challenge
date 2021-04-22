package config

import (
	"github.com/labstack/echo/v4"
	echoSwagger "github.com/swaggo/echo-swagger"
	_ "simulator/src/docs"
)

func StartApp() {
	router := echo.New()
	Routes(router)

	router.GET("/swagger/*", echoSwagger.WrapHandler)
	router.Logger.Fatal(router.Start(":8082"))
}

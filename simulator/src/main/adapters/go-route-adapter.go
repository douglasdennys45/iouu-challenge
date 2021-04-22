package adapters

import (
	"github.com/labstack/echo/v4"
	"io/ioutil"
	"simulator/src/presentation/protocols"
)

func AdapterRouter(controller protocols.Controller) echo.HandlerFunc {
	return func(ctx echo.Context) error {
		var req protocols.HttpRequest
		body, _ := ioutil.ReadAll(ctx.Request().Body)
		req.Body = body

		res := controller.Handle(req)
		return ctx.JSON(res.Code, res.Data)
	}
}

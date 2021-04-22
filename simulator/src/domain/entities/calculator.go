package entities

type SimulatorM struct {
	Number             int     `json:"number"`
	Installment        float64 `json:"installment"`
	Amortization       float64 `json:"amortization"`
	Fees               float64 `json:"fees"`
	OutstandingBalance float64 `json:"outstanding_balance"`
}

type CalculatorModel struct {
	Name  string       `json:"name"`
	Email string       `json:"email"`
	Data  []SimulatorM `json:"data"`
}

package entities

type CalculatorData struct {
	Name    string  `json:"name"`
	Email   string  `json:"email"`
	Tax     float64 `json:"tax"`
	Number  int     `json:"number"`
	Numbers []int   `json:"numbers"`
	Amount  float64 `json:"amount"`
	Value   float64 `json:"value"`
}

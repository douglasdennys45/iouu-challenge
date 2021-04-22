package protocols

type Queue interface {
	Handle() error
}
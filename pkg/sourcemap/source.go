package sourcemap

import "github.com/frida/typescript-go/pkg/core"

type Source interface {
	Text() string
	FileName() string
	LineMap() []core.TextPos
}

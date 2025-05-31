package ls

import (
	"github.com/frida/typescript-go/pkg/compiler"
	"github.com/frida/typescript-go/pkg/lsp/lsproto"
)

type Host interface {
	GetProgram() *compiler.Program
	GetPositionEncoding() lsproto.PositionEncodingKind
	GetLineMap(fileName string) *LineMap
}

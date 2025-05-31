package printer

import (
	"github.com/frida/typescript-go/pkg/ast"
	"github.com/frida/typescript-go/pkg/tspath"
)

type SourceFileMetaDataProvider interface {
	GetSourceFileMetaData(path tspath.Path) *ast.SourceFileMetaData
}

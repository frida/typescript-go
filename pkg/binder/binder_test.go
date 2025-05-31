package binder

import (
	"runtime"
	"testing"

	"github.com/frida/typescript-go/pkg/ast"
	"github.com/frida/typescript-go/pkg/core"
	"github.com/frida/typescript-go/pkg/parser"
	"github.com/frida/typescript-go/pkg/scanner"
	"github.com/frida/typescript-go/pkg/testutil/fixtures"
	"github.com/frida/typescript-go/pkg/tspath"
	"github.com/frida/typescript-go/pkg/vfs/osvfs"
)

func BenchmarkBind(b *testing.B) {
	for _, f := range fixtures.BenchFixtures {
		b.Run(f.Name(), func(b *testing.B) {
			f.SkipIfNotExist(b)

			fileName := tspath.GetNormalizedAbsolutePath(f.Path(), "/")
			path := tspath.ToPath(fileName, "/", osvfs.FS().UseCaseSensitiveFileNames())
			sourceText := f.ReadFile(b)

			sourceFiles := make([]*ast.SourceFile, b.N)
			for i := range b.N {
				sourceFiles[i] = parser.ParseSourceFile(fileName, path, sourceText, core.ScriptTargetESNext, scanner.JSDocParsingModeParseAll)
			}

			compilerOptions := &core.CompilerOptions{Target: core.ScriptTargetESNext, Module: core.ModuleKindNodeNext}
			sourceAffecting := compilerOptions.SourceFileAffecting()

			// The above parses do a lot of work; ensure GC is finished before we start collecting performance data.
			// GC must be called twice to allow things to settle.
			runtime.GC()
			runtime.GC()

			b.ResetTimer()
			for i := range b.N {
				BindSourceFile(sourceFiles[i], sourceAffecting)
			}
		})
	}
}

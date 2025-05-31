package compiler

import (
	"github.com/frida/typescript-go/pkg/ast"
	"github.com/frida/typescript-go/pkg/core"
	"github.com/frida/typescript-go/pkg/parser"
	"github.com/frida/typescript-go/pkg/scanner"
	"github.com/frida/typescript-go/pkg/tspath"
	"github.com/frida/typescript-go/pkg/vfs"
	"github.com/frida/typescript-go/pkg/vfs/cachedvfs"
)

type CompilerHost interface {
	FS() vfs.FS
	DefaultLibraryPath() string
	GetCurrentDirectory() string
	NewLine() string
	Trace(msg string)
	GetSourceFile(fileName string, path tspath.Path, languageVersion core.ScriptTarget) *ast.SourceFile
}

type FileInfo struct {
	Name string
	Size int64
}

var _ CompilerHost = (*compilerHost)(nil)

type compilerHost struct {
	options            *core.CompilerOptions
	currentDirectory   string
	fs                 vfs.FS
	defaultLibraryPath string
}

func NewCachedFSCompilerHost(options *core.CompilerOptions, currentDirectory string, fs vfs.FS, defaultLibraryPath string) CompilerHost {
	return NewCompilerHost(options, currentDirectory, cachedvfs.From(fs), defaultLibraryPath)
}

func NewCompilerHost(options *core.CompilerOptions, currentDirectory string, fs vfs.FS, defaultLibraryPath string) CompilerHost {
	h := &compilerHost{}
	h.options = options
	h.currentDirectory = currentDirectory
	h.fs = fs
	h.defaultLibraryPath = defaultLibraryPath
	return h
}

func (h *compilerHost) FS() vfs.FS {
	return h.fs
}

func (h *compilerHost) DefaultLibraryPath() string {
	return h.defaultLibraryPath
}

func (h *compilerHost) SetOptions(options *core.CompilerOptions) {
	h.options = options
}

func (h *compilerHost) GetCurrentDirectory() string {
	return h.currentDirectory
}

func (h *compilerHost) NewLine() string {
	if h.options == nil {
		return "\n"
	}
	return h.options.NewLine.GetNewLineCharacter()
}

func (h *compilerHost) Trace(msg string) {
	//!!! TODO: implement
}

func (h *compilerHost) GetSourceFile(fileName string, path tspath.Path, languageVersion core.ScriptTarget) *ast.SourceFile {
	text, _ := h.FS().ReadFile(fileName)
	if tspath.FileExtensionIs(fileName, tspath.ExtensionJson) {
		return parser.ParseJSONText(fileName, path, text)
	}
	return parser.ParseSourceFile(fileName, path, text, languageVersion, scanner.JSDocParsingModeParseForTypeErrors)
}

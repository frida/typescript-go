package project

import (
	"context"

	"github.com/frida/typescript-go/pkg/lsp/lsproto"
	"github.com/frida/typescript-go/pkg/vfs"
)

type WatcherHandle string

type Client interface {
	WatchFiles(ctx context.Context, watchers []*lsproto.FileSystemWatcher) (WatcherHandle, error)
	UnwatchFiles(ctx context.Context, handle WatcherHandle) error
	RefreshDiagnostics(ctx context.Context) error
}

type ServiceHost interface {
	FS() vfs.FS
	DefaultLibraryPath() string
	TypingsLocation() string
	GetCurrentDirectory() string
	NewLine() string

	Client() Client
}

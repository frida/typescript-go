package transformers

import (
	"github.com/frida/typescript-go/pkg/ast"
	"github.com/frida/typescript-go/pkg/printer"
)

type modifierVisitor struct {
	Transformer
	AllowedModifiers ast.ModifierFlags
}

func (v *modifierVisitor) visit(node *ast.Node) *ast.Node {
	flags := ast.ModifierToFlag(node.Kind)
	if flags != ast.ModifierFlagsNone && flags&v.AllowedModifiers == 0 {
		return nil
	}
	return node
}

func extractModifiers(emitContext *printer.EmitContext, modifiers *ast.ModifierList, allowed ast.ModifierFlags) *ast.ModifierList {
	if modifiers == nil {
		return nil
	}
	tx := modifierVisitor{AllowedModifiers: allowed}
	tx.NewTransformer(tx.visit, emitContext)
	return tx.visitor.VisitModifiers(modifiers)
}

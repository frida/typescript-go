//// [tests/cases/compiler/declarationEmitInterfaceWithNonEntityNameExpressionHeritage.ts] ////

//// [declarationEmitInterfaceWithNonEntityNameExpressionHeritage.ts]
class A { }
interface Class extends (typeof A) { }

//// [declarationEmitInterfaceWithNonEntityNameExpressionHeritage.js]
class A {
}


//// [declarationEmitInterfaceWithNonEntityNameExpressionHeritage.d.ts]
declare class A {
}
interface Class {
}

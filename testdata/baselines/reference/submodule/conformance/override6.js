//// [tests/cases/conformance/override/override6.ts] ////

//// [override6.ts]
class B {
    public baz: number = 1;
    constructor(public foo: string, public bar: number) {

    }
}

class D extends B {
    public bar: number = 1
    constructor(public foo: string, public baz: number) {
        super(foo, 42)
    }
}


//// [override6.js]
class B {
    foo;
    bar;
    baz = 1;
    constructor(foo, bar) {
        this.foo = foo;
        this.bar = bar;
    }
}
class D extends B {
    foo;
    baz;
    bar = 1;
    constructor(foo, baz) {
        super(foo, 42);
        this.foo = foo;
        this.baz = baz;
    }
}


//// [override6.d.ts]
declare class B {
    foo: string;
    bar: number;
    baz: number;
    constructor(foo: string, bar: number);
}
declare class D extends B {
    foo: string;
    baz: number;
    bar: number;
    constructor(foo: string, baz: number);
}

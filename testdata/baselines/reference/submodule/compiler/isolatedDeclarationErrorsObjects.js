//// [tests/cases/compiler/isolatedDeclarationErrorsObjects.ts] ////

//// [isolatedDeclarationErrorsObjects.ts]
export let o = {
    a: 1,
    b: ""
}

export let oBad = {
    a: Math.random(),
}
export const V = 1;
export let oBad2 = {
    a: {
        b: Math.random(),
    },
    c: {
        d: 1,
        e: V,
    }
}

export let oWithMethods = {
    method() { },
    okMethod(): void { },
    a: 1,
    bad() { },
    e: V,
}
export let oWithMethodsNested = {
    foo: {
        method() { },
        a: 1,
        okMethod(): void { },
        bad() { }
    }
}



export let oWithAccessor = {
    get singleGetterBad() { return 0 },
    set singleSetterBad(value) { },

    get getSetBad() { return 0 },
    set getSetBad(value) { },

    get getSetOk(): number { return 0 },
    set getSetOk(value) { },

    get getSetOk2() { return 0 },
    set getSetOk2(value: number) { },
    
    get getSetOk3(): number { return 0 },
    set getSetOk3(value: number) { },
}

function prop<T>(v: T): T { return v }

const s: unique symbol = Symbol();
const str: string = "";
enum E {
    V = 10,
}
export const oWithComputedProperties = {
    [1]: 1,
    [1 + 3]: 1,
    [prop(2)]: 2,
    [s]: 1,
    [E.V]: 1,
    [str]: 0,
}

const part = { a: 1 };

export const oWithSpread = {
    b: 1,
    ...part,
    c: 1,
    part,
}


export const oWithSpread2 = {
    b: 1,
    nested: {
        ...part,
    },
    c: 1,
}


//// [isolatedDeclarationErrorsObjects.js]
export let o = {
    a: 1,
    b: ""
};
export let oBad = {
    a: Math.random(),
};
export const V = 1;
export let oBad2 = {
    a: {
        b: Math.random(),
    },
    c: {
        d: 1,
        e: V,
    }
};
export let oWithMethods = {
    method() { },
    okMethod() { },
    a: 1,
    bad() { },
    e: V,
};
export let oWithMethodsNested = {
    foo: {
        method() { },
        a: 1,
        okMethod() { },
        bad() { }
    }
};
export let oWithAccessor = {
    get singleGetterBad() { return 0; },
    set singleSetterBad(value) { },
    get getSetBad() { return 0; },
    set getSetBad(value) { },
    get getSetOk() { return 0; },
    set getSetOk(value) { },
    get getSetOk2() { return 0; },
    set getSetOk2(value) { },
    get getSetOk3() { return 0; },
    set getSetOk3(value) { },
};
function prop(v) { return v; }
const s = Symbol();
const str = "";
var E;
(function (E) {
    E[E["V"] = 10] = "V";
})(E || (E = {}));
export const oWithComputedProperties = {
    [1]: 1,
    [1 + 3]: 1,
    [prop(2)]: 2,
    [s]: 1,
    [E.V]: 1,
    [str]: 0,
};
const part = { a: 1 };
export const oWithSpread = {
    b: 1,
    ...part,
    c: 1,
    part,
};
export const oWithSpread2 = {
    b: 1,
    nested: {
        ...part,
    },
    c: 1,
};


//// [isolatedDeclarationErrorsObjects.d.ts]
export declare let o: {
    a: number;
    b: string;
};
export declare let oBad: {
    a: number;
};
export declare const V = 1;
export declare let oBad2: {
    a: {
        b: number;
    };
    c: {
        d: number;
        e: number;
    };
};
export declare let oWithMethods: {
    method(): void;
    okMethod(): void;
    a: number;
    bad(): void;
    e: number;
};
export declare let oWithMethodsNested: {
    foo: {
        method(): void;
        a: number;
        okMethod(): void;
        bad(): void;
    };
};
export declare let oWithAccessor: {
    readonly singleGetterBad: number;
    singleSetterBad: any;
    getSetBad: number;
    getSetOk: number;
    getSetOk2: number;
    getSetOk3: number;
};
declare const s: unique symbol;
export declare const oWithComputedProperties: {
    [x: string]: number;
    [x: number]: number;
    1: number;
    2: number;
    [s]: number;
    10: number;
};
export declare const oWithSpread: {
    a: number;
    b: number;
    c: number;
    part: {
        a: number;
    };
};
export declare const oWithSpread2: {
    b: number;
    nested: {
        a: number;
    };
    c: number;
};
export {};

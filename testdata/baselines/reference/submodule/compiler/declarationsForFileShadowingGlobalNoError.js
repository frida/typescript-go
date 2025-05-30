//// [tests/cases/compiler/declarationsForFileShadowingGlobalNoError.ts] ////

//// [dom.ts]
export type DOMNode = Node;
//// [custom.ts]
export type Node = {};
//// [index.ts]
import { Node } from './custom'
import { DOMNode } from './dom'

type Constructor = new (...args: any[]) => any

export const mixin = (Base: Constructor) => {
  return class extends Base {
    get(domNode: DOMNode) {}
  }
}

//// [dom.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//// [custom.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//// [index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mixin = void 0;
const mixin = (Base) => {
    return class extends Base {
        get(domNode) { }
    };
};
exports.mixin = mixin;


//// [dom.d.ts]
export type DOMNode = Node;
//// [custom.d.ts]
export type Node = {};
//// [index.d.ts]
type Constructor = new (...args: any[]) => any;
export declare const mixin: (Base: Constructor) => {
    new (...args: any[]): {
        [x: string]: any;
        get(domNode: globalThis.Node): void;
    };
};
export {};

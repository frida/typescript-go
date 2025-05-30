//// [tests/cases/compiler/collisionArgumentsFunction.ts] ////

//// [collisionArgumentsFunction.ts]
// Functions
function f1(arguments: number, ...restParameters) { //arguments is error
    var arguments = 10; // no error
}
function f12(i: number, ...arguments) { //arguments is error
    var arguments: any[]; // no error
}
function f1NoError(arguments: number) { // no error
    var arguments = 10; // no error
}

declare function f2(i: number, ...arguments); // no error - no code gen
declare function f21(arguments: number, ...rest); // no error - no code gen
declare function f2NoError(arguments: number); // no error

function f3(...restParameters) {
    var arguments = 10; // no error
}
function f3NoError() {
    var arguments = 10; // no error
}

function f4(arguments: number, ...rest); // no codegen no error
function f4(arguments: string, ...rest); // no codegen no error
function f4(arguments: any, ...rest) { // error
    var arguments: any; // No error
}
function f42(i: number, ...arguments); // no codegen no error
function f42(i: string, ...arguments); // no codegen no error
function f42(i: any, ...arguments) { // error
    var arguments: any[]; // No error
}
function f4NoError(arguments: number); // no error
function f4NoError(arguments: string); // no error
function f4NoError(arguments: any) { // no error
    var arguments: any; // No error
}

declare function f5(arguments: number, ...rest); // no codegen no error
declare function f5(arguments: string, ...rest); // no codegen no error
declare function f52(i: number, ...arguments); // no codegen no error
declare function f52(i: string, ...arguments); // no codegen no error
declare function f6(arguments: number); // no codegen no error
declare function f6(arguments: string); // no codegen no error

//// [collisionArgumentsFunction.js]
// Functions
function f1(arguments, ...restParameters) {
    var arguments = 10; // no error
}
function f12(i, ...arguments) {
    var arguments; // no error
}
function f1NoError(arguments) {
    var arguments = 10; // no error
}
function f3(...restParameters) {
    var arguments = 10; // no error
}
function f3NoError() {
    var arguments = 10; // no error
}
function f4(arguments, ...rest) {
    var arguments; // No error
}
function f42(i, ...arguments) {
    var arguments; // No error
}
function f4NoError(arguments) {
    var arguments; // No error
}

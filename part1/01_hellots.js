var a = "Hello, World!";
var b = 10;
var c = true;
// 不合理赋值，类型不一致
// a = 1;
// b = "Hello, World!";
// c = 0
function demo(a, b) {
    return a + b;
}
demo(1, 2); // 3
// demo("1", 2); // Error: 类型“string”的参数不能赋给类型“number”的参数。
// demo(1,2,3) // 参数只能是固定的两个，多余的会报错

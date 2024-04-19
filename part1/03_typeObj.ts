let a: object;
a = {}
a = function () { }
let b: { name: string, age?: number }; // ?可选属性
b = { name: "王东", age: 25 }

// [key: string]: any 允许任意属性, 这种方式代表后面可以任意写其他对象属性
let c: { name: string, [key: string]: any }
c = { name: "张三", age: 20, address: "北京" }


// 设置 函数类型的声明
let d: (a: string, b: string) => string

d = function (a: string, b: string): string {
    console.log(a + b)
    return a + b
}

// 数组的类型声明；
// 1、 string:[]  2、 Array<number>
let arr: number[] = [1, 2, 3]
let e: Array<string> = ["a", "b", "c"];

// 元组类型
let f: [string, number];

//  枚举
enum Gender {
    male, // 默认从0开始
    female,
}

let i: { name: string, gender: Gender }
i = { name: "张三", gender: Gender.male }
// | 或
let j: string | number;
// & 表示同事
let k: { name: string } & { age: number };

// 别名
type myType = 1 | 2 | 3 |4;
let l:myType = 1;
let ll: myType = 2;
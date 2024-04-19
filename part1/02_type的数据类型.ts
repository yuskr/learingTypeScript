// 1. string 、 number 、 boolean 、 null 、 undefined 、 bigint 、 symbol 、 object(Array 、 Function 、 Date...等)
// 2. 六个新类型： void 、 never 、 unknown 、 any 、 enum（枚举） 、 tuple（元组）
// 3. ⾃定义类型： type 、 interface

// any是放弃类型推断，可以赋予不同的类型的值，
// unknown是类型安全的any，不能赋值给其他类型， 
// never是永远不会返回值的类型 
// void是没有返回值的类型 

// any类型
let a: any = 1;
a = "hello";
a = true;
a = null;
a = undefined;

let aa: string = 'aa';

// unknown类型
let b: unknown;
// b = a;
b = aa;
console.log(b);

// void 用于函数的返回值，返回undefined
function sayHello(): void {
    console.log("hello");
}

// never 用于函数永远不会返回的情况，例如抛出异常;
function error(): never {
    throw new Error("error");
}

// 字面量类型
let c: "hello" = "hello";

// 联合类型
let d: string | number = "hello";
d = 1;

// 类型断言 
let e: any = 1;
let f: string = <string>e;

// 类型别名
type Name = string;
let g: Name = "hello";

// 枚举
enum Color { Red, Green, Blue } // { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
let color: Color = Color.Red;
console.log("color", color, Color);


// 元组 固定长度、固定类型的数组
let tuple: [string, number] = ["hello", 1];
console.log("tuple", tuple)

// 自定义类型
type ColorType = "red" | "green" | "blue";

type Phone = {
    name: string;
    brand: string;
    price: number;
    color: ColorType;
    // color: Color; // 枚举类型
}

let xiaomi: Phone = { name: "xiaomi", brand: "mi", price: 2000, color: "green" }
console.log(xiaomi);



// 接口 用于限制类（对象）的属性和方案
interface Person {
    name: string;
    age: number;
    sayHello(): void;
}

let person: Person = {
    name: "Tom",
    age: 20,
    sayHello() {
        console.log("hello, my name is " + this.name);
    }
}

class Student implements Person {
    readonly name: string;  // 只读属性
    public alias: string; // 公共属性  可以在类外访问和修改
    protected leved: number; // 受保护属性  只能在类和子类里面访问和修改
    private skill: string;  // 私有属性 只能在类里面改
    age: number;

    constructor(name: string, age: number, leved: number, skill: string) {
        this.name = name;
        this.age = age;
        this.leved = leved;
        this.skill = skill;
    }

    sayHello(): void {
        console.log("hello, my name is " + this.name);
    }

    changeSkill(newSkill: string) {
        this.skill = newSkill;
    }
}

let twl = new Student("唐舞麟", 21, 9, "金龙霸体");
twl.sayHello();
twl.changeSkill("鬼影迷踪");

console.log(twl);
// twl.name = "老铁666" //无法为“name”赋值，因为它是只读属性
// twl.leved = 10; // 无法为“leved”赋值，因为它是受保护的属性
// twl.skill = "吃鸡" // 无法为“skill”赋值，因为它是私有属性


// 抽象类 不能实例化，只能被继承
abstract class Father {
    constructor(readonly fatherName: string) {
        this.fatherName = fatherName;
    }
}

interface ISon {
    name: string;
    skills(): void;
}

// 子类继承父类 并且实现接口（简单来说就是限制）
class Son extends Father implements ISon {
    readonly name: string;
    constructor(name: string, fatherName: string) {
        super(fatherName);
        this.name = name;
    }
    skills() {
        console.log("召唤海神老爸");
    }
}

let dltwl = new Son("唐舞麟", "唐三");
console.log(dltwl);


// 泛型 定义函数和类时 无法确定其中要使用的具体类型（返回值、参数、属性的类型不确定）
// <T> 就是泛型 不指名类型，TS会自定推断出来; 还可以指定多个泛型
function test<T, K>(a: T, b: K): T {
    return a
}

console.log(test(1, 2));
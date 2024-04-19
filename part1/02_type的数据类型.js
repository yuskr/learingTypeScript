// 1. string 、 number 、 boolean 、 null 、 undefined 、 bigint 、 symbol 、 object(Array 、 Function 、 Date...等)
// 2. 六个新类型： void 、 never 、 unknown 、 any 、 enum（枚举） 、 tuple（元组）
// 3. ⾃定义类型： type 、 interface
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// any是放弃类型推断，可以赋予不同的类型的值，
// unknown是类型安全的any，不能赋值给其他类型， 
// never是永远不会返回值的类型 
// void是没有返回值的类型 
// any类型
var a = 1;
a = "hello";
a = true;
a = null;
a = undefined;
var aa = 'aa';
// unknown类型
var b;
// b = a;
b = aa;
console.log(b);
// void 用于函数的返回值，返回undefined
function sayHello() {
    console.log("hello");
}
// never 用于函数永远不会返回的情况，例如抛出异常;
function error() {
    throw new Error("error");
}
// 字面量类型
var c = "hello";
// 联合类型
var d = "hello";
d = 1;
// 类型断言 
var e = 1;
var f = e;
var g = "hello";
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); // { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
var color = Color.Red;
console.log("color", color, Color);
// 元组 固定长度、固定类型的数组
var tuple = ["hello", 1];
console.log("tuple", tuple);
var xiaomi = { name: "xiaomi", brand: "mi", price: 2000, color: "green" };
console.log(xiaomi);
var person = {
    name: "Tom",
    age: 20,
    sayHello: function () {
        console.log("hello, my name is " + this.name);
    }
};
var Student = /** @class */ (function () {
    function Student(name, age, leved, skill) {
        this.name = name;
        this.age = age;
        this.leved = leved;
        this.skill = skill;
    }
    Student.prototype.sayHello = function () {
        console.log("hello, my name is " + this.name);
    };
    Student.prototype.changeSkill = function (newSkill) {
        this.skill = newSkill;
    };
    return Student;
}());
var twl = new Student("唐舞麟", 21, 9, "金龙霸体");
twl.sayHello();
twl.changeSkill("鬼影迷踪");
console.log(twl);
// twl.name = "老铁666" //无法为“name”赋值，因为它是只读属性
// twl.leved = 10; // 无法为“leved”赋值，因为它是受保护的属性
// twl.skill = "吃鸡" // 无法为“skill”赋值，因为它是私有属性
// 抽象类 不能实例化，只能被继承
var Father = /** @class */ (function () {
    function Father(fatherName) {
        this.fatherName = fatherName;
        this.fatherName = fatherName;
    }
    return Father;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(name, fatherName) {
        var _this = _super.call(this, fatherName) || this;
        _this.name = name;
        return _this;
    }
    Son.prototype.bark = function () {
        console.log("wang wang");
    };
    return Son;
}(Father));
var dltwl = new Son("唐舞麟", "唐三");
console.log(dltwl);

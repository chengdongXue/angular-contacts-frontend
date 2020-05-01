// 类成员属性的取(get)存(set)值器使用方法:
// 类成员都是属于实例成员
class People {
    public _name: string;
    public _age: number;
    constructor(name: string = 'default', age: number = 10){
        this._name = name;
        this._age = age;
    }

    get getName(){
        return this._name;
    }
    set setName(name: string){
        if(name !== 'xuechengdong'){
            throw new Error('你的名字不是xuechengdong');
        }
        this._name = name;
    }

    get getAge(){
        return this._age;
    }
    set setAge(age: number){
        switch (age) {
            case 0:
                throw new Error('年龄不能是0岁');
                break;
            case 25:
                throw new Error('你正值壮年!');
                break;
            default:
                throw new Error('你还是个baby');
                break;
        }
        this._age = age;
    }
}
let p1 = new People('xuechengdong',27);
p1.setName = 'xuedajin';
p1.setAge = 0;

// TS中使用静态(static)成员属性只能通过类名本身去调用
// 不能使用对象实例去调用
class Situation {
    static comfortable: string = 'Yes';
    static embarrass: string = 'No';

    embarrassing: string = 'Your name silpped my mine, it means that you forgotten my name';

    static sayHello() {
        console.log(`please say something to your wife`);
    }
}
// 静态成员只能使用类直接调用
Situation.comfortable;
Situation.embarrass;
Situation.sayHello();
// 实例成员只能通过new 实例方式调用
let situ = new Situation();
situ.embarrassing;

// 函数参数,参数及返回值类型
function animal(ear: string, leg: string): string {
    return 'This is biggest animal over the world';
}
// 可选参数
function insect(width?: number, height?: number, speed: string = '100KM/1-hour'): number {
    return 100;
}
// 默认参数
function monkeySun(description: string = 'Do you answer me when i call you'): void {
}
// 剩余参数
function remainParams(...argus: boolean[]): void {
    argus.forEach((item: boolean) => {
        console.info(item);
    });
}
// 箭头函数
let arrowFun = (x: number, y: number): void => (console.log(x + y));

// for循环
// forEach -> 不支持break
// for in ->会把数组当作对象来遍历
// for of -> 支持break
let arr: Array<string> = ['normal','specific','different']
for (let i = 0; i < arr.length; i++) {
}
arr.forEach((item: string) => {
});
for (let item in arr) {
    // 得到的是数组的索引数据
}
for (let i of arr) {
    // i指代数组的key
    if(i === 'normal') {
        break;
    }
}
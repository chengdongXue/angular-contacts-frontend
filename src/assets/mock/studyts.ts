const num: number = 100;
const str: string = 'but I do not know whether getting the job';
let bool: boolean = true;
bool = false;
let humen: Array<string> = ['women', 'men'];
let random: Array<number> = [10, 20, 30];
let onlyTwoPossible: Array<boolean> = [false, true];
const cityInfo: Array<string> = ['shanghai', 'suzhou'];

// 元组
let mate: [number, string, boolean] = [10, '元组', true];

// 定义接口来限制对象属性
interface presonal {
    name: string;
    education: string;
    age: number;
}

// 使用接口来限制对象属性
let men: presonal = {
    name: '薛成栋',
    education: 'computer technology degree',
    age: 20
}

// 使用接口来限制对象属性
let women: presonal = {
    name: '李冬青',
    education: 'computer technology degree',
    age: 20
}

// 使用any可以随意设值
let notDeterminedType: any = 10;
notDeterminedType = '10';
notDeterminedType = true;
notDeterminedType = [10, 20, 30];

// 给参数设定类型
function add(x: number, y: number): number {
    return x + y;
}
let gettingValue = this.add(10, 20);

//解构赋值
let user: presonal = {
    name: '李冬青',
    education: 'computer technology degree',
    age: 20
};
// 利用对象解构来匹配
let {education, age } = user;

//利用数组解构来匹配，给参数设置默认值
function redeclareAssignment([x = 0, y = 0]): number {
    return x + y;
}
this.redeclareAssignment([10, 20]);

// TS中的素组剩余参数
function sum(...argus: number[]): number {
    let total: number = 0;
    argus.forEach((item) => {
        total += item;
    });
    return total;
}
this.sum(1, 2, 3, 4, 5, 6, 7);

// 数组展开操作符
let array1Extending = [1, 2, 3, 4, 5];
let array2Extending = [6, 7, 8, 9, 10];
let appendToArray = [...array1Extending, ...array2Extending];

// 对象展开操作符
let obj1Extending = {
    objOne: true
};
let obj2Extending = {
    objTwo: false
};
let concatObj = { ...obj2Extending, ...obj2Extending };

// 使用构造函数来模仿ES6中的类
// ES5代码
function animalFun(mouth: string = 'big', nose: string = 'big') {
    this.mouth = mouth;
    this.nose = nose;
}
animal.prototype.face = function (): void { 
    console.log(`${this.mouth}`.concat(this.nose));
}
let dog = new animalFun('biggest', 'biggest');
dog.face();

// 使用ES6中的类
class specificAnimal {
    mouth: string;
    nose: string;
    constructor(mouth: string = 'big', nose: string = 'big') { 
        this.mouth = mouth;
        this.nose = nose;
    }

    sayHello(): void {
        console.log(`${this.mouth}`.concat(this.nose));
    }
}
let cat = new specificAnimal('biggest', 'biggest');
cat.sayHello();

// ES6类的继承
class farther {
    nickname: string;
    nose: string;
    constructor(nickname: string = 'small', nose: string = 'smallest') {
        this.nickname = nickname;
        this.nose = nose;
    }

    head(): void { 
        console.log(`Do you have ${this.nickname} and `.concat(this.nose));
    }
}
class son extends farther {
    constructor(nickname: string = 'small', nose: string = 'smallest') {
        // super就是父类当中的构造函数
        super(nickname,nose);
    }
}
let newSon = new son('biggest','biggest');
// 父类中的方法继承
newSon.head();
// 父类中的属性继承
newSon.nickname;
newSon.nose;

// 类成员的修饰符访问
class computer {
    // private私有修饰符，只能在当前类中使用
    // 不能被子类继承和使用
    // 成员属性被修饰成只读，那么无论在外面和子类和当前类都不能被修改
    private readonly keyboard: string = 'Apple';
    // public 即可在类内部使用，也可以在子类和外部使用
    public readonly mouse: string = 'logic';
    // 受保护protected可以在子类内部被继承使用
    // 但不能在外部使用
    protected readonly screen: string = 'micosoft';

    constructor(public judge: boolean, public turnsout: string) { }
}

class personalComputer extends computer {
    getInfo(): void { 
        this.mouse;
        this.screen;
        // 无法在子类内部访问到父类当中的私有成员属性
    }
}
let personalCom = new personalComputer(true,'Do you ware mask?');
personalCom.mouse;
personalCom.getInfo();
// 子类的构造实例无法访问父类中private和protected的成员属性
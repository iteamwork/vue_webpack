/**
 * 当我们使用箭头函数时，函数体内的this对象，
 * 就是定义时所在的对象，而不是使用时所在的对象。
 */
class Animal {
    constructor(){
        this.type = 'animal'
    }
    says(say){
        setTimeout( () => {
            console.log(this.type + ' says ' + say)
    }, 1000)
}
}
var animal = new Animal()
animal.says('hi')  //animal says hi

//es5
//function(i){
//    return i++;
//}

//(i)=>i+1; //es6

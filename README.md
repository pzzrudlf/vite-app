## JS中的难点

### 1、使用面向对象编程时，new关键字做了什么？
    1.新建了一个Object对象
    2.修改构造函数this的指向，使其指向新建的Object对象，并且执行构造函数
    3.为Object对象添加了一个proto属性，使其指向构造函数的prototype属性
    4.将这个Object对象返回出去

### 2、es6和es5的继承
### 3、js中原型和原型链
    每个函数都有一个prototype属性，被称为显示原型
    每个实例对象都会有一个_proto_属性，其被称为隐式原型
    每一个实例对象的隐式原型_proto_属性指向自身构造函数的显示原型prototype
    每个prototype原型都有一个constructor属性，指向它关联的构造函数

    原型链：
    获取对象属性时，如果对象本身没有这个属性，那就会去他的原型_proto_上去找，如果还查不到，就去找原型的原型，一直找到最顶层（Object。prototype）为止。Object.prototype对象也有proto属性，其属性值为null，链式查找机制叫原型链
### 4、什么是设计模式
    1.工厂模式，去做同样的事情，实现同样的效果，解决多个相似的问题，这时候需要使用工厂模式
    2.发布订阅模式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时，发布消息给订阅者，触发相应的监听回调
    3.单例模式，保证一个类仅有一个实例，并提供一个访问它的全局访问点
### 5、constructor,proto,prototype的三角关系
    构造函数的prototype指向原型对象
    实例对象的proto指向构造函数的prototype所指向原型对象
    原型对象的constructor指向构造函数
### 6、面向过程和面向对象的优缺点
    一、面向过程：面向过程就是分析出实现需求所需要的步骤，通过函数一步一步实现这些步骤，接着一次调用即可。
    优点：性能上它是优于面向对象的，因为类在调用的时候需要实例化，开销过大
    缺点：不易维护、复用、扩展
    用途：单片机、嵌入式开发、Linux/Unix等对性能要求较高的地方

    二、面向对象：将数据和函数绑定到一起(也就是写到一起)，进行封装，这样能够更快速的开发程序，减少了重复代码的重写过程
    优点：易维护，易复用，易扩展，由于面向对象有封装、继承、多态的特性，可以设计出低耦合、高内聚的系统
    缺点：性能比面向过程编程的低

### 7、异步与单线程
### 8、作用域与闭包


https://tp-pay.snssdk.com/cashdesk_pc/result?app_id=800084979034&trade_no=SP2022031716045002855449973252&process_info=IntcInR5cGVcIjpcImNhY2hlXCIsXCJkYXRhXCI6XCJmYjYyMzdkMmNjNmNhNzM2MGI0NzM1MzQ3NDc1NzA5YzYxNzk1ODk4MjUxM2VjZDFhYTVlMTMyZjg5ZDUyNzg5XCJ9Ig
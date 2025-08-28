"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai6_1 = require("./bai6");
const bai7_1 = require("./bai7");
const bai8_1 = require("./bai8");
const bai10_1 = require("./bai10");
const bai11_1 = require("./bai11");
const bai12_1 = require("./bai12");
const bai13_1 = require("./bai13");
const bai14_1 = require("./bai14");
const bai15_1 = require("./bai15");
const bai16_1 = require("./bai16");
const bai17_1 = require("./bai17");
const bai18_1 = require("./bai18");
const bai20_1 = require("./bai20");
const bai21_1 = require("./bai21");
const bai22_1 = require("./bai22");
const bai23_1 = require("./bai23");
const bai24_1 = require("./bai24");
const bai25_1 = require("./bai25");
const bai26_1 = require("./bai26");
const bai27_1 = require("./bai27");
const bai28_1 = require("./bai28");
const bai29_1 = require("./bai29");
const bai30_1 = require("./bai30");
const person = new bai1_1.Person("John Doe", 30);
console.log("Bai1: ");
person.display();
const student = new bai2_1.Student("John Doe", 30, 8);
console.log("Bai2: ");
student.display();
const car = new bai3_1.Car("Toyota", "Corolla", 2020);
console.log("Bai3: ");
car.display();
const rectangle = new bai4_1.Rectangle(10, 5);
console.log("Bai4: ");
console.log(`Area of Rectangle: ${rectangle.getArea()}`);
const bankAccount = new bai5_1.BankAccount(22691861);
console.log("Bai5: ");
console.log(`Initial Balance: ${bankAccount.getBalance()}`);
bankAccount.deposit(500);
console.log(`Balance after deposit: ${bankAccount.getBalance()}`);
bankAccount.withdraw(5000);
console.log(`Balance after withdrawal: ${bankAccount.getBalance()}`);
const book = new bai6_1.Book("Typescript beginer", "Toe Toe", 2024);
console.log("Bai6: ");
book.display();
const user = new bai7_1.User("Nguyen Gia Bao");
console.log("Bai7: ");
user.display();
console.log("Change username to Bao Nguyen");
user.name = "Bao Nguyen";
user.display();
console.log("Bai8: ");
const products = [];
products.push(new bai8_1.Product("Product 1", 50));
products.push(new bai8_1.Product("Product 2", 150));
products.push(new bai8_1.Product("Product 3", 200));
products
    .filter((p) => p.price > 100)
    .forEach((p) => {
    console.log(`Product Name: ${p.name}, Product Price: ${p.price}`);
});
// bai10
console.log("Bai10: ");
const acc = new bai10_1.Account(1, 1000, "Alice");
console.log("Account:", acc);
// bai11
console.log("Bai11: ");
const animal = new bai11_1.AnimalBase("Basey");
animal.sound();
const dog = new bai11_1.Dog("Lucky");
dog.sound();
const cat = new bai11_1.Cat("Miu");
cat.sound();
// bai12
console.log("Bai12: ");
const bird = new bai12_1.Birds("Chim");
bird.fly();
const fish = new bai12_1.Fish("Ca");
fish.swim();
// bai13
console.log("Bai13: ");
const square = new bai13_1.Square(3);
console.log("Square area:", square.area());
const circle = new bai13_1.Circle(3);
console.log("Circle area:", circle.area());
// bai14
console.log("Bai14: ");
const m = new bai14_1.Manager("Bao", "Admin");
m.manageTask();
const d = new bai14_1.Developer("Nam", "TypeScript");
d.code();
console.log("Bai15: ");
const lib = new bai15_1.Library();
lib.addBook(new bai6_1.Book("Clean Code", "Robert C. Martin", 2008));
lib.addUser(new bai7_1.User("Alice"));
console.log("Library books:", lib.getBook());
console.log("Library users:", lib.getUser());
// bai16
console.log("Bai16: ");
const box = new bai16_1.Box(123);
console.log("Box value:", box.value);
box.value = 456;
console.log("Box new value:", box.value);
// bai17
console.log("Bai17: ");
const logger = bai17_1.Logger.getInstance();
logger.log("Hello Logger!");
// bai18
console.log("Bai18: ");
console.log("Add:", bai18_1.MathUtil.add(2, 3));
console.log("Subtract:", bai18_1.MathUtil.subtract(5, 2));
console.log("Multiply:", bai18_1.MathUtil.multiply(4, 6));
console.log("Divide:", bai18_1.MathUtil.divide(10, 2));
// Bai20
console.log("Bai20:");
const carVehicle = new bai20_1.CarVehicle("Toyota", 2022, 1800);
console.log(carVehicle.getInfo());
const bikeVehicle = new bai20_1.BikeVehicle("Yamaha", 2021, "Sport");
console.log(bikeVehicle.getInfo());
// bai21
console.log("Bai21:");
const repo = new bai21_1.Repository();
repo.add(10);
repo.add(20);
console.log("Repository:", repo.getAll());
// bai22
console.log("Bai22:");
const stack = new bai22_1.Stack();
stack.push("a");
stack.push("b");
console.log("Stack peek:", stack.peek());
console.log("Stack pop:", stack.pop());
console.log("Stack empty?", stack.isEmpty());
// bai23
console.log("Bai23:");
const cash = new bai23_1.CashPayment();
cash.pay(100);
const card = new bai23_1.CardPayment("1234-5678");
card.pay(200);
// bai24
console.log("Bai24:");
const fan = new bai24_1.Fan();
fan.turnOn();
const air = new bai24_1.AirConditioner();
air.turnOn();
// bai25
console.log("Bai25:");
bai25_1.ShapeStatic.describe();
// bai26
console.log("Bai26:");
const order = new bai26_1.Order([new bai26_1.Productt("CPU", 300), new bai26_1.Productt("RAM", 150)]);
console.log("Order total:", order.calculateTotalPrice());
// bai27
console.log("Bai27:");
const teacher = new bai27_1.Teacher("An", 40, "Math");
console.log(teacher.introduce());
// bai28
console.log("Bai28:");
const dogProt = new bai28_1.DogProt();
const catProt = new bai28_1.CatProt();
console.log(dogProt.speak());
console.log(catProt.speak());
// bai29
console.log("Bai29:");
const carMove = new bai29_1.CarMove();
carMove.move();
const robot = new bai29_1.Robot();
robot.move();
// bai30
console.log("Bai30:");
const s1 = new bai2_1.Student("Bao", 20, 10);
const t1 = new bai27_1.Teacher("An", 40, "Math");
const school = new bai30_1.School();
school.addStudent(s1);
school.addTeacher(t1);
school.displayInfo();

import { Person } from "./bai1";
import { Student } from "./bai2";
import { Car } from "./bai3";
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";
import { Book } from "./bai6";
import { User } from "./bai7";
import { Product } from "./bai8";
import { Account } from "./bai10";
import { AnimalBase, Dog, Cat } from "./bai11";
import { Birds, Fish } from "./bai12";
import { Square, Circle } from "./bai13";
import { Manager, Developer } from "./bai14";
import { Library } from "./bai15";
import { Box } from "./bai16";
import { Logger } from "./bai17";
import { MathUtil } from "./bai18";
import { CarVehicle, BikeVehicle } from "./bai20";
import { Repository } from "./bai21";
import { Stack } from "./bai22";
import { CashPayment, CardPayment } from "./bai23";
import { Fan, AirConditioner } from "./bai24";
import { ShapeStatic } from "./bai25";
import { Productt, Order } from "./bai26";
import { Teacher } from "./bai27";
import { DogProt, CatProt } from "./bai28";
import { CarMove, Robot } from "./bai29";
import { School } from "./bai30";

const person = new Person("John Doe", 30);
console.log("Bai1: ");
person.display();

const student = new Student("John Doe", 30, 8);
console.log("Bai2: ");
student.display();

const car = new Car("Toyota", "Corolla", 2020);
console.log("Bai3: ");
car.display();

const rectangle = new Rectangle(10, 5);
console.log("Bai4: ");
console.log(`Area of Rectangle: ${rectangle.getArea()}`);

const bankAccount = new BankAccount(22691861);
console.log("Bai5: ");
console.log(`Initial Balance: ${bankAccount.getBalance()}`);
bankAccount.deposit(500);
console.log(`Balance after deposit: ${bankAccount.getBalance()}`);
bankAccount.withdraw(5000);
console.log(`Balance after withdrawal: ${bankAccount.getBalance()}`);

const book = new Book("Typescript beginer", "Toe Toe", 2024);
console.log("Bai6: ");
book.display();

const user = new User("Nguyen Gia Bao");
console.log("Bai7: ");
user.display();
console.log("Change username to Bao Nguyen");
user.name = "Bao Nguyen";
user.display();

console.log("Bai8: ");
const products: Product[] = [];
products.push(new Product("Product 1", 50));
products.push(new Product("Product 2", 150));
products.push(new Product("Product 3", 200));
products
  .filter((p) => p.price > 100)
  .forEach((p) => {
    console.log(`Product Name: ${p.name}, Product Price: ${p.price}`);
  });

// bai10
console.log("Bai10: ");
const acc = new Account(1, 1000, "Alice");
console.log("Account:", acc);

// bai11
console.log("Bai11: ");
const animal = new AnimalBase("Basey");
animal.sound();
const dog = new Dog("Lucky");
dog.sound();
const cat = new Cat("Miu");
cat.sound();

// bai12
console.log("Bai12: ");
const bird = new Birds("Chim");
bird.fly();
const fish = new Fish("Ca");
fish.swim();

// bai13
console.log("Bai13: ");
const square = new Square(3);
console.log("Square area:", square.area());
const circle = new Circle(3);
console.log("Circle area:", circle.area());

// bai14
console.log("Bai14: ");
const m = new Manager("Bao", "Admin");
m.manageTask();
const d = new Developer("Nam", "TypeScript");
d.code();

console.log("Bai15: ");
const lib = new Library();
lib.addBook(new Book("Clean Code", "Robert C. Martin", 2008));
lib.addUser(new User("Alice"));
console.log("Library books:", lib.getBook());
console.log("Library users:", lib.getUser());

// bai16
console.log("Bai16: ");
const box = new Box<number>(123);
console.log("Box value:", box.value);
box.value = 456;
console.log("Box new value:", box.value);

// bai17
console.log("Bai17: ");
const logger = Logger.getInstance();
logger.log("Hello Logger!");

// bai18
console.log("Bai18: ");
console.log("Add:", MathUtil.add(2, 3));
console.log("Subtract:", MathUtil.subtract(5, 2));
console.log("Multiply:", MathUtil.multiply(4, 6));
console.log("Divide:", MathUtil.divide(10, 2));

// Bai20
console.log("Bai20:");
const carVehicle = new CarVehicle("Toyota", 2022, 1800);
console.log(carVehicle.getInfo());
const bikeVehicle = new BikeVehicle("Yamaha", 2021, "Sport");
console.log(bikeVehicle.getInfo());

// bai21
console.log("Bai21:");
const repo = new Repository<number>();
repo.add(10);
repo.add(20);
console.log("Repository:", repo.getAll());

// bai22
console.log("Bai22:");
const stack = new Stack<string>();
stack.push("a");
stack.push("b");
console.log("Stack peek:", stack.peek());
console.log("Stack pop:", stack.pop());
console.log("Stack empty?", stack.isEmpty());

// bai23
console.log("Bai23:");
const cash = new CashPayment();
cash.pay(100);
const card = new CardPayment("1234-5678");
card.pay(200);

// bai24
console.log("Bai24:");
const fan = new Fan();
fan.turnOn();
const air = new AirConditioner();
air.turnOn();

// bai25
console.log("Bai25:");
ShapeStatic.describe();

// bai26
console.log("Bai26:");
const order = new Order([new Productt("CPU", 300), new Productt("RAM", 150)]);
console.log("Order total:", order.calculateTotalPrice());

// bai27
console.log("Bai27:");
const teacher = new Teacher("An", 40, "Math");
console.log(teacher.introduce());

// bai28
console.log("Bai28:");
const dogProt = new DogProt();
const catProt = new CatProt();
console.log(dogProt.speak());
console.log(catProt.speak());

// bai29
console.log("Bai29:");
const carMove = new CarMove();
carMove.move();
const robot = new Robot();
robot.move();

// bai30
console.log("Bai30:");
const s1 = new Student("Bao", 20, 10);
const t1 = new Teacher("An", 40, "Math");
const school = new School();
school.addStudent(s1);
school.addTeacher(t1);
school.displayInfo();

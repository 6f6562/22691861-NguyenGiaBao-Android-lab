import { Person } from "./bai1";
import { Student } from "./bai2";
import { Car } from "./bai3";
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";
import { Book } from "./bai6";
import { User } from "./bai7";
import { Product } from "./bai8";

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
products.filter(p => p.price > 100).forEach(p =>{
    console.log(`Product Name: ${p.name}, Product Price: ${p.price}`);
})

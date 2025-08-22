export class Book{
    constructor(private title: string,private author: string,private year: number){}
    display(){
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
}
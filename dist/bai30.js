"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class School {
    constructor() {
        this.students = [];
        this.teachers = [];
    }
    addStudent(s) {
        this.students.push(s);
    }
    addTeacher(t) {
        this.teachers.push(t);
    }
    displayInfo() {
        console.log("=== Teachers ===");
        this.teachers.forEach((t) => console.log(t.introduce()));
        console.log("=== Students ===");
        this.students.forEach((s) => console.log(s.display()));
    }
}

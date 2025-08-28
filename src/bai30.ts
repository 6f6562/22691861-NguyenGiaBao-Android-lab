import { Student } from "./bai2";
import { Teacher } from "./bai27";

export class School {
  private students: Student[] = [];
  private teachers: Teacher[] = [];

  addStudent(s: Student): void {
    this.students.push(s);
  }
  addTeacher(t: Teacher): void {
    this.teachers.push(t);
  }
  displayInfo(): void {
    console.log("=== Teachers ===");
    this.teachers.forEach((t) => console.log(t.introduce()));
    console.log("=== Students ===");
    this.students.forEach((s) => console.log(s.display()));
  }
}

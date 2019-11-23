class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(student){
        const studentEmailPresent = this.students.filter((n) => n.email === student.email);
        if(studentEmailPresent.length === 0) {
            this.students.push(student);
            console.log(`Registered ${student.email} to the Bootcamp`);
        }else{
            console.log(`${student.email} is already registered to the Bootcamp`)
        }
        return this.students;
    }
}

var bootcamp1 = new Bootcamp('React', 1);
var student1 = new Student('jake', 'Jakey@gmail.com', 'onpa');
var student2 = new Student('Miranda', 'Mirame@gmail.com', 'onpa');
bootcamp1.registerStudent(student1);
bootcamp1.registerStudent(student2);
bootcamp1.registerStudent(student2);

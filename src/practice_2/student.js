import Person from './person'

class Student extends Person {
    constructor(name, age, CLASS){
        super(name, age);
        this.CLASS = CLASS;
    }

    introduce(){
        return `I am a Student. I am at Class ${this.CLASS}.`
    }
}

export default Student;
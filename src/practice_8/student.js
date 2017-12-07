import Person from "./person";

class Student extends Person {
    constructor(id, name, age, klass){
        super(id, name, age);
        this.klass = klass;
    }

    introduce(){
        let str = super.introduce();

        if (this.klass.isLeader(this)) {
            str += ` I am a Student. I am Leader of ${this.klass.getDisplayName()}.`
        }else{
            str += ` I am a Student. I am at ${this.klass.getDisplayName()}.`;
        }
        return str;
    }
}

export default Student;
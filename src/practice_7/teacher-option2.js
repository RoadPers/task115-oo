import Person from './person'

class Teacher extends Person {
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }

    introduce(){
        let str = super.introduce();
        if(this.klass == null) {
            str += ' I am a Teacher. I teach No Class.'
        }else{
            str += ` I am a Teacher. I teach Class ${this.klass.number}.`;
        }
        return str;
    }

    introduceWith(Student){
        let str = super.introduce();
        let ifSameClass = Student.klass.number === this.klass.number;
        if (ifSameClass) {
            str += ` I am a Teacher. I teach Jerry.`
        }else{
            str += ` I am a Teacher. I don't teach Jerry.`
        }
        return str;
    }
}

export default Teacher;




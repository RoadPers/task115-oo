import Person from './person'

class Teacher extends Person {
    constructor(id, name, age, klasses){
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce(){
        let str = super.introduce();
        if(this.klasses == undefined || this.klasses.length == 0) {
            str += ' I am a Teacher. I teach No Class.'
        }else{
            let classes = this.klasses.map( (x) => x.number )
            str += ` I am a Teacher. I teach Class ${classes.join(', ')}.`;
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



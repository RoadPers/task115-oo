import Person from './person'

class Teacher extends Person {
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }

    introduce(){
        let str = super.introduce();
        if(this.klass == undefined) {
            str += ' I am a Teacher. I teach No Class.'
        }else{
            str += ` I am a Teacher. I teach Class ${this.klass}.`;
        }
        return str;
    }
}

export default Teacher;


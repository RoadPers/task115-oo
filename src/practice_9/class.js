class Class {
    constructor(number){
        this.number = number;
    }

    getDisplayName(){
        return 'Class ' + this.number;
    }

    assignLeader(Student){
        if (Student.klass === this) {
            this.leader = Student;
        }else{
            console.log('It is not one of us.')
        }
    }

    isLeader(Student){
        if (this.leader === Student) {
            return true;
        }else{
            return false
        }
    }

    appendMember(Student){
        Student.klass = this;
    }
}

export default Class;

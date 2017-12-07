class Class {
    constructor(number){
        this.number = number;
    }

    getDisplayName(){
        return 'Class ' + this.number;
    }

    assignLeader(Student){
        if(this.teacher2){
            console.log("I am Tom. I know Jerry become Leader of Class 2.");
        }
        if (Student.klass === this) {
            this.leader = Student;
        }else{
            console.log('It is not one of us.')
        }
    }

    isLeader(Student){
        if (this.leader === Student) {
            return true;
        }
        return false;
    }


    appendMember(Student){
        Student.klass = this;
        if(this.teacher1){
            console.log(`I am ${this.teacher1.name}. I know ${Student.name} has joined Class ${Student.klass.number}.`);
        }
    }

    isIn(Student){
        return Student.klass === this;
    }

    registerJoinListener(teacher){
        this.teacher1 =  teacher;
    }

    registerAssignLeaderListener(teacher){
        this.teacher2 = teacher;
    }
}

export default Class;

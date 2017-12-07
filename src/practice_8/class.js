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
        }
    }

    isLeader(Student){
        if (this.leader === Student) {
            return true;
        }else{
            return false
        }
    }
}

export default Class;

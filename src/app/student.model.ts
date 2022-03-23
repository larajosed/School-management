export class Student {
    idStudent?: number;
    Course?: string;
    email?: string;
    Full_Name?: string;

    constructor(idStudent?: number, Course?: string, email?: string, Full_Name?: string) {
        this.idStudent = idStudent;
        this.Course = Course;
        this.email = email;
        this.Full_Name = Full_Name;
    }
}


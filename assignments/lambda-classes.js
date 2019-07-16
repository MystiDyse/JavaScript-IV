// CODE here for your Lambda Classes
class Person {
    constructor(baseAttributes) {
        this.name = baseAttributes.name;
        this. age = baseAttributes.age;
        this.location = baseAttributes.location;
    };
    speak () {
        `Hello my name is ${this.name}, I am from ${this.location}`
    };
}
class Instructor extends Person {
    constructor (instructorAttributes) {
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    };
    demo (subject) {
        `Today we are learning about ${subject}'`
    };
    grade (student, subject) {
    `${student.name} receives a perfect score on ${subject}`
    };
}
class Student extends Person {
    constructor (studentAttributes) {
        this.previousBackground = previousBackground.studentAttributes;
        this.className = className.studentAttributes;
        this.favSubjects = favSubjects.studentAttributes;
    }
    listsSubjects () {
        return `${this.favSubjects}`;
    };
    PRAssignment () {
        `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge (name, subject) {
        `${name} has begun sprint challenge on ${subject}`
    }
}
class TeamLead extends Instructor {
    constructor(tlAttributes) {
        this.gradClassName = tlAttributes.gradClassName;
        this.favInstructor = tlAttributes.favInstructor;
    }
    standUp (channel) {
        `${name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode (name, studentName, subject) {
        `${name} debugs ${studentName}'s code on ${subject}`
    }
}

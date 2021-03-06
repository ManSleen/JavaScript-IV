// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
  assignGrade(student) {
    student.grade += Math.floor(Math.random() * 100 - 50);

    if (student.grade > 70) {
      return `${this.name} has allowed ${student.name} to graduate! Yay!`;
    } else {
      return `${this.name} has given ${student.name} a grade of ${
        student.grade
      }`;
    }
  }
}

class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
    this.grade = studentAttributes.grade;
  }
  listsSubjects() {
    return `${this.favSubjects.forEach(x => console.log("-", x))}`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const chris = new ProjectManager({
  name: "Chris",
  age: "28",
  location: "Wizardtown",
  gradClassName: "WEB19"
});

const winnie = new Student({
  name: "Winnie Song",
  location: "FLushing",
  age: 22,
  previousBackground: `MUA`,
  className: `web20`,
  favSubjects: ["CSS", "HTML", "LESS"],
  grade: 80
});

const mike = new Student({
  name: "Mike VanSleen",
  age: 29,
  location: "Denver",
  previousBackground: "A lot of things",
  className: "web20",
  favSubjects: ["UI/UX", "Javascript", "Graphic Design"],
  grade: 85
});

const devin = new Student({
  name: "Devin",
  age: 21,
  location: "Texas",
  previousBackground: "Slight HTML",
  className: "web20",
  favSubjects: ["Music", "Javascript", "Chemisty"],
  grade: 92
});

const sam = new Student({
  name: "Sam",
  age: 27,
  location: "Oregon",
  previousBackground: "Some CSS/HTML",
  className: "web20",
  favSubjects: ["Physics", "Math", "JavaScript"],
  grade: 95
});

console.log("----------------------------------");

console.log(chris.standUp("web20_reilly"));
console.log(chris.name);

console.log(chris.assignGrade(mike));

console.log(chris.assignGrade(winnie));

console.log(mike.listsSubjects());
console.table(mike);
console.table(devin);
console.table(winnie);
console.table(sam);
console.table(chris);

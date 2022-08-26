const student = {
    name: 'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    },

}
const marksMath = student.marks.math;
console.log(marksMath);

const chemistryMarks = student['marks']['chemistry'];
console.log(chemistryMarks);
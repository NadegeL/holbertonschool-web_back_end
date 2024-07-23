import getListStudents from './0-get_list_students.js';

export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter((student) => student.location === city);
  return studentsByCity.map((student) => {
    const studentGrade = newGrades.find((newGrade) => newGrade.studentId === student.id);
    return {
      ...student,
      grade: studentGrade ? studentGrade.grade : 'N/A',
    };
  });
}

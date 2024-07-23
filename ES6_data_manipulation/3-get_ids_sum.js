import getListStudents from './0-get_list_students';

function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;

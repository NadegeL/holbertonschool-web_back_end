export default function getListStudents(array) {
  if (!Array.isArray(array)) {
    throw new Error('Cannot process');
  }

  const result = [];

  for (let i = 0; i < array.length; i++) {
    const student = {
      id: array[i].id,
      firstName: array[i].firstName,
      location: array[i].location,
    };
    result.push(student);
  }

  return result;
}

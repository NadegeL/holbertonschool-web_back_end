export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}

/* students.reduce((sum, student) => sum + student.id, 0)
 parcourt chaque objet étudiant dans le tableau.
Pour chaque étudiant, on ajoute son id à la somme accumulée.
0 est la valeur initiale de la somme. */

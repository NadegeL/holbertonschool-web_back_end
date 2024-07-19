export default function createReportObject(employees) {
  return {
    allEmployees: employees,
    numberOfDepartments: Object.keys(employees).length,
    getNumberOfDepartments() {
      return this.numberOfDepartments;
    },
  };
}

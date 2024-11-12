export default function createReportObject(employeesList) {
    return {
        allEmployees: {...employeesList},
        getNumberOfDepartments() {
            return Object.keys(employeesList).length;
        },
    };
}

/*method ES6 without "function" word, (...employeesList)=> use alldepartments and list of employees
'Object.keys' count the number of departments in employeesList*/
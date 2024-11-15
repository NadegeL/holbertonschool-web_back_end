export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}

/* Computed Property Names: By using the bracket syntax [departmentName],
 we create a dynamic property in the returned object.
The value of departmentName will be used as the key for this property.

Key Value: The value associated with this key is employees,
 the array of employees passed as a parameter. */

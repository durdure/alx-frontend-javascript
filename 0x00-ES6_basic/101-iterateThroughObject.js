export default function iterateThroughObject(reportWithIterator) {
  const allEmployees = reportWithIterator.allEmployees;
  let employeeNames = [];

  for (let department in allEmployees) {
    employeeNames.push(...allEmployees[department]);
  }

  return employeeNames.join(' | ');
}

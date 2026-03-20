
// EMPLOYEE STORAGE

function saveEmployees(data) {
  localStorage.setItem("employees", JSON.stringify(data));
}


function getEmployees() {
  return JSON.parse(localStorage.getItem("employees")) || [];
}


// ASSESSMENT STORAGE

function saveScore(employeeId, score) {
  let results = JSON.parse(localStorage.getItem("results")) || {};

  results[employeeId] = score;

  localStorage.setItem("results", JSON.stringify(results));
}

function getScore(employeeId) {
  let results = JSON.parse(localStorage.getItem("results")) || {};
  return results[employeeId] || 0;
}


function clearAll() {
  localStorage.clear();
}
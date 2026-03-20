
let employees = JSON.parse(localStorage.getItem("employees")) || [];


let totalEmp = employees.length;

let activeEmp = employees.filter(emp => emp.active).length;
let inactiveEmp = employees.filter(emp => !emp.active).length;

let assignedClients = employees.reduce((sum, emp) => sum + emp.clients, 0);

let totalClients = 200;
let unassignedClients = totalClients - assignedClients;


 //UPDATE UI
document.getElementById("totalEmp").innerText = totalEmp;
document.getElementById("activeEmp").innerText = activeEmp;
document.getElementById("inactiveEmp").innerText = inactiveEmp;

document.getElementById("assignedClients").innerText = assignedClients;
document.getElementById("unassignedClients").innerText = unassignedClients;
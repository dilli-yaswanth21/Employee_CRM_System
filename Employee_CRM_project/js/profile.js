function loadProfile() {

  let employees = JSON.parse(localStorage.getItem("employees")) || [];
  let results = JSON.parse(localStorage.getItem("results")) || {};
  let selectedId = localStorage.getItem("selectedEmployee");

  let container = document.getElementById("profileContainer");

  if (!selectedId) {
    container.innerHTML = `<div class="alert alert-warning">No employee selected</div>`;
    return;
  }

  let emp = employees.find(e => e.id == selectedId);

  if (!emp) {
    container.innerHTML = `<div class="alert alert-danger">Employee not found</div>`;
    return;
  }

  let data = results[emp.id];

  let percentage = data ? data.percentage : 0;
  let score = data ? data.score : "Not Attempted";
  let grade = data ? data.grade : "-";

  let color = "bg-danger";
  if (percentage >= 80) color = "bg-success";
  else if (percentage >= 60) color = "bg-warning";

  container.innerHTML = `
    <div class="card p-4 shadow">

      <h4>${emp.name}</h4>
      <p><b>Department:</b> ${emp.dept}</p>
      <p><b>Clients:</b> ${emp.clients}</p>

      <p><b>Score:</b> ${score}</p>
      <p><b>Grade:</b> ${grade}</p>

      <div class="progress mb-3">
        <div class="progress-bar ${color}" style="width:${percentage}%">
          ${percentage}%
        </div>
      </div>

      <a href="assessment.html" class="btn btn-primary">
        Take Assessment
      </a>

    </div>
  `;
}

document.addEventListener("DOMContentLoaded", loadProfile);
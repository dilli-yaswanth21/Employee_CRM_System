// ================= LOAD DATA =================
let employees = JSON.parse(localStorage.getItem("employees")) || [

  // Administration
  {id:101, name:"Gajala", dept:"Administration", role:"CEO", active:true, clients:20},
  {id:102, name:"Yogi Adityanadh", dept:"Administration", role:"Co-CEO", active:true, clients:10},

  // Sales
  {id:201, name:"Neelambari", dept:"Sales", role:"Manager", active:false, clients:8},
  {id:202, name:"Rohul Nandhi", dept:"Sales", role:"Regional Manager", active:true, clients:6},
  {id:203, name:"Sri Reddy", dept:"Sales", role:"Area Sales Manager", active:true, clients:6},
  {id:204, name:"Deepti Shukla", dept:"Sales", role:"Sales Executive", active:true, clients:5},
  {id:205, name:"Virat Kohli", dept:"Sales", role:"Sales Head", active:true, clients:5},
  {id:206, name:"Deepak Yadav", dept:"Sales", role:"Sales Executive", active:false, clients:1},

  // Marketing
  {id:301, name:"Alison Burgers", dept:"Marketing", role:"Marketing Executive", active:true, clients:5},
  {id:302, name:"Roshan Babu", dept:"Marketing", role:"SEO Specialist", active:true, clients:5},
  {id:303, name:"Peter Parker", dept:"Marketing", role:"Content Strategist", active:true, clients:5},
  {id:304, name:"Anuskha Shetty", dept:"Marketing", role:"Digital Marketing Manager", active:true, clients:5},
  {id:305, name:"Naturam", dept:"Marketing", role:"Brand Manager", active:true, clients:5},
  {id:306, name:"Rohit Das", dept:"Marketing", role:"SEO Specialist", active:true, clients:3},
  {id:307, name:"Neha Jain", dept:"Marketing", role:"Content Strategist", active:true, clients:3},

  // IT
  {id:401, name:"Nambi Narayan", dept:"IT", role:"Frontend Developer", active:true, clients:5},
  {id:402, name:"Avanthika", dept:"IT", role:"Backend Developer", active:true, clients:5},
  {id:403, name:"Sarojini Naidu", dept:"IT", role:"Software Engineer", active:true, clients:5},
  {id:404, name:"Chandra Babu Naidu", dept:"IT", role:"QA Tester", active:true, clients:5},
  {id:405, name:"Devasena", dept:"IT", role:"Tech Lead", active:true, clients:5},
  {id:406, name:"Aman Khan", dept:"IT", role:"Software Engineer", active:true, clients:2},

  // HR
  {id:501, name:"Shivagami", dept:"Human Resource", role:"HR Executive", active:true, clients:5},
  {id:502, name:"Rajeev Kanakala", dept:"Human Resource", role:"HR Manager", active:true, clients:5},
  {id:503, name:"Suma Kanakala", dept:"Human Resource", role:"Recruiter", active:true, clients:5},
  {id:504, name:"Ritu Sharma", dept:"Human Resource", role:"Talent Acquisition Specialist", active:true, clients:2},
  {id:505, name:"Vikas Joshi", dept:"Human Resource", role:"Recruiter", active:true, clients:1},

  // Customer Support
  {id:601, name:"Arjun Mehta", dept:"Customer Support", role:"Support Executive", active:true, clients:2},
  {id:602, name:"Sneha Kapoor", dept:"Customer Support", role:"Customer Success Manager", active:true, clients:3},
  {id:603, name:"Rahul Verma", dept:"Customer Support", role:"Technical Support Engineer", active:false, clients:1},
  {id:604, name:"Pooja Sharma", dept:"Customer Support", role:"Support Executive", active:true, clients:2},

  // Operations
  {id:701, name:"Kiran Reddy", dept:"Operations", role:"Operations Executive", active:true, clients:4},
  {id:702, name:"Manoj Kumar", dept:"Operations", role:"Operations Manager", active:true, clients:5},
  {id:703, name:"Divya Nair", dept:"Operations", role:"Project Coordinator", active:false, clients:1},
  {id:704, name:"Rakesh Singh", dept:"Operations", role:"Operations Executive", active:true, clients:3},
  {id:705, name:"Varun Shetty", dept:"Operations", role:"Operations Manager", active:true, clients:4},

  // Finance
  {id:801, name:"Anil Gupta", dept:"Finance", role:"Accountant", active:true, clients:2},
  {id:802, name:"Meena Iyer", dept:"Finance", role:"Financial Analyst", active:true, clients:2},
  {id:803, name:"Suresh Patel", dept:"Finance", role:"Finance Manager", active:true, clients:4},
  {id:804, name:"Kavya Rao", dept:"Finance", role:"Auditor", active:false, clients:1},
  {id:805, name:"Priya Menon", dept:"Finance", role:"Financial Analyst", active:true, clients:2}

];

// Save initial if empty
if (!localStorage.getItem("employees")) {
  localStorage.setItem("employees", JSON.stringify(employees));
}

// ================= RENDER =================
function renderEmployees() {

  const table = document.getElementById("employeeTable");
  table.innerHTML = "";

  employees.forEach((emp, index) => {

    let status = emp.active
      ? '<span class="badge bg-success">Active</span>'
      : '<span class="badge bg-danger">Inactive</span>';

    let toggleBtn = emp.active
      ? `<button class="btn btn-sm btn-danger" onclick="toggleStatus(${index})">Deactivate</button>`
      : `<button class="btn btn-sm btn-success" onclick="toggleStatus(${index})">Activate</button>`;

    let profileBtn = `
      <button class="btn btn-sm btn-primary" onclick="openProfile(${emp.id})">
        View Profile
      </button>
    `;

    let row = `
      <tr>
        <td>${index + 1}</td>
        <td>${emp.id}</td>
        <td><strong>${emp.name}</strong></td>
        <td>${emp.dept}</td>
        <td><span class="badge bg-primary">${emp.role}</span></td>
        <td>${status}</td>
        <td>${emp.clients}</td>
        <td>
          ${toggleBtn}
          ${profileBtn}
        </td>
      </tr>
    `;

    table.innerHTML += row;
  });
}

// ================= PROFILE NAV =================
function openProfile(empId) {
  localStorage.setItem("selectedEmployee", empId);
  window.location.href = "profile.html";
}

// ================= TOGGLE =================
function toggleStatus(index) {
  employees[index].active = !employees[index].active;
  localStorage.setItem("employees", JSON.stringify(employees));
  renderEmployees();
}

// ================= INIT =================
renderEmployees();
const form = document.getElementById("signupForm");
const matchArea = document.getElementById("matchArea");
const usersTable = document.getElementById("usersTable").getElementsByTagName('tbody')[0];
const findMatchBtn = document.getElementById("findMatchBtn");

// Array li kaystore users
let usersData = [];

// Submit form
form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Lire inputs user
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;

    // Store f array local (golo li nta ghir)
    usersData.push({name, age, gender});

    // Hide form
    form.style.display = "none";

    // Show dashboard (golo visible li nta)
    matchArea.style.display = "block";

    // Update table
    usersTable.innerHTML = ""; // clear table
    usersData.forEach(user => {
        const newRow = usersTable.insertRow();
        newRow.insertCell(0).innerText = user.name;
        newRow.insertCell(1).innerText = user.age;
        newRow.insertCell(2).innerText = user.gender;
    });
});

// Button user jdida
findMatchBtn.addEventListener("click", function() {
    form.style.display = "block";
    form.reset();
});
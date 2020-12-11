
const form = document.getElementById("form");
const name = document.getElementById("fname");
const surname = document.getElementById("lname");
const pid = document.getElementById(
  "pid"
);
const gender = document.getElementById("gender");
const address = document.getElementById("address");
const phone = document.getElementById("phone");
const program = document.getElementById("program");
const form_of_studies = document.getElementById("formOfStudies");

let students = [];

const addStudent = (e) => {
  e.preventDefault(); // to stop the form from submitting
  let pre_error = document.querySelector("#error pre");
  pre_error.textContent = "";

  if (!validateForm()) {
    pre_error.textContent = "error submitting the form";
    // console.log(validateForm());
    return false;
  }

  let student = {
    id: Date.now(),
    name: document.getElementById("fname").value,
    surname: document.getElementById("lname").value,
    pid: document.getElementById(
      "pid"
    ).value,
    gender: document.getElementById("male").checked ? "male" : "female",
    address: document.getElementById("address").value,
    phone: document.getElementById("phone").value,
    program: document.getElementById("program").value,
    form_of_studies: document.getElementById("regular").checked
      ? "regular"
      : "online",
  };

  // Checks if there is a student with same pid
  if (!search(student.pid, students)) {
    students.push(student);
  } else {
    alert("Student with this personal id already exists");
  }

  document.forms[0].reset(); // clear form
  // document.querySelector('form').reset()

  // Displays student data
  console.log("added", { students });
  let pre = document.querySelector("#msg pre");
  pre.textContent = "Form submitted successfully!"
  // pre.textContent = "\n" + JSON.stringify(students, "\t", 2);

  // saving to local storage (can find local storage in Application -> local storage)
  localStorage.setItem("StudentList", JSON.stringify(students));
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", addStudent);
});

function validateForm() {
  if (name.value === "") {
    name.style.borderColor = "red";
    return false;
  } else {
    name.style.borderColor = "";
  }

  if (surname.value === "") {
    surname.style.borderColor = "red";
    return false;
  } else {
    surname.style.borderColor = "";
  }

  if (pid.value === "") {
    pid.borderColor = "red";
    return false;
  } else {
    if (checksum()) {
      pid.borderColor = "";
    } else {
      alert("Invalid personal identification code");
      return false;
    }
  }

  gender_selected = document.querySelector('input[name="gender"]:checked')?.value
  if (gender_selected == undefined) {
    gender.style.color = "red";
    alert("Select your gender");
    return false;
  } else {
    if (verifyGender()) {
      gender.style.color = "black";
    } else {
      alert("Selected gender doesn't match personal id code");
      return false;
    }
  }

  if (address.value === "") {
    address.style.borderColor = "red";
    return false;
  } else {
    address.style.borderColor = "";
  }

  if (phone.value === "") {
    phone.style.borderColor = "red";
    return false;
  } else {
    phone.style.borderColor = "";
  }

  if (program.value == "") {
    program.style.borderColor = "red";
    return false;
  } else {
    program.style.borderColor = "";
  }

  return true;
}

// Checks whether personal id code is valid
function checksum() {
  var pid_last_chr = pid.value.charAt(10);
  var C = pid.value.charAt(0) * 1 +
    pid.value.charAt(1) * 2 +
    pid.value.charAt(2) * 3 +
    pid.value.charAt(3) * 4 +
    pid.value.charAt(4) * 5 +
    pid.value.charAt(5) * 6 +
    pid.value.charAt(6) * 7 +
    pid.value.charAt(7) * 8 +
    pid.value.charAt(8) * 9 +
    pid.value.charAt(9) * 1

  C = C % 11
  console.log("C: " + C);

  if (C >= 10) {
    var S = pid.value.charAt(0) * 3 +
      pid.value.charAt(1) * 4 +
      pid.value.charAt(2) * 5 +
      pid.value.charAt(3) * 6 +
      pid.value.charAt(4) * 7 +
      pid.value.charAt(5) * 8 +
      pid.value.charAt(6) * 9 +
      pid.value.charAt(7) * 1 +
      pid.value.charAt(8) * 2 +
      pid.value.charAt(9) * 3

    S = S % 11

    if (S !== 10) {
      return pid_last_chr == S;
    } else {
      return pid_last_chr == 0;
    }
  } else {
    return pid_last_chr == C;
  }

}

// Searches given array for a value
function search(nameKey, myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].pid === nameKey) {
      return true;
    }
  }
}

// Checks if gender coincides with the one in the personal id code
function verifyGender() {
  gender_selected = document.querySelector('input[name="gender"]:checked')?.value
  if (gender_selected == "male") {
    if (pid.value.charAt(0) == 3 ||
      pid.value.charAt(0) == 5) {
      return true;
    } else {
      return false;
    }
  }
  if (gender_selected == "female") {
    if (pid.value.charAt(0) == 4 ||
      pid.value.charAt(0) == 6) {
      return true;
    } else {
      return false;
    }
  }
}
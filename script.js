// =========================================================
// STUDENT REGISTRATION & RESULT PORTAL
// JavaScript
// =========================================================


// =========================================================
// GET HTML ELEMENTS
// =========================================================

const studentForm = document.getElementById("studentForm");

const resultCard = document.getElementById("resultCard");
const resultPlaceholder = document.getElementById("resultPlaceholder");

const studentTableBody =
    document.getElementById("studentTableBody");


// Student count for S.No
let studentCount = 0;


// =========================================================
// FORM SUBMISSION EVENT
// =========================================================

studentForm.addEventListener("submit", function (event) {

    // Prevent page from refreshing
    event.preventDefault();


    // =====================================================
    // HTML5 FORM VALIDATION
    // =====================================================

    if (!studentForm.checkValidity()) {

        event.stopPropagation();

        studentForm.classList.add("was-validated");

        return;
    }


    // =====================================================
    // GET PERSONAL INFORMATION
    // =====================================================

    const studentName =
        document.getElementById("studentName").value.trim();

    const registerNumber =
        document.getElementById("registerNumber").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();


    // =====================================================
    // GET ACADEMIC INFORMATION
    // =====================================================

    const course =
        document.getElementById("course").value;

    const semester =
        document.getElementById("semester").value;


    // =====================================================
    // GET SUBJECT MARKS
    // =====================================================

    const python =
        Number(document.getElementById("python").value);

    const dataStructures =
        Number(document.getElementById("dataStructures").value);

    const dbms =
        Number(document.getElementById("dbms").value);

    const computerNetworks =
        Number(document.getElementById("computerNetworks").value);

    const webTechnology =
        Number(document.getElementById("webTechnology").value);


    // =====================================================
    // CALCULATE TOTAL MARKS
    // =====================================================

    const totalMarks =
        python +
        dataStructures +
        dbms +
        computerNetworks +
        webTechnology;


    // =====================================================
    // CALCULATE PERCENTAGE
    // =====================================================

    const maximumMarks = 500;

    const percentage =
        (totalMarks / maximumMarks) * 100;


    // =====================================================
    // PASS / FAIL CALCULATION
    // =====================================================

    let status;

    /*
       A student must score at least 40 marks
       in every subject to PASS.
    */

    if (
        python >= 40 &&
        dataStructures >= 40 &&
        dbms >= 40 &&
        computerNetworks >= 40 &&
        webTechnology >= 40
    ) {

        status = "PASS";

    } else {

        status = "FAIL";

    }


    // =====================================================
    // DISPLAY PERSONAL INFORMATION
    // =====================================================

    document.getElementById("resultName").textContent =
        studentName;

    document.getElementById("resultRegister").textContent =
        registerNumber;

    document.getElementById("resultEmail").textContent =
        email;

    document.getElementById("resultCourse").textContent =
        course;

    document.getElementById("resultSemester").textContent =
        semester;


    // =====================================================
    // DISPLAY TOTAL AND PERCENTAGE
    // =====================================================

    document.getElementById("totalMarks").textContent =
        totalMarks;

    document.getElementById("percentage").textContent =
        percentage.toFixed(2) + "%";


    // =====================================================
    // DISPLAY SUBJECT MARKS
    // =====================================================

    document.getElementById("resultPython").textContent =
        python;

    document.getElementById("resultDataStructures").textContent =
        dataStructures;

    document.getElementById("resultDbms").textContent =
        dbms;

    document.getElementById("resultComputerNetworks").textContent =
        computerNetworks;

    document.getElementById("resultWebTechnology").textContent =
        webTechnology;


    // =====================================================
    // DISPLAY PASS / FAIL STATUS
    // =====================================================

    const statusElement =
        document.getElementById("status");

    statusElement.textContent = status;

    // Remove previous status classes
    statusElement.classList.remove(
        "status-pass",
        "status-fail"
    );


    if (status === "PASS") {

        statusElement.classList.add("status-pass");

    } else {

        statusElement.classList.add("status-fail");

    }


    // =====================================================
    // SHOW RESULT CARD
    // =====================================================

    resultPlaceholder.classList.add("d-none");

    resultCard.classList.remove("d-none");


    // =====================================================
    // ADD STUDENT TO DYNAMIC TABLE
    // =====================================================

    studentCount++;


    const newRow =
        document.createElement("tr");


    newRow.innerHTML = `

        <td>${studentCount}</td>

        <td>${registerNumber}</td>

        <td>${studentName}</td>

        <td>${course}</td>

        <td>${totalMarks} / 500</td>

        <td>${percentage.toFixed(2)}%</td>

        <td>
            <span class="${
                status === "PASS"
                    ? "badge bg-success"
                    : "badge bg-danger"
            }">
                ${status}
            </span>
        </td>

    `;


    studentTableBody.appendChild(newRow);


    // =====================================================
    // SUCCESS MESSAGE
    // =====================================================

    alert(
        "Student registered successfully!\n\n" +
        "Student Name: " + studentName +
        "\nRegister Number: " + registerNumber +
        "\nTotal Marks: " + totalMarks + " / 500" +
        "\nPercentage: " + percentage.toFixed(2) + "%" +
        "\nStatus: " + status
    );


    // =====================================================
    // SCROLL TO RESULT
    // =====================================================

    document
        .getElementById("result")
        .scrollIntoView({
            behavior: "smooth"
        });


    // =====================================================
    // RESET VALIDATION STATE
    // =====================================================

    studentForm.classList.remove("was-validated");

});


// =========================================================
// RESET BUTTON EVENT
// =========================================================

studentForm.addEventListener("reset", function () {

    // Remove Bootstrap validation styles
    studentForm.classList.remove("was-validated");

});


// =========================================================
// DATE OF BIRTH VALIDATION
// =========================================================

// Get today's date
const today = new Date();

// Format today's date as YYYY-MM-DD
const currentDate =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");


// Student should not select a future date of birth
document.getElementById("dob").max = currentDate;
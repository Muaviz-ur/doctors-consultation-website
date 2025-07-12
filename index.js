// Wait until the page fully loads
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded. JS is running...");

    // Selecting the form elements
    const patientId = document.getElementById("srno");
    const patientName = document.getElementById("name");
    const patientEmail = document.getElementById("email");
    const doctorSelect = document.getElementById("doctor");
    const commentBox = document.getElementById("comments");
    const submitBtn = document.querySelector("button[type='submit']");
    const resetBtn = document.querySelector("button[type='reset']");

    console.log("Form elements selected.");

    // Helper function: Get selected gender
    function getSelectedGender() {
        const genderOptions = document.getElementsByName("gender");
        for (let option of genderOptions) {
            if (option.checked) {
                console.log("Gender selected:", option.value);
                return option.value;
            }
        }
        console.log("No gender selected.");
        return null;
    }

    // Submit button handler
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault(); // stop form from reloading the page
        console.log("Submit button clicked.");

        const gender = getSelectedGender();

        // Validate required fields
        if (!patientId.value || !patientName.value || !patientEmail.value || !gender || !doctorSelect.value) {
            console.warn("Missing fields. All fields are required.");
            alert("Please fill all required fields.");
            return;
        }

        // Check email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(patientEmail.value)) {
            console.warn("Invalid email entered:", patientEmail.value);
            alert("Please enter a valid email address.");
            return;
        }

        // Log all data before confirming
        console.log("Patient ID:", patientId.value);
        console.log("Patient Name:", patientName.value);
        console.log("Email:", patientEmail.value);
        console.log("Gender:", gender);
        console.log("Selected Doctor:", doctorSelect.value);
        console.log("Medical Concerns:", commentBox.value);

        // Final confirmation alert
        alert(
            `Appointment booked!\n\nName: ${patientName.value}\nID: ${patientId.value}\nEmail: ${patientEmail.value}\nGender: ${gender}\nDoctor: ${doctorSelect.value}\nConcern: ${commentBox.value || 'None'}`
        );

        console.log("Form submitted successfully. Now resetting...");

        // Clear the form after submission
        document.getElementById("Appoinment").reset();
    });

    // Optional: Log when reset button is clicked
    resetBtn.addEventListener("click", () => {
        console.log("Form was cleared by user.");
    });
});

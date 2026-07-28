// Tamang Anniversary Date
const CORRECT_DATE = "2026-07-30"; 

const form = document.getElementById("anniversaryForm");
const dateInput = document.getElementById("anniversaryDate");

// Error message element para sa maling date
const errorMessage = document.createElement("p");
errorMessage.style.color = "#d9534f";
errorMessage.style.fontSize = "15px";
errorMessage.style.marginTop = "14px";
errorMessage.style.display = "none";
errorMessage.style.fontWeight = "500";
errorMessage.style.fontFamily = "'Poppins', sans-serif";
form.appendChild(errorMessage);

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const userSelectedDate = dateInput.value;

    // Kapag walang nilagay na date
    if (!userSelectedDate) {
        errorMessage.textContent = "❌ Please select our anniversary date first ♥";
        errorMessage.style.display = "block";
        return;
    }

    // Kapag tama ang napiling date
    if (userSelectedDate === CORRECT_DATE) {
        errorMessage.style.display = "none";
        
        // Smooth fade-out effect ng buong screen
        document.body.style.transition = "opacity 1.2s ease";
        document.body.style.opacity = "0";

        setTimeout(() => {
            // Pagkatapos mag-fade out, handa na tayo para sa Elegant Intro & Typewriter animation!
            alert("✨ Correct date! Unlocking Our Story...");
            document.body.style.opacity = "1"; // Temporary display muna habang binubuo natin ang intro
        }, 1200);

    } else {
        // Kapag mali ang date
        errorMessage.textContent = "❌ Incorrect password, try again my love! ♥";
        errorMessage.style.display = "block";
        
        // Red highlight indicator sa input box
        dateInput.style.borderColor = "#d9534f";
        setTimeout(() => {
            dateInput.style.borderColor = "#e7c6cd";
        }, 2000);
    }
});

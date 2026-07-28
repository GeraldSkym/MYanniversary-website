// Tamang Anniversary Date (YYYY-MM-DD)
const CORRECT_DATE = "2026-07-30"; 

document.addEventListener("DOMContentLoaded", function () {
    const unlockBtn = document.getElementById("unlockBtn");
    const dateInput = document.getElementById("anniversaryDate");
    const errorMessage = document.getElementById("errorMessage");

    if (unlockBtn) {
        unlockBtn.addEventListener("click", function () {
            const userSelectedDate = dateInput.value;

            // 1. Kapag walang nilagay na date
            if (!userSelectedDate) {
                errorMessage.textContent = "❌ Please select our anniversary date first ♥";
                errorMessage.style.display = "block";
                return;
            }

            // 2. Kapag TAMA ang date
            if (userSelectedDate === CORRECT_DATE) {
                errorMessage.style.display = "none";
                dateInput.style.borderColor = "#e7c6cd";
                
                // Smooth fade-out effect ng buong screen
                document.body.style.transition = "opacity 1.2s ease";
                document.body.style.opacity = "0";

                setTimeout(() => {
                    alert("✨ Correct date! Unlocking Our Story...");
                    document.body.style.opacity = "1"; 
                }, 1200);

            } else {
                // 3. Kapag MALI ang date
                errorMessage.textContent = "❌ Incorrect password, try again my love! ♥";
                errorMessage.style.display = "block";
                
                // Red border indicator sa input box
                dateInput.style.borderColor = "#d9534f";
            }
        });
    }
});

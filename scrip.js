const form =
    document.getElementById(
        "anniversaryForm"
    );


const dateInput =
    document.getElementById(
        "anniversaryDate"
    );


form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        if (dateInput.value === "") {

            alert(
                "Please enter our anniversary date ♥"
            );

            dateInput.focus();

            return;
        }


        /*
        Kapag may susunod ka nang page,
        palitan ang alert ng:

        window.location.href = "story.html";
        */


        alert(

            "Our story is unlocked! ♥\n\n" +

            "Happy Anniversary, Love!"

        );

    }
);

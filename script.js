const form =
    document.getElementById("anniversaryForm");

form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const date =
            document.getElementById(
                "anniversaryDate"
            ).value;

        if (!date) {

            alert(
                "Please enter our anniversary date ♥"
            );

            return;
        }

        alert(
            "Our story is unlocked! ♥\n\n" +
            "Happy Anniversary, Love!"
        );

    }
);

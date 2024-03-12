document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const submitButton = document.getElementById("gonder");

    const apply = (e) => {
        var formIsValid = form.checkValidity();
        submitButton.disabled = !formIsValid;
    }

    form.addEventListener("input", apply);

    apply();
});

function send(form) {

    console.log("Name", form.name.value);
    console.log("Email", form.email.value);
    console.log("Message", form.message.value);
    form.reset();
    alert("form başarıyla iletildi")
}


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const submitButton = document.getElementById("gonder");


    form.addEventListener("input", function () {
        const formIsValid = form.checkValidity();

        if (formIsValid) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = false;
        }
    });


    form.addEventListener("submit", function (e) {
        e.preventDefault(); 
  
    });
});

function send(form) {
    console.log("Name", form.name.value);
    console.log("Email", form.email.value);
    console.log("Message", form.message.value);
    form.reset();

    alert("Form başarıyla iletildi");
}

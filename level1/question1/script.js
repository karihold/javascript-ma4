var alertBtn = document.getElementById("alert-btn");

alertBtn.addEventListener('click', function (e) {
    alert("Success");
    e.stopPropagation();
});

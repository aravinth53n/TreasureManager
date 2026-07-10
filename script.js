const API_URL = "https://script.google.com/macros/s/AKfycbwqpXqeMEwVrY_T0SkFTrOVd91nGgyFgOz_xkm_L_mSIQRCBO65wZNAeh0BPPlL-sx6/exec";

fetch(API_URL)
.then(response => response.json())
.then(data => {

    const dashboard = data.dashboard;

    document.getElementById("members").innerHTML =
        dashboard.members;

    document.getElementById("lastyear").innerHTML =
        "₹" + Number(dashboard.lastYearBalance).toLocaleString();

    document.getElementById("collection").innerHTML =
        "₹" + Number(dashboard.collection).toLocaleString();

    document.getElementById("expenses").innerHTML =
        "₹" + Number(dashboard.expenses).toLocaleString();

    document.getElementById("balance").innerHTML =
        "₹" + Number(dashboard.cashAvailable).toLocaleString();

})
.catch(error => {

    console.error("Dashboard Error:", error);

});
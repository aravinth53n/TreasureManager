const API_URL = "https://script.google.com/macros/s/AKfycbyF4Dbp6EAaYStUfesoZJA79T8-qW9_4rrThfo9V6prhU2Lfw6MUcVHvhI-wdEmg7QE/exec";

fetch(API_URL)
.then(response => response.json())
.then(data => {

    const container = document.getElementById("membersContainer");

    container.innerHTML = "";

    data.members.forEach(member => {

        let avatar = "";

        // Avatar Selection
        if (member.gender.toLowerCase() === "male") {

            avatar = Number(member.age) < 18
                ? "Images/boy.png"
                : "Images/man.png";

        } else {

            avatar = Number(member.age) < 18
                ? "Images/girl.png"
                : "Images/woman.png";

        }

        container.innerHTML += `

        <div class="member-card">

            <img src="${avatar}" alt="${member.name}" class="member-photo">

            <h3>${member.name}</h3>

            <p><strong>ID :</strong> ${member.id}</p>

            <p>${member.gender} • ${member.age} yrs</p>

            <p>
                <a href="tel:${member.phone}">
                    📞 ${member.phone}
                </a>
            </p>

        </div>

        `;

    });

})
.catch(error => {

    console.error("Members Error :", error);

});
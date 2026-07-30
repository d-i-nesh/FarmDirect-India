// ======================================
// FarmDirect India - Module 1
// script.js
// ======================================

// Current active section
let currentSection = null;

// --------------------------------------
// Show / Hide Sections
// --------------------------------------
function showSection(sectionId) {

    // Hide all form sections
    const sections = document.querySelectorAll(".form-section");

    sections.forEach(section => {
        section.classList.add("hidden");
    });

    // Show selected section
    const selected = document.getElementById(sectionId);

    if (selected) {

        selected.classList.remove("hidden");

        selected.scrollIntoView({
            behavior: "smooth"
        });

        currentSection = sectionId;
    }

}

// --------------------------------------
// Dark Mode
// --------------------------------------

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        darkBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});

// --------------------------------------
// Farmer Registration
// --------------------------------------


// --------------------------------------
// Smooth Scroll Navigation
// --------------------------------------

document.querySelectorAll("nav a").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// --------------------------------------
// Reveal Animation
// --------------------------------------

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

});

document.querySelectorAll(".card,.role-card,.about,.contact")
.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(40px)";

    el.style.transition = ".7s";

    observer.observe(el);

});

// --------------------------------------
// Hero Button Hover Animation
// --------------------------------------

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-5px) scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0px) scale(1)";

    });

});

// --------------------------------------
// Dummy Notification
// --------------------------------------

setTimeout(() => {

    console.log(
        "🌾 Welcome to FarmDirect India"
    );

}, 1500);

// --------------------------------------
// Future Modules Placeholder
// --------------------------------------

const app = {

    farmer: [],

    consumer: [],

    products: [],

    cart: [],

    orders: []

};

// --------------------------------------
// Future Dashboard Functions
// --------------------------------------

function openFarmerDashboard() {

    alert(
        "Farmer Dashboard will be added in Module 2."
    );

}

function openConsumerDashboard() {

    alert(
        "Consumer Dashboard will be added in Module 3."
    );

}

function openAdminDashboard() {

    alert(
        "Admin Dashboard will be added in Module 4."
    );

}

// --------------------------------------
// --------------------------------------
// Application Loaded
// --------------------------------------

window.onload = () => {

    console.log("🚜 FarmDirect India Loaded Successfully");

};

// --------------------------------------
// Farmer Registration API
// --------------------------------------

async function registerFarmer() {

    const farmer = {

        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        aadhaar: document.getElementById("aadhaar").value,
        farmname: document.getElementById("farmname").value,
        village: document.getElementById("village").value,
        district: document.getElementById("district").value,
        state: document.getElementById("state").value,
        upi: document.getElementById("upi").value,
        password: document.getElementById("password").value

    };

    try {

        const response = await fetch("/register-farmer", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(farmer)

        });

        const result = await response.text();

        alert(result);

    }
    catch (err) {

        console.log(err);

        alert("Registration Failed");

    }

}
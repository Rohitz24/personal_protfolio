// 1. Form Validation
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual submission
    
    if(validateForm()) {
        // Simulate sending data
        alert("Thank you! Your message has been sent.");
        form.reset();
    }
});

function validateForm() {
    let isValid = true;

    // Validate Name
    if(nameInput.value.trim() === '') {
        setError(nameInput);
        isValid = false;
    } else {
        setSuccess(nameInput);
    }

    // Validate Email
    if(emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
        setError(emailInput);
        isValid = false;
    } else {
        setSuccess(emailInput);
    }

    // Validate Subject
    if(subjectInput.value.trim() === '') {
        setError(subjectInput);
        isValid = false;
    } else {
        setSuccess(subjectInput);
    }

    // Validate Message
    if(messageInput.value.trim() === '') {
        setError(messageInput);
        isValid = false;
    } else {
        setSuccess(messageInput);
    }

    return isValid;
}

function setError(input) {
    const formGroup = input.parentElement;
    formGroup.classList.add('error');
}

function setSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove('error');
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// 2. Dynamic Interaction: Modal
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");

// Function called by HTML buttons
function openModal(title, desc) {
    modal.style.display = "block";
    modalTitle.innerText = title;
    modalDesc.innerText = desc;
}

function closeModal() {
    modal.style.display = "none";
}

// Close modal if clicked outside of content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 3. Navigation Active Link Highlighter
// This detects which section is currently visible and highlights the nav link
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active"); // Note: matches id with class logic if needed, 
            // but simpler is to match href attribute:
             if (li.getAttribute('href').includes(current)) {
                 li.classList.add("active");
             }
        }
        // Alternative standard approach:
        if(li.getAttribute('href') === '#' + current) {
            li.classList.add('active');
        }
    });
};
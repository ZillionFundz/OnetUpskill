

// ...existing code...

document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        ripple.classList.add('ripple');
        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});
// ...existing code...


// document.getElementById('signupForm').addEventListener('submit', function (e) {
//     e.preventDefault();
//     fetch('http://localhost:3000/submit', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             fullname: document.getElementById('fullname').value,
//             email: document.getElementById('email').value,
//             phone: document.getElementById('phone').value,
//             experience: document.getElementById('menu').value
//             // Add other fields as needed
//         })
//     })
//         .then(res => res.text())
//         .then(data => alert(data));
// });


// ...existing code...
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get selected course (radio button)
    const course = document.querySelector('input[name="course"]:checked')?.value || "";

    // Get all checked utilities (checkboxes)
    const utilities = Array.from(document.querySelectorAll('input[name="utilities"]:checked')).map(cb => cb.value);

    fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            fullname: document.getElementById('fullname').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            experience: document.getElementById('menu').value,
            course: course,
            utilities: utilities
        })
    })
        .then(res => res.text())
        .then(data => alert(data));
});

// ...existing code...

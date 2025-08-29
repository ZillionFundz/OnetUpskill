// $(document).ready(function () {
//     $('button').click(function (e) {
//         $(this).append('<span></span>');
//         var top = e.pageY;
//         var left = e.pageX;
//         $(this).children().offset({ top: top, left: left }).fadeOut(500);
//     });
// })




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
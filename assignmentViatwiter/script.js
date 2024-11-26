gsap.from(".nav a", {
    opacity: 0,
    x: -50,
    duration: 0.3,
    stagger: 0.4
})
gsap.from('nav button', {
    opacity: 0,
    y: 10,
    delay: 1
})
gsap.from(".moon", {
    y: 29,
    opacity: 0,
    ease: "power1.in",
    duration: 2,

})
gsap.to(".btns", {
    x: 14,
    yoyo: true,
    repeat: -1,
    duration: 2,
    ease: 'power1.inOut'
})

// + icon on click reveals corresponding answer
document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.closest('.que').nextElementSibling;

        if (answer.style.height === "0px" || answer.style.height === "") {
            // Animate reveal
            gsap.to(answer, {
                height: "auto",
                opacity: 1,
                duration: 0.5,
                onStart: () => answer.classList.remove('hidden') 
            });
            button.textContent = '*';
        } else {
            // Animate hide
            gsap.to(answer, {
                height: 0,
                opacity: 0,
                duration: 0.5,
                onComplete: () => answer.classList.add('hidden') // Hide after animation
            });
            button.textContent = '+';
        }
    });
});


// using scrollTrigger to animate cards animation

// Appear effect when scrolling down
gsap.from(".card1, .card2, .card3, .card4", {
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    y: 56,
    scrollTrigger: {
        trigger: ".features",
        start: "top 60%",
        end: "bottom 80%",
        toggleActions: "play none none reverse", // Plays on enter, reverses on leave
    },
});

// Hide effect when scrolling back up
gsap.to(".card1, .card2, .card3, .card4", {
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    y: 56,
    scrollTrigger: {
        trigger: ".features",
        start: "top 30%",
        end: "top 40%",
        toggleActions: "none reverse none reverse", // Reverses on leave-back
    },
});

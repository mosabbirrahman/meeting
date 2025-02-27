const slider = document.getElementById("slider");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;
const totalSlides = 3;

function updateSlide() {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    updateSlide();
});

prev.addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlide();
});

setInterval(() => {
    index = (index + 1) % totalSlides;
    updateSlide();
}, 5000);




const faqQuestions = document.querySelectorAll('.faq-question');
const faqAnswers = document.querySelectorAll('.faq-answer');
const showAll = document.getElementById('showAll');
const hideAll = document.getElementById('hideAll');

faqQuestions.forEach((question, index) => {
    question.addEventListener('click', () => {
        faqAnswers[index].classList.toggle('hidden');
    });
});

showAll.addEventListener('click', () => {
    faqAnswers.forEach(answer => answer.classList.remove('hidden'));
});

hideAll.addEventListener('click', () => {
    faqAnswers.forEach(answer => answer.classList.add('hidden'));
});
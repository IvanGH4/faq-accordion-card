const toggleAnswerBtn = document.querySelectorAll('.q');
const answers = document.querySelectorAll('.ans');
const question = document.querySelectorAll('.q p');

toggleAnswerBtn.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        answers[idx].classList.toggle('active');
        question[idx].classList.toggle('active');
        if(answers[idx].classList.contains('active')) {
            toggleAnswerBtn[idx].querySelector('i').classList.remove('fa-chevron-down');
            toggleAnswerBtn[idx].querySelector('i').classList.add('fa-chevron-up');
        } else {
            toggleAnswerBtn[idx].querySelector('i').classList.remove('fa-chevron-up');
            toggleAnswerBtn[idx].querySelector('i').classList.add('fa-chevron-down');
        }
    });
});
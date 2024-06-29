const vocabulary = [
    { pinyin: 'nǐ hǎo', character: '你好', translation: 'Hello' },
    { pinyin: 'xièxiè', character: '谢谢', translation: 'Thank you' },
    // Add more vocabulary items here
];

const quizQuestions = [
    {
        question: 'What is the pinyin for 你好?',
        options: ['nǐ hǎo', 'xièxiè', 'zàijiàn'],
        answer: 'nǐ hǎo'
    },
    // Add more questions here
];

function displayVocabulary() {
    const vocabList = document.getElementById('vocab-list');
    vocabulary.forEach(word => {
        const wordDiv = document.createElement('div');
        wordDiv.classList.add('vocab-item');
        wordDiv.innerHTML = `
            <p><strong>Pinyin:</strong> ${word.pinyin}</p>
            <p><strong>Character:</strong> ${word.character}</p>
            <p><strong>Translation:</strong> ${word.translation}</p>
        `;
        vocabList.appendChild(wordDiv);
    });
}

function displayQuiz() {
    const quizDiv = document.getElementById('quiz');
    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('quiz-question');
        questionDiv.innerHTML = `
            <p>${q.question}</p>
            ${q.options.map(option => `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>
            `).join('')}
        `;
        quizDiv.appendChild(questionDiv);
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', checkAnswers);
    quizDiv.appendChild(submitButton);
}

function checkAnswers() {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
    alert(`Your score is ${score} out of ${quizQuestions.length}`);
}

document.addEventListener('DOMContentLoaded', () => {
    displayVocabulary();
    displayQuiz();
});

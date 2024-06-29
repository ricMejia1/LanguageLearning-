// Vocabulary data
const vocabulary = [
    { pinyin: 'nǐ hǎo', character: '你好', translation: 'Hello' },
    { pinyin: 'xièxiè', character: '谢谢', translation: 'Thank you' },
    { pinyin: 'zàijiàn', character: '再见', translation: 'Goodbye' },
    { pinyin: 'duìbuqǐ', character: '对不起', translation: 'Sorry' },
    { pinyin: 'shì', character: '是', translation: 'Yes' },
    { pinyin: 'bù', character: '不', translation: 'No' },
    { pinyin: 'qǐng', character: '请', translation: 'Please' },
    { pinyin: 'wǒ', character: '我', translation: 'I, me' },
    { pinyin: 'nǐ', character: '你', translation: 'You' },
    { pinyin: 'tā', character: '他/她', translation: 'He/She' },
    { pinyin: 'wǒmen', character: '我们', translation: 'We' },
    { pinyin: 'nǐmen', character: '你们', translation: 'You (plural)' },
    { pinyin: 'tāmen', character: '他们/她们', translation: 'They' },
    { pinyin: 'hǎo', character: '好', translation: 'Good' },
    { pinyin: 'bùhǎo', character: '不好', translation: 'Not good' },
    { pinyin: 'māmāhūhū', character: '马马虎虎', translation: 'So-so' },
    { pinyin: 'zǎo', character: '早', translation: 'Morning' },
    { pinyin: 'wǎnshàng', character: '晚上', translation: 'Evening' },
    { pinyin: 'yào', character: '要', translation: 'Want' },
    { pinyin: 'bú yào', character: '不要', translation: 'Don’t want' },
    { pinyin: 'xǐhuān', character: '喜欢', translation: 'Like' },
    { pinyin: 'chī', character: '吃', translation: 'Eat' },
    { pinyin: 'hē', character: '喝', translation: 'Drink' },
    { pinyin: 'shuǐ', character: '水', translation: 'Water' },
    { pinyin: 'fàn', character: '饭', translation: 'Rice/Meal' },
    { pinyin: 'miàntiáo', character: '面条', translation: 'Noodles' },
    { pinyin: 'hěn', character: '很', translation: 'Very' },
    { pinyin: 'kěyǐ', character: '可以', translation: 'Can' },
    { pinyin: 'qù', character: '去', translation: 'Go' },
    { pinyin: 'lái', character: '来', translation: 'Come' },
    { pinyin: 'xué', character: '学', translation: 'Learn' },
    { pinyin: 'huí', character: '回', translation: 'Return' },
    { pinyin: 'shū', character: '书', translation: 'Book' },
    { pinyin: 'hànyǔ', character: '汉语', translation: 'Chinese (language)' },
    { pinyin: 'yī', character: '一', translation: 'One' },
    { pinyin: 'èr', character: '二', translation: 'Two' },
    { pinyin: 'sān', character: '三', translation: 'Three' },
    { pinyin: 'sì', character: '四', translation: 'Four' },
    { pinyin: 'wǔ', character: '五', translation: 'Five' },
    { pinyin: 'liù', character: '六', translation: 'Six' },
    { pinyin: 'qī', character: '七', translation: 'Seven' },
    { pinyin: 'bā', character: '八', translation: 'Eight' },
    { pinyin: 'jiǔ', character: '九', translation: 'Nine' },
    { pinyin: 'shí', character: '十', translation: 'Ten' },
    { pinyin: 'māma', character: '妈妈', translation: 'Mother' },
    { pinyin: 'bàba', character: '爸爸', translation: 'Father' },
    { pinyin: 'péngyou', character: '朋友', translation: 'Friend' }
];

// Quiz questions
const quizQuestions = [
    {
        question: 'What is the pinyin for 你好?',
        options: ['nǐ hǎo', 'xièxiè', 'zàijiàn'],
        answer: 'nǐ hǎo'
    },
    {
        question: 'What is the translation for 谢谢?',
        options: ['Goodbye', 'Thank you', 'Sorry'],
        answer: 'Thank you'
    },
    {
        question: 'What is the character for "Sorry"?',
        options: ['对不起', '请', '我'],
        answer: '对不起'
    },
    {
        question: 'What is the translation for 吃?',
        options: ['Eat', 'Drink', 'Water'],
        answer: 'Eat'
    },
    {
        question: 'What is the pinyin for 水?',
        options: ['shuǐ', 'hē', 'fàn'],
        answer: 'shuǐ'
    }
];

// Grammar lessons
const grammarLessons = [
    {
        title: 'Basic Sentence Structure',
        content: `
            <p>Chinese sentence structure is subject-verb-object (SVO), similar to English. For example:</p>
            <p>我 (wǒ) 吃 (chī) 饭 (fàn) - I eat rice.</p>
        `
    },
    {
        title: 'Questions with 吗',
        content: `
            <p>To turn a statement into a yes-no question, simply add the particle 吗 (ma) at the end:</p>
            <p>你好吗？(Nǐ hǎo ma?) - Are you good?</p>
        `
    },
    {
        title: 'The Particle 了',
        content: `
            <p>The particle 了 (le) indicates a completed action or a change of state. For example:</p>
            <p>我吃了饭 (Wǒ chīle fàn) - I have eaten.</p>
        `
    }
];

let currentCard = 0;
let showTranslation = false;

// Display flashcard
function displayFlashcard() {
    const flashcard = document.getElementById('flashcard');
    const word = vocabulary[currentCard];
    flashcard.innerHTML = `
        <p><strong>Character:</strong> ${word.character}</p>
        <p><strong>Pinyin:</strong> ${word.pinyin}</p>
        ${showTranslation ? `<p><strong>Translation:</strong> ${word.translation}</p>` : ''}
    `;
}

// Show next flashcard
function nextFlashcard() {
    currentCard = (currentCard + 1) % vocabulary.length;
    showTranslation = false;
    displayFlashcard();
}

// Toggle translation visibility
function toggleTranslation() {
    showTranslation = !showTranslation;
    displayFlashcard();
}

// Display vocabulary list
function displayVocabulary() {
    const vocabList = document.getElementById('vocab-list');
    vocabList.innerHTML = '';
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

// Display quiz questions
function displayQuiz() {
    const quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = '';
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
            `).join('<br>')}
        `;
        quizDiv.appendChild(questionDiv);
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', checkAnswers);
    quizDiv.appendChild(submitButton);
}

// Check quiz answers
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

// Display grammar lessons
function displayGrammar() {
    const grammarContent = document.getElementById('grammar-content');
    grammarContent.innerHTML = '';
    grammarLessons.forEach(lesson => {
        const lessonDiv = document.createElement('div');
        lessonDiv.classList.add('grammar-lesson');
        lessonDiv.innerHTML = `
            <h3>${lesson.title}</h3>
            ${lesson.content}
        `;
        grammarContent.appendChild(lessonDiv);
    });
}

// On document load
document.addEventListener('DOMContentLoaded', () => {
    displayVocabulary();
    displayQuiz();
    displayGrammar();
    displayFlashcard();
    document.getElementById('next-card').addEventListener('click', nextFlashcard);
    document.getElementById('toggle-translation').addEventListener('click', toggleTranslation);
});


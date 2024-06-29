const vocabulary = [
    { pinyin: 'nǐ hǎo', character: '你好', translation: 'Hello' },
    { pinyin: 'xièxiè', character: '谢谢', translation: 'Thank you' },
    // Add more vocabulary items here
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

document.addEventListener('DOMContentLoaded', displayVocabulary);


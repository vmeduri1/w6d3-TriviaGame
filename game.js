import { getClue as getClueFromPromise } from './promise-version.js'

document.getElementById('use-promise')
    .addEventListener('click', () => {
        getClueFromPromise()
            .then((clue) => {
                console.log(clue)
                document.getElementById('question').innerHTML = clue.question;
                document.getElementById('answer').innerHTML = clue.answer;
                document.getElementById('value').innerHTML = clue.value;
                document.getElementById('category-title').innerHTML = clue.category.title;
            })
    })

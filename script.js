
function showInfo(event) {
  event.target.disabled = true;
  const answer = document.getElementsByTagName('input')[0];
  if (answer.value.toLowerCase() === 'no') {
    const questionElement = document.getElementById('question-text');
    questionElement.classList.remove('hidden');

  } else {
    const textElement = document.getElementById('hidden-text');
    textElement.classList.remove('hidden');
  }

}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', showInfo);

});

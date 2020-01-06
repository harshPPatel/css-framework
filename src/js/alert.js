let textArea = document.getElementById('text-area');
let okButton = document.getElementById('ok-button');

textArea.style.display = 'block';

okButton.addEventListener('click', function() {
    textArea.style.display = 'none';
});

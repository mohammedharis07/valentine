const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you sureeeeeeeee?",
    "please shawtieee...",
    "Just think about it naaaa",
    "If you say no, Immaaa die from heartbreak...",
    "say yes pleaseeee...",
    "I am gonnaaa cryyyy...",
    "Ok fineee, i am done asking...",
    "Just kidding, say yes pleaseeee! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

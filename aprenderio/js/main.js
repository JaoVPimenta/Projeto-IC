document.addEventListener('DOMContentLoaded', () => {
    const cardLogic = document.getElementById('card-logic');
    const cardDesign = document.getElementById('card-design');

    if (cardLogic) {
        cardLogic.addEventListener('click', () => {
            window.location.href = 'aprenderio/ovas/logica01/index.html';
        });
    }

    if (cardDesign) {
        cardDesign.addEventListener('click', () => {
            alert("Design Lab em breve!");
        });
    }
});

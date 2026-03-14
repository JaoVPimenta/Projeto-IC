document.addEventListener('DOMContentLoaded', () => {
    const cardLogic = document.getElementById('card-logic');
    const cardGV = document.getElementById('card-gv');

    if (cardLogic) {
        cardLogic.addEventListener('click', () => {
            window.location.href = 'aprenderio/ovas/logica01/index.html';
        });
    }

    if (cardGV) {
        cardGV.addEventListener('click', () => {
            alert("Em breve!");
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    
    const logicQuestions = [
        { 
            question: "Qual a função principal do operador '<-' no VisuAlg?", 
            options: ["Comparar se dois valores são iguais", "Atribuir/armazenar um valor em uma variável", "Realizar uma subtração seguida de comparação", "Indicar o fim de um bloco de código"], 
            answer: 1 
        },
        { 
            question: "Qual comando é utilizado no VisuAlg para receber e armazenar um dado digitado pelo usuário no teclado?", 
            options: ["escreva()", "imprima()", "receba()", "leia()"], 
            answer: 3 
        },
        { 
            question: "Qual a saída do seguinte trecho:\n x <- 3\n y <- 2\n escreva(x * y + 1)", 
            options: ["5", "6", "7", "Erro"], 
            answer: 2 
        },
        { 
            question: "Um algorítmo pode ser definido como: ", 
            options: ["O hardware responsável por processar cálculos matemáticos.", "Uma sequência finita de passos bem definidos para resolver um problema.", "Um erro de execução que trava o sistema operacional.", "Uma linguagem de programação de alto nível como Java ou Python."], 
            answer: 1 
        },
        { 
            question: "O que será impresso?\n x <- 10\n se (x > 10) entao \nescreva('Maior')\n senao\n escreva('Menor ou Igual')\n fimse", 
            options: ["Maior", "Menor ou Igual", "Erro de sintaxe", "Nada"], 
            answer: 1 
        },
        { 
            question: "Qual estrutura de repetição no VisuAlg executa o bloco pelo menos uma vez antes de testar a condição de parada?", 
            options: ["enquanto...faca", "para...faca", "repita...ate", "se...entao"], 
            answer: 2 
        },
        { 
            question: "Quantas vezes a palavra 'Oi' será impressa no laço:\n para i de 1 ate 5 passo 2 faca\n escreval('Oi')\n fimpara", 
            options: ["2 vezes", "3 vezes", "4 vezes", "5 vezes"], 
            answer: 1 
        },
        { 
            question: "Qual é o operador utilizado no Portugol (VisuAlg) para representar 'diferente de'?", 
            options: ["!=", "==", "<>", "!=="], 
            answer: 2 
        },
        { 
            question: "Qual é o objetivo principal da indentação (recuo de texto) no código?", 
            options: ["Fazer o programa rodar mais rápido no processador.", "Melhorar a legibilidade e mostrar a hierarquia das estruturas.", "Criptografar o código para que ninguém o copie.", "Diminuir o tamanho do arquivo final do programa."], 
            answer: 1 
        },
        { 
            question: "Como declarar corretamente um vetor de 10 posições de números inteiros no VisuAlg?", 
            options: ["v: vetor[1..10] de inteiro", "vetor v[10] inteiro", "v: inteiro[10]", "vetor de inteiro v[1..10]"], 
            answer: 0 
        },
        { 
            question: "No trecho:\n x <- 0\n enquanto (x < 3) faca\n x <- x + 1\n fimenquanto\n Qual será o valor final da variável x?", 
            options: ["2", "3", "4", "0"], 
            answer: 1 
        },
        { 
            question: "Onde as variáveis devem ser obrigatoriamente declaradas em um algoritmo no VisuAlg?", 
            options: ["Após a palavra 'inicio'", "Dentro da seção 'var'", "No final do código", "Em qualquer lugar antes do uso"], 
            answer: 1 
        },
        { 
            question: "O que é recursividade em programação?", 
            options: ["O processo de copiar um algoritmo de um projeto para outro.", "Quando uma função chama a si mesma para resolver subproblemas.", "Um erro onde o computador desliga sozinho.", "Uma forma de escrever código que não pode ser lido por humanos."], 
            answer: 1 
        },
        { 
            question: "Na linguagem Portugol, a expressão lógica: (Falso OU Verdadeiro) E Verdadeiro, resulta em:", 
            options: ["Falso", "Verdadeiro", "Nulo", "Erro"], 
            answer: 1 
        },
        { 
            question: "Qual a principal diferença entre um compilador e um interpretador?", 
            options: ["Compiladores não detectam erros de sintaxe.", "O interpretador é sempre mais rápido que o compilador.", "O compilador traduz o código todo de uma vez, o interpretador traduz linha por linha durante a execução.", "Compiladores servem para jogos e interpretadores para sites."], 
            answer: 2 
        },
        { 
            question: "O que acontece em um laço 'repita...ate' se a condição de parada for verdadeira logo na primeira verificação?", 
            options: ["O laço executa infinitamente", "O bloco não é executado nenhuma vez", "O bloco é executado exatamente uma vez", "Gera erro de compilação"], 
            answer: 2 
        }
    ];

    const checkpoints = [
        { x: 13.5, y: 89.5 }, 
        { x: 24.5, y: 90.5 }, 
        { x: 29.5, y: 83.5 },
        { x: 25.5, y: 76.0 }, 
        { x: 33.5, y: 74.0 }, 
        { x: 40.5, y: 78.5 },
        { x: 46.5, y: 68.5 }, 
        { x: 53.5, y: 58.0 }, 
        { x: 60.0, y: 49.0 },
        { x: 69.5, y: 42.5 }, 
        { x: 63.5, y: 38.0 }, 
        { x: 58.5, y: 34.0 },
        { x: 64.5, y: 30.0 },
        { x: 74.0, y: 27.5 }, //
        { x: 68.0, y: 23.0 }, 
        { x: 61.5, y: 19.5 },
        { x: 67.5, y: 13.5 }
    ];

    let currentStep = 0;
    const robotMarker = document.getElementById('robot-marker');
    const robotBtn = document.getElementById('robot-btn');
    const quizOverlay = document.getElementById('quiz-overlay');

    // NOVO: Elementos da Fala
    const speechBubble = document.getElementById('robot-speech');
    const speechTextElement = document.getElementById('speech-text');

    // =========================================
    // FUNÇÃO DA ANIMAÇÃO DE INTRODUÇÃO (FALA)
    // =========================================
    function startIntroAnimation() {
        const message = "Olá, Recruta! Eu serei o seu guia nesta jornada pelo fascinante conhecimento dos Algoritmos. Clique em mim para começarmos!";
        const typingSpeed = 50; // milissegundos por letra

        // 1. Faz o balão aparecer com a animação CSS (classe .show)
        setTimeout(() => {
            speechBubble.classList.add('show');
            // Inicia o efeito de digitação após o balão abrir
            typeText(message, 0);
        }, 500); // Meio segundo após abrir a página
    }

    // Função recursiva para o efeito de máquina de escrever
    function typeText(text, index) {
        if (index < text.length) {
            // Adiciona a letra atual + o cursor piscante
            speechTextElement.innerHTML = text.substring(0, index + 1) + '<span class="typed-cursor">|</span>';
            
            // Chama a si mesma para a próxima letra após o delay
            setTimeout(() => {
                typeText(text, index + 1);
            }, 50); 
        } else {
            // Fim da digitação: Remove o cursor piscante
            speechTextElement.innerHTML = text;
            
            // Agenda para o balão sumir após o usuário ter tempo de ler (8 segundos)
            setTimeout(() => {
                speechBubble.classList.remove('show');
            }, 8000);
        }
    }

    // --- Outras Funções (updateMap e openQuiz permanecem quase iguais) ---

    function updateMap() {
        const pos = checkpoints[currentStep];
        robotMarker.style.left = `${pos.x}%`;
        robotMarker.style.top = `${pos.y}%`;
        document.getElementById('level-text').innerText = `${currentStep + 1}/${checkpoints.length}`;
        
        if (currentStep === checkpoints.length - 1) {
            robotBtn.innerHTML = '🏆<div class="robot-ping" style="background-color: #fbbf24;"></div>';
            robotBtn.style.backgroundColor = '#fbbf24';
            robotBtn.style.boxShadow = '0 5px 15px rgba(251, 191, 36, 0.6)';
            robotBtn.onclick = null;
            robotBtn.style.cursor = 'default';
        }
    }

    function openQuiz() {
        // NOVO: Se o usuário clicar no robô, o balão de intro deve sumir imediatamente
        speechBubble.classList.remove('show');

        const q = logicQuestions[currentStep % logicQuestions.length];
        document.getElementById('question-text').innerText = q.question;
        const container = document.getElementById('options-container');
        container.innerHTML = '';

        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option-btn';
            btn.innerHTML = `<div class="option-content"><span>${String.fromCharCode(65+i)}</span> <p>${opt}</p></div>`;
            btn.onclick = () => {
                if (i === q.answer) {
                    btn.classList.add('correct');
                    setTimeout(() => { currentStep++; updateMap(); quizOverlay.style.display = 'none'; }, 1000);
                } else {
                    btn.classList.add('wrong');
                }
            };
            container.appendChild(btn);
        });
        quizOverlay.style.display = 'flex';
    }

    // --- Inicialização ---
    robotBtn.onclick = openQuiz;
    document.getElementById('close-quiz').onclick = () => quizOverlay.style.display = 'none';
    
    updateMap();
    
    // NOVO: Dispara a animação de intro
    startIntroAnimation();
});
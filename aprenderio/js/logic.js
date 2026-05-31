document.addEventListener('DOMContentLoaded', () => {
    
    // DEFINIÇÃO DOS MÓDULOS DE CONHECIMENTO
    // Relaciona a categoria do banco de questões aos passos (checkpoints) do mapa.
    const modules = [
        { 
            id: 'comandosSimples', 
            name: "Comandos Simples", 
            startAt: 0, 
            endAt: 3, 
            intro: "MÓDULO 1: COMANDOS SIMPLES.<br><br>Olá, Recruta! Para dominar a lógica, primeiro precisamos entender os fundamentos e os comandos essenciais. Se errar, voltará para o início deste módulo. Vamos começar?" 
        },
        { 
            id: 'sequenciaLogica', 
            name: "Sequência Lógica", 
            startAt: 4, 
            endAt: 6, 
            intro: "MÓDULO 2: SEQUÊNCIA LÓGICA.<br><br>Excelente! Agora que sabe os comandos, precisa entender que a ordem deles muda tudo. Lembre-se: errar custa caro, você voltará ao início deste módulo!" 
        },
        { 
            id: 'condicional', 
            name: "Estrutura Condicional", 
            startAt: 7, 
            endAt: 10, 
            intro: "MÓDULO 3: ESTRUTURAS CONDICIONAIS.<br><br>E se o algoritmo precisar tomar decisões? Chegou a hora de usarmos o 'Se' (IF). Muita atenção nas ramificações!" 
        },
        { 
            id: 'repetitiva', 
            name: "Estrutura Repetitiva", 
            startAt: 11, 
            endAt: 12, 
            intro: "MÓDULO 4: LAÇOS DE REPETIÇÃO.<br><br>Cansado de escrever a mesma coisa várias vezes? Os loops vão te salvar. Mas cuidado para não entrar num laço infinito. Avance!" 
        },
        { 
            id: 'funcao', 
            name: "Funções", 
            startAt: 13, 
            endAt: 16, 
            intro: "MÓDULO 5: FUNÇÕES.<br><br>A etapa final! É hora de empacotar nosso código e criar blocos reutilizáveis. Mostre que você é um mestre da lógica!" 
        }
    ];

    // 17 Checkpoints para fechar a matemática (4 + 3 + 4 + 2 + 4)
    const checkpoints = [
        // Comandos Simples (0-3)
        { x: 13.5, y: 89.5 }, { x: 24.5, y: 90.5 }, { x: 29.5, y: 83.5 }, { x: 25.5, y: 76.0 }, 
        // Sequência Lógica (4-6)
        { x: 33.5, y: 74.0 }, { x: 40.5, y: 78.5 }, { x: 46.5, y: 68.5 }, 
        // Condicional (7-10)
        { x: 53.5, y: 58.0 }, { x: 60.0, y: 49.0 }, { x: 69.5, y: 42.5 }, { x: 63.5, y: 38.0 }, 
        // Repetitiva (11-12)
        { x: 58.5, y: 34.0 }, { x: 64.0, y: 30.0 }, 
        // Função (13-16)
        { x: 68.0, y: 23.0 }, { x: 61.5, y: 19.5 }, { x: 67.5, y: 13.5 }, { x: 73.0, y: 10.0 } // Adicionado checkpoint final
    ];

    let currentStep = 0;
    
    // Elementos da DOM
    const robotMarker = document.getElementById('robot-marker');
    const robotBtn = document.getElementById('robot-btn');
    const quizOverlay = document.getElementById('quiz-overlay');
    const introOverlay = document.getElementById('intro-overlay');
    const introTextElement = document.getElementById('intro-text');
    const btnStartGame = document.getElementById('btn-start-game');
    const introTitle = document.querySelector('.quiz-title h3');

    // Identifica em qual módulo o jogador está baseado no passo atual
    function getCurrentModule() {
        return modules.find(mod => currentStep >= mod.startAt && currentStep <= mod.endAt);
    }

    // =========================================
    // LÓGICA DA TELA DE INTRODUÇÃO (MÓDULOS)
    // =========================================
    function startIntroForModule(module) {
        introOverlay.style.display = "flex";
        introOverlay.style.opacity = "1";
        btnStartGame.style.opacity = "0";
        introTitle.innerText = "NOVA HABILIDADE DESBLOQUEADA";
        introTextElement.innerHTML = "";
        
        typeIntroText(module.intro, 0);
    }

    function typeIntroText(text, index) {
        // Ignorar tags HTML (como <br>) na digitação para não quebrar o layout
        if (text.substring(index, index + 4) === "<br>") {
            introTextElement.innerHTML += "<br>";
            setTimeout(() => typeIntroText(text, index + 4), 40);
            return;
        }

        if (index < text.length) {
            // Usa o conteúdo limpo e adiciona o cursor visual no fim
            const currentHTML = introTextElement.innerHTML.replace('<span class="typed-cursor">|</span>', '');
            introTextElement.innerHTML = currentHTML + text.charAt(index) + '<span class="typed-cursor">|</span>';
            setTimeout(() => typeIntroText(text, index + 1), 30);
        } else {
            const currentHTML = introTextElement.innerHTML.replace('<span class="typed-cursor">|</span>', '');
            introTextElement.innerHTML = currentHTML;
            btnStartGame.style.opacity = "1";
        }
    }

    btnStartGame.onclick = () => {
        introOverlay.style.opacity = "0";
        setTimeout(() => introOverlay.style.display = "none", 500);
    };

    // =========================================
    // ATUALIZAÇÃO DO MAPA
    // =========================================
    function updateMap(triggerIntro = false) {
        const pos = checkpoints[currentStep];
        robotMarker.style.left = `${pos.x}%`;
        robotMarker.style.top = `${pos.y}%`;
        document.getElementById('level-text').innerText = `${currentStep + 1}/${checkpoints.length}`;
        
        const currentModule = getCurrentModule();

        // Se o passo atual é exatamente o início de um novo módulo, dispara a introdução
        if (triggerIntro && currentStep === currentModule.startAt) {
            setTimeout(() => startIntroForModule(currentModule), 800); // Aguarda o robô andar antes de abrir a intro
        }
        
        // Fim de jogo
        if (currentStep === checkpoints.length - 1) {
            robotBtn.innerHTML = '🏆<div class="robot-ping" style="background-color: #fbbf24;"></div>';
            robotBtn.style.backgroundColor = '#fbbf24';
            robotBtn.onclick = null;
        }
    }

    // =========================================
    // LÓGICA DE SORTEIO E QUIZ
    // =========================================
    function openQuiz() {
        const currentModule = getCurrentModule();
        
        // Em qual etapa DENTRO do módulo estamos? (0, 1, 2, 3...)
        const stepWithinModule = currentStep - currentModule.startAt;
        
        // Pega o array de questões específico desta etapa no banco de questões
        const stageQuestions = bancoDeQuestoes[currentModule.id][stepWithinModule];
        
        // Sorteia UMA questão aleatória das 5 (ou mais) disponíveis nesta etapa
        const randomQuizIndex = Math.floor(Math.random() * stageQuestions.length);
        const q = stageQuestions[randomQuizIndex];

        document.getElementById('question-text').innerText = q.question;
        const container = document.getElementById('options-container');
        container.innerHTML = '';

        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option-btn';
            btn.innerHTML = `<div class="option-content"><span class="option-letter">${String.fromCharCode(65+i)}</span> <p>${opt}</p></div>`;
            
            btn.onclick = () => {
                // Desativa todos os botões após a resposta
                const allBtns = container.querySelectorAll('.quiz-option-btn');
                allBtns.forEach(b => b.onclick = null);

                if (i === q.answer) {
                    // ACERTOU
                    btn.classList.add('correct');
                    setTimeout(() => { 
                        currentStep++; 
                        updateMap(true); // O 'true' verifica se desbloqueou um módulo novo
                        quizOverlay.style.display = 'none'; 
                    }, 1200);
                } else {
                    // ERROU: Punição! Volta para o início do módulo atual
                    btn.classList.add('wrong');
                    
                    // Destaca a correta para ele aprender
                    allBtns[q.answer].classList.add('correct'); 
                    
                    setTimeout(() => { 
                        alert(`Resposta incorreta. Você retornará ao início do módulo: ${currentModule.name}. Revise seus conceitos!`);
                        currentStep = currentModule.startAt; 
                        updateMap(false); 
                        quizOverlay.style.display = 'none'; 
                    }, 2500);
                }
            };
            container.appendChild(btn);
        });
        
        quizOverlay.style.display = 'flex';
    }

    // Inicialização
    robotBtn.onclick = openQuiz;
    document.getElementById('close-quiz').onclick = () => quizOverlay.style.display = 'none';
    
    // Inicia o jogo na etapa 0 (dispara a intro inicial)
    updateMap(true);
});


//     const checkpoints = [
//         { x: 13.5, y: 89.5 }, 
//         { x: 24.5, y: 90.5 }, 
//         { x: 29.5, y: 83.5 },
//         { x: 25.5, y: 76.0 }, 
//         { x: 33.5, y: 74.0 }, 
//         { x: 40.5, y: 78.5 },
//         { x: 46.5, y: 68.5 }, 
//         { x: 53.5, y: 58.0 }, 
//         { x: 60.0, y: 49.0 },
//         { x: 69.5, y: 42.5 }, 
//         { x: 63.5, y: 38.0 }, 
//         { x: 58.5, y: 34.0 },
//         { x: 64.5, y: 30.0 },
//         { x: 74.0, y: 27.5 }, //
//         { x: 68.0, y: 23.0 }, 
//         { x: 61.5, y: 19.5 },
//         { x: 67.5, y: 13.5 }
//     ];
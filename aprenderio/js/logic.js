document.addEventListener('DOMContentLoaded', () => {
    
    // DEFINIÇÃO DOS MÓDULOS DE CONHECIMENTO
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

    const checkpoints = [
        { x: 13.5, y: 89.5 }, 
        { x: 23.5, y: 90.5 }, 
        { x: 28.5, y: 83.5 }, 
        { x: 25.5, y: 76.0 }, 
        { x: 33.5, y: 74.0 }, 
        { x: 40.5, y: 78.5 }, 
        { x: 46.5, y: 68.5 }, 
        { x: 53.5, y: 58.0 }, 
        { x: 60.0, y: 49.0 }, 
        { x: 68.0, y: 42.5 }, 
        { x: 63.5, y: 38.0 }, 
        { x: 58.5, y: 34.0 }, 
        { x: 64.5, y: 30.0 }, 
        { x: 74.0, y: 27.5 },
        { x: 68.0, y: 23.0 }, 
        { x: 61.5, y: 19.5 }, 
        { x: 67.5, y: 13.5 }, 
        { x: 73.0, y: 10.0 }
    ];

    let currentStep = 0;
    let isGlobalIntro = true; 
    
    // Elementos da DOM
    const robotMarker = document.getElementById('robot-marker');
    const robotBtn = document.getElementById('robot-btn');
    const quizOverlay = document.getElementById('quiz-overlay');
    const introOverlay = document.getElementById('intro-overlay');
    const introTextElement = document.getElementById('intro-text');
    const btnStartGame = document.getElementById('btn-start-game');
    const introTitle = document.getElementById('intro-title');
    
    // Elementos do Palco de Ação (Sprites)
    const actionRobot = document.getElementById('action-robot');
    const actionFeedback = document.getElementById('action-feedback');
    const terminalContainer = document.getElementById('terminal-container');

    // Inicializa o Robô do Mapa com o Sprite Estático Inicial
    robotBtn.classList.add('robot-map-preview');

    // GERENCIADOR DE SPRITES DO PALCO (QUIZ)
    const RobotController = {
        setIdle: () => {
            actionRobot.className = 'robot-sprite sprite-idle';
            actionFeedback.innerText = "Analisando dados...";
            actionFeedback.style.color = "#94a3b8";
        },
        setSuccess: () => {
            actionRobot.className = 'robot-sprite sprite-success';
            actionFeedback.innerText = "CÓDIGO COMPILADO COM SUCESSO!";
            actionFeedback.style.color = "#4ADE80";
        },
        setFail: () => {
            actionRobot.className = 'robot-sprite sprite-fail';
            actionFeedback.innerText = "ERRO DE COMPILAÇÃO!";
            actionFeedback.style.color = "#ef4444";
        }
    };

    function getCurrentModule() {
        return modules.find(mod => currentStep >= mod.startAt && currentStep <= mod.endAt);
    }

    // =========================================
    // LÓGICA DO EFEITO DA INTRODUÇÃO (DIGITAÇÃO)
    // =========================================
    function startTyping(text, onComplete) {
        introTextElement.innerHTML = "";
        let index = 0;
        
        function type() {
            if (text.substring(index, index + 4) === "<br>") {
                introTextElement.innerHTML += "<br>";
                index += 4;
                setTimeout(type, 40);
                return;
            }

            if (index < text.length) {
                const currentHTML = introTextElement.innerHTML.replace('<span class="typed-cursor">|</span>', '');
                introTextElement.innerHTML = currentHTML + text.charAt(index) + '<span class="typed-cursor">|</span>';
                index++;
                setTimeout(type, 30);
            } else {
                const currentHTML = introTextElement.innerHTML.replace('<span class="typed-cursor">|</span>', '');
                introTextElement.innerHTML = currentHTML;
                if (onComplete) onComplete();
            }
        }
        type();
    }

    function initGlobalIntro() {
        introTitle.innerText = "INICIALIZANDO SISTEMA...";
        introOverlay.style.display = "flex";
        introOverlay.style.opacity = "1";
        btnStartGame.style.opacity = "0";
        
        const globalIntroText = "Bem-vindo à Trilha dos Algoritmos, Recruta!<br><br>Eu sou o teu Robô Guia. O meu objetivo é ajudar-te a escalar esta montanha de conhecimento. Prepara-te para testar a tua lógica!";
        
        startTyping(globalIntroText, () => {
            btnStartGame.innerText = "INICIAR JORNADA";
            btnStartGame.style.opacity = "1";
        });
    }

    btnStartGame.onclick = () => {
        introOverlay.style.opacity = "0";
        setTimeout(() => {
            introOverlay.style.display = "none";
            
            if (isGlobalIntro) {
                isGlobalIntro = false;
                // Posiciona o robô pela primeira vez sem disparar animação de corrida longa
                const pos = checkpoints[currentStep];
                robotMarker.style.left = `${pos.x}%`;
                robotMarker.style.top = `${pos.y}%`;
                document.getElementById('level-text').innerText = `${currentStep + 1}/${checkpoints.length}`;
                
                // Abre a introdução específica do primeiro módulo
                startIntroForModule(getCurrentModule());
            }
        }, 500);
    };

    function startIntroForModule(module) {
        introOverlay.style.display = "flex";
        introOverlay.style.opacity = "1";
        btnStartGame.style.opacity = "0";
        introTitle.innerText = "NOVA HABILIDADE DESBLOQUEADA";
        
        startTyping(module.intro, () => {
            btnStartGame.innerText = "ESTOU PRONTO!";
            btnStartGame.style.opacity = "1";
        });
    }

    // =========================================
    // MOVIMENTAÇÃO DINÂMICA DO ROBÔ NO MAPA
    // =========================================
    function updateMap(triggerIntro = false) {
        const pos = checkpoints[currentStep];
        
        // 1. Muda o sprite para Correndo (GIF) antes do início do movimento
        robotBtn.classList.remove('robot-map-preview');
        robotBtn.classList.add('robot-map-run');
        
        // 2. Dispara a transição de posicionamento lento definida no CSS
        robotMarker.style.left = `${pos.x}%`;
        robotMarker.style.top = `${pos.y}%`;
        document.getElementById('level-text').innerText = `${currentStep + 1}/${checkpoints.length}`;
        
        // 3. Aguarda o término exato do percurso lento (2.5s) para voltar a ficar estático
        setTimeout(() => {
            robotBtn.classList.remove('robot-map-run');
            robotBtn.classList.add('robot-map-preview');
            
            // Lógica de abertura do popup de novas fases após a chegada do robô
            const currentModule = getCurrentModule();
            if (triggerIntro && currentModule && currentStep === currentModule.startAt) {
                startIntroForModule(currentModule);
            }
        }, 2500); 
        
        // Tratamento da linha de chegada / Vitória Máxima
        if (currentStep === checkpoints.length - 1) {
            setTimeout(() => {
                robotBtn.classList.remove('robot-map-preview', 'robot-map-run');
                robotBtn.style.backgroundImage = "none";
                robotBtn.innerHTML = '🏆';
                robotBtn.style.fontSize = '2.2rem';
                robotBtn.style.display = 'flex';
                robotBtn.style.justifyContent = 'center';
                robotBtn.style.alignItems = 'center';
                robotBtn.onclick = null;
            }, 2500);
        }
    }

    // =========================================
    // GERENCIAMENTO DA INTERFACE DO QUIZ
    // =========================================
    function openQuiz() {
        const currentModule = getCurrentModule();
        const stepWithinModule = currentStep - currentModule.startAt;
        const stageQuestions = bancoDeQuestoes[currentModule.id][stepWithinModule];
        const randomQuizIndex = Math.floor(Math.random() * stageQuestions.length);
        const q = stageQuestions[randomQuizIndex];

        // Reseta o palco lateral para a imagem de análise estática
        RobotController.setIdle();

        // Configuração estrutural do desafio
        document.getElementById('question-text').innerText = q.question;
        
        if (q.codigo) {
            terminalContainer.innerText = q.codigo;
            terminalContainer.style.display = "block";
        } else {
            terminalContainer.style.display = "none";
        }

        const container = document.getElementById('options-container');
        container.innerHTML = '';

        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option-btn';
            btn.innerHTML = `<div class="option-content"><span class="option-letter">${String.fromCharCode(65+i)}</span> <p>${opt}</p></div>`;
            
            btn.onclick = () => {
                const allBtns = container.querySelectorAll('.quiz-option-btn');
                allBtns.forEach(b => b.onclick = null); 

                if (i === q.answer) {
                    // ACERTOU: Transforma o robô lateral no GIF animado robot-idle
                    btn.classList.add('correct');
                    RobotController.setSuccess();
                    
                    // Delay para curtir a comemoração antes de fechar e andar no mapa
                    setTimeout(() => { 
                        currentStep++; 
                        updateMap(true); 
                        quizOverlay.style.display = 'none'; 
                    }, 2000); 
                } else {
                    // ERROU: Ativa filtro de erro no robô lateral
                    btn.classList.add('wrong');
                    allBtns[q.answer].classList.add('correct'); 
                    RobotController.setFail();
                    
                    setTimeout(() => { 
                        alert(`Erro de execução! Retornarás ao início do módulo: ${currentModule.name}. Reavalia os teus conceitos!`);
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

    robotBtn.onclick = openQuiz;
    document.getElementById('close-quiz').onclick = () => quizOverlay.style.display = 'none';
    
    // Inicia o Estado Inicial do Robô Guia
    initGlobalIntro();
});
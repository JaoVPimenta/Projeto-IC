// Banco de Questões - Aprender.IO (Versão VisuAlg 2.5)

const bancoDeQuestoes = {
    // ==========================================
    // NÍVEL 1: COMANDOS SIMPLES (4 Etapas/Checkpoints)
    // ==========================================
    comandosSimples: [
        // Etapa 1 (Muito Fácil)
        [
            { 
                question: "O que é um algoritmo?", 
                options: ["Um erro de hardware", "Uma sequência finita de passos lógicos para resolver um problema", "Uma peça de computador", "Um tipo de vírus"], 
                answer: 1 
            },
            { 
                question: "No VisuAlg, qual comando é usado para mostrar algo na tela do usuário?", 
                options: ["leia()", "escreva() / escreval()", "mostrar()", "imprimir()"], 
                answer: 1 
            },
            { 
                question: "O que é uma variável na programação?", 
                options: ["Um espaço na memória para guardar dados", "Um erro de código", "Um dispositivo externo", "Um comando de repetição"], 
                answer: 0 
            },
            { 
                question: "Selecione o tipo de dado correto no VisuAlg para armazenar o valor: 10", 
                options: ["Caractere (Texto)", "Logico (Booleano)", "Inteiro", "Real (Decimal)"], 
                answer: 2 
            },
            { 
                question: "Para que servem os comentários no código?", 
                options: ["Para deixar o código mais rápido", "Para documentar/explicar o código e não são lidos pelo computador", "Para corrigir erros automaticamente", "Para mudar a cor da tela"], 
                answer: 1 
            }
        ],
        // Etapa 2 (Fácil)
        [
            {
                question: "Analise o trecho de código abaixo. O que aparece na tela?",
                codigo: "a <- 5\nb <- 3\nescreval(a + b)",
                options: ["a+b", "53", "8", "Erro"],
                answer: 2
            },
            {
                question: "Se o código abaixo for executado, qual o tipo de dado da variável 'nome' no VisuAlg?",
                codigo: "nome <- \"Maria\"",
                options: ["Inteiro", "Logico", "Caractere", "Vazio"],
                answer: 2
            }
        ],
        // Etapa 3 (Intermediário)
        [
            { 
                question: "Analise o trecho de código abaixo. O que aparece na tela?", 
                codigo: "x <- 10\nx <- x + 5\nescreval(x)",
                options: ["10", "15", "x+5", "5"], 
                answer: 1 
            },
            { 
                question: "Analise o trecho de código abaixo. Qual o valor de c?", 
                codigo: "a <- 2\nb <- 4\nc <- a * b - 2",
                options: ["6", "4", "8", "0"], 
                answer: 0 
            }
        ],
        // Etapa 4 (Intermediário/Avançado - Transição)
        [
            { 
                question: "Analise o trecho de código abaixo. Qual o valor atual de b?", 
                codigo: "a <- 10 \nb <- a \na <- 5",
                options: ["10", "5", "15", "Erro"], 
                answer: 0 
            }
        ]
    ],

    // ==========================================
    // NÍVEL 2: SEQUÊNCIA LÓGICA (3 Etapas)
    // ==========================================
    sequenciaLogica: [
        // Etapa 1
        [
            { 
                question: "Por que a ordem dos comandos no Visualg importa?", 
                options: ["Não importa, o computador organiza sozinho", "Porque o código é lido e executado de cima para baixo", "Apenas para deixar o código bonito", "Para economizar energia"], 
                answer: 1 
            },
            { 
                question: "Se eu quero calcular a média de duas notas, qual a ordem lógica correta?", 
                options: ["Imprimir média -> Ler notas -> Somar e dividir", "Ler notas -> Imprimir média -> Somar", "Ler notas -> Somar e dividir -> Imprimir média", "Dividir -> Ler notas -> Somar"], 
                answer: 2 
            },
            { 
                question: "O que é 'Teste de Mesa'?", 
                options: ["Testar o hardware", "Bater na mesa quando o código não funciona", "Acompanhar a execução do algoritmo passo a passo manualmente anotando os valores", "Um tipo de variável do VisuAlg"], 
                answer: 2 
            }
        ],
        // Etapa 2
        [
            { 
                question: "Analise o algoritmo abaixo. Qual será o resultado exibido na tela, considerando a ordem de execução?", 
                codigo: "a <- 10\nb <- 5\nresultado <- a + b\na <- 20\nescreval(resultado)",
                options: ["25", "15", "20", "10"], 
                answer: 1 
            },
            { 
                question: "No trecho de código abaixo, qual a ordem em que os itens aparecem na tela?", 
                codigo: "escreval(\"A\")\nescreval(\"B\")\nescreval(\"C\")",
                options: ["C B A", "A C B", "A B C", "Apenas C"], 
                answer: 2 
            },
            { 
                question: "O que caracteriza uma estrutura sequencial?", 
                options: ["Comandos executados um após o outro, sem desvios", "Comandos que se repetem infinitamente", "Uso de várias funções", "Escolha de caminhos diferentes"], 
                answer: 0 
            },
            { 
                question: "Ao criar um algoritmo para calcular o dobro de um número, qual operação vem primeiro?", 
                options: ["Receber (ler) o número", "Multiplicar por 2", "Mostrar o resultado", "Zerar a variável"], 
                answer: 0 
            },
            { 
                question: "Um algoritmo pode ter dois inícios?", 
                options: ["Sim, sempre", "Sim, se for grande", "Não, todo algoritmo tem apenas um estado inicial e segue um fluxo", "Depende da linguagem"], 
                answer: 2 
            }
        ],
        // Etapa 3
        [
            { 
                question: "Analise o trecho de código abaixo. Qual será o valor final das variáveis 'a' e 'b' após a execução?",
                codigo: "a <- 1 \nb <- 2 \naux <- a \na <- b \nb <- aux",
                options: ["a=1, b=2", "a=2, b=1", "a=2, b=2", "a=1, b=1"], 
                answer: 1 
            },
            { 
                question: "Analise a ordem de execução do trecho abaixo. O que ocorre ao executá-lo?", 
                codigo: "escreval(nome)\nnome <- \"João\"",
                options: ["Imprime 'João'", "Erro ou falha, pois tentamos usar a variável antes de atribuir um valor a ela", "O programa pausa e espera", "Imprime um espaço em branco mágico"], 
                answer: 1 
            },
            { 
                question: "Qual a melhor definição para 'Fluxo de Execução'?", 
                options: ["A velocidade da internet", "O caminho que as instruções do programa seguem durante a execução", "A quantidade de memória RAM usada", "Um erro de repetição"], 
                answer: 1 
            },
            { 
                question: "Qual o operador utilizado para comparar se dois valores são DIFERENTES no VisuAlg?", 
                options: ["!=", "<>", "!==", "~="], 
                answer: 1 
            }
        ]
    ],

    // ==========================================
    // NÍVEL 3: ESTRUTURA CONDICIONAL (4 Etapas)
    // ==========================================
    condicional: [
        // Etapa 1: Conceitos Básicos (SE / SENAO)
        [
            { 
                question: "Qual a função principal de uma estrutura condicional?", 
                options: ["Repetir um código várias vezes", "Permitir que o programa tome decisões baseadas em condições", "Declarar variáveis", "Somar números"], 
                answer: 1 
            },
            { 
                question: "O que acontece se a condition testada em um 'SE' for FALSA e não houver um comando 'SENAO'?", 
                options: ["O programa trava", "O bloco dentro do SE é ignorado e o programa segue adiante após o FIMSE", "O programa volta ao início", "O computador desliga"], 
                answer: 1 
            },
            { 
                question: "Analise o trecho de código abaixo. Qual será a saída na tela?",
                codigo: "resultado <- (10 > 5)\nescreval(resultado)", 
                options: ["VERDADEIRO", "FALSO", "105", "Erro"], 
                answer: 0 
            },
            { 
                question: "O bloco 'SENAO' serve para:", 
                options: ["Executar quando a condição do SE for verdadeira", "Executar uma alternativa apenas se a condição do SE for falsa", "Criar um laço de repetição", "Parar o programa"], 
                answer: 1 
            },
            { 
                question: "Considere que a variável 'idade' possui o valor 18. Analise o trecho de código abaixo. O que será impresso na tela?", 
                codigo: "idade <- 18\nse (idade >= 18) entao \n   escreval(\"Maior\") \nfimse",
                options: ["Nada", "Menor", "Maior", "Erro de sintaxe"], 
                answer: 2 
            }
        ],
        // Etapa 2: Operadores Lógicos (E, OU, NAO)
        [
            { 
                question: "No VisuAlg, qual operador lógico exige que DUAS condições sejam verdadeiras ao mesmo tempo?", 
                options: ["OU", "NAO", "E", "DIF"], 
                answer: 2 
            },
            { 
                question: "O operador lógico OU retorna verdadeiro quando:", 
                options: ["Todas as condições são falsas", "Pelo menos uma das condições é verdadeira", "Nenhuma condição é testada", "As duas são verdadeiras apenas"], 
                answer: 1 
            },
            { 
                question: "O que faz o operador NAO no VisuAlg?", 
                options: ["Soma dois valores lógicos", "Inverte o valor lógico (Verdadeiro vira Falso e vice-versa)", "Multiplica a condição", "Cria um erro lógico"], 
                answer: 1 
            },
            { 
                question: "Analise a expressão lógica no trecho de código abaixo. O que será exibido na tela?",
                codigo: "teste <- (5 > 3) E (2 > 4)\nescreval(teste)",
                options: ["VERDADEIRO", "FALSO", "8", "Indeterminado"], 
                answer: 1 
            },
            { 
                question: "Analise o trecho de código abaixo. Qual será o resultado exibido na tela?",
                codigo: "chuva <- FALSO\nguarda_chuva <- VERDADEIRO\n\nse (chuva OU guarda_chuva) entao\n   escreval(\"Vou sair\")\nsenao\n   escreval(\"Fico em casa\")\nfimse",
                options: ["Fico em casa", "Vou sair", "Erro", "A tela ficará em branco"], 
                answer: 1 
            }
        ],
        // Etapa 3: Condicionais Encadeadas (SENAO SE)
        [
            { 
                question: "Quando usamos o 'SENAO SE' no VisuAlg?", 
                options: ["Quando queremos testar apenas uma condição", "Quando precisamos testar uma nova condição caso a anterior seja falsa", "Sempre no final do código", "Para substituir o SE principal"], 
                answer: 1 
            },
            { 
                question: "Em uma estrutura se / senao se / senao, quantos blocos de código são executados no máximo?", 
                options: ["Todos", "Dois", "Apenas um (o primeiro cuja condição for verdadeira, ou o senao)", "Nenhum"], 
                answer: 2 
            },
            { 
                question: "Analise o trecho de código abaixo utilizando estruturas condicionais encadeadas. Qual letra aparecerá na tela?", 
                codigo: "n <- 7 \nse (n < 5) entao \n   escreval(\"P\") \nsenao se (n < 8) entao \n   escreval(\"R\") \nsenao \n   escreval(\"A\") \nfimse",
                options: ["P", "R", "A", "Nenhuma"], 
                answer: 1 
            },
            { 
                question: "O que é o 'Aninhamento' de condicionais?", 
                options: ["Colocar uma estrutura SE dentro de outro bloco SE", "Excluir um SE", "Usar apenas SENAO", "Repetir o código em loop"], 
                answer: 0 
            },
            { 
                question: "Qual a ordem de avaliação das condições em um encadeamento 'se / senao se'?", 
                options: ["De baixo para cima", "Aleatória", "De cima para baixo", "Somente o último"], 
                answer: 2 
            }
        ],
        // Etapa 4: Casos Práticos e ESCOLHA/CASO
        [
            { 
                question: "A estrutura 'ESCOLHA ... CASO' é ideal para:", 
                options: ["Testar intervalos complexos (ex: x > 10 E x < 50)", "Testar múltiplas opções fixas e diretas de uma mesma variável", "Fazer repetições infinitas", "Somar textos"], 
                answer: 1 
            },
            { 
                question: "No VisuAlg, ao usar a estrutura ESCOLHA, é necessário usar um comando manual (como 'break') para impedir que ele leia os casos de baixo?", 
                options: ["Sim, senão ele executa todos os casos seguintes", "Não, o VisuAlg sai automaticamente da estrutura após executar o bloco do caso correspondente", "Apenas no último caso", "O comando 'pare' é obrigatório em todos os casos"], 
                answer: 1 
            },
            { 
                question: "Qual o papel da palavra 'OUTROCASO' na estrutura Escolha?", 
                options: ["Executar seu bloco se nenhum dos CASOS anteriores for atendido", "É o primeiro caso a ser lido", "Serve para declarar variáveis especiais", "Para finalizar o programa imediatamente"], 
                answer: 0 
            },
            { 
                question: "Analise o trecho de código abaixo. No VisuAlg, qual é a função do sinal de igual (=) dentro dos parênteses da condição?", 
                codigo: "se (x = 5) entao\n   escreval(\"Valor correto\")\nfimse",
                options: ["Atribuir o valor 5 à variável x", "Verificar a igualdade entre o valor de x e 5", "Indicar que x é diferente de 5", "Somar x com 5"], 
                answer: 1 
            }
        ]
    ],

    // ==========================================
    // NÍVEL 4: ESTRUTURA REPETITIVA (2 Etapas)
    // ==========================================
    repetitiva: [
        // Etapa 1: Fundamentos (ENQUANTO e PARA)
        [
            { 
                question: "Qual a principal utilidade de uma estrutura de repetição (Laço)?", 
                options: ["Evitar que o programa tome decisões", "Executar um bloco de código várias vezes sem precisar reescrevê-lo manualmente", "Criar variáveis globais", "Limpar a memória RAM"], 
                answer: 1 
            },
            {
                question: "No laço 'ENQUANTO', quando o código interno para de ser repetido?", 
                options: ["Assim que ele roda a primeira vez", "Quando a condição testada no topo se torna FALSO", "Quando o computador esquenta", "Quando a variável é deletada da memória"], 
                answer: 1 
            },
            { 
                question: "Se você sabe exatamente a quantidade de vezes que um bloco deve repetir (ex: de 1 até 10), qual laço é o mais indicado e direto no VisuAlg?", 
                options: ["SE", "ENQUANTO", "PARA", "ESCOLHA"], 
                answer: 2 
            },
            {
                question: "O que compõe a estrutura básica de declaração de um laço 'PARA' no VisuAlg?", 
                options: ["Apenas uma condição de parada", "Variável de controle, valor de Início e valor de Fim (até)", "Um comando de saída e um de entrada", "Apenas o nome da variável"], 
                answer: 1 
            },
            { 
                question: "Analise o laço de repetição abaixo. Quais valores serão impressos na tela?", 
                codigo: "i <- 0 \nenquanto (i < 3) faca \n   escreval(i) \n   i <- i + 1 \nfimenquanto",
                options: ["0, 1, 2, 3", "0, 1, 2", "1, 2, 3", "i, i, i"], 
                answer: 1 
            }
        ],
        // Etapa 2: Avançado (REPITA, PASSO e INTERROMPA)
        [
            { 
                question: "O que caracteriza um 'Loop Infinito' ou 'Laço Infinito'?", 
                options: ["Um laço que roda apenas 1000 vezes", "Um erro lógico onde a condição de parada nunca é atingida ou alterada", "Um laço que pula comandos automaticamente", "Um comando que fecha o programa"], 
                answer: 1 
            },
            { 
                question: "Qual a principal diferença da estrutura 'REPITA ... ATE' para o 'ENQUANTO' comum?", 
                options: ["O REPITA garante que o bloco execute ao menos UMA vez antes de testar a condição no final", "O REPITA é processado de trás para frente", "O REPITA não aceita uso de variáveis numéricas", "Não existe diferença na prática"], 
                answer: 0 
            },
            { 
                question: "Para que serve o comando 'INTERROMPA' dentro de um laço de repetição no VisuAlg?", 
                options: ["Para pausar o computador temporariamente", "Para interromper/quebrar o laço imediatamente e continuar o programa na linha após o laço", "Para recomeçar o laço do zero", "Para pular apenas uma linha de execução"], 
                answer: 1 
            },
            { 
                question: "Na estrutura 'PARA', o que indica a palavra reservada 'PASSO'?", 
                options: ["O fim do programa", "O valor de incremento ou decremento a cada volta do laço (ex: passo 2)", "Um erro de sintaxe detectado", "O início estrutural do laço"], 
                answer: 1 
            },
            { 
                question: "Analise o aninhamento de laços no trecho de código abaixo. Quantas vezes a palavra 'Oi' será impressa na tela no total?", 
                codigo: "para i de 1 ate 3 faca\n   para j de 1 ate 2 faca\n      escreval(\"Oi\")\n   fimpara\nfimpara",
                options: ["3 vezes", "2 vezes", "5 vezes", "6 vezes"], 
                answer: 3 
            }
        ]
    ],

    // ==========================================
    // NÍVEL 5: SUB-ROTINAS E FUNÇÕES (4 Etapas)
    // ==========================================
    funcao: [
        // Etapa 1: O que é e como invocar
        [
            { 
                question: "O que melhor define uma 'Sub-rotina' (Função ou Procedimento) na programação?", 
                options: ["Um erro cíclico no Windows", "Um bloco de código nomeado e reutilizável que executa uma tarefa específica", "Uma variável que guarda apenas números extensos", "Um tipo periférico de entrada"], 
                answer: 1 
            },
            { 
                question: "Como chamamos o ato de solicitar que uma sub-rotina seja executada pelo código principal?", 
                options: ["Deletar a rotina", "Invocar ou Chamar a rotina", "Instalar a dependência", "Repetir o escopo"], 
                answer: 1 
            },
            { 
                question: "Se uma função foi declarada com o nome 'calcularMedia()', como você a executa no corpo principal do VisuAlg?", 
                options: ["calcularMedia", "run calcularMedia", "calcularMedia()", "chamar.calcularMedia"], 
                answer: 2 
            },
            { 
                question: "Qual a principal vantagem da modularização (usar funções/procedimentos)?", 
                options: ["Deixar o código final mais longo e ilegível", "Evitar a repetição de código, facilitando o reuso e a manutenção", "Aumentar drasticamente o consumo de processador", "Não precisar declarar nenhuma variável"], 
                answer: 1 
            },
            { 
                question: "Podemos dizer que uma função funciona como uma 'máquina' que recebe insumos (parâmetros) e entrega um produto final (resultado)?", 
                options: ["Não, funções processam apenas textos puros", "Sim, é uma ótima analogia para o fluxo de dados em sub-rotinas", "Apenas se o computador tiver arquitetura 64 bits", "Isso só ocorre em linguagens orientadas a objetos"], 
                answer: 1 
            }
        ],
        // Etapa 2: Parâmetros e Argumentos
        [
            { 
                question: "O que são os 'Parâmetros' de uma função?", 
                options: ["Nomes dos arquivos salvos", "Variáveis definidas na assinatura da função que recebem os valores externos necessários para o seu trabalho", "Erros clássicos de sistema operacional", "Comandos embutidos de finalização"], 
                answer: 1 
            },
            { 
                question: "Na teoria formal, qual a diferença entre Parâmetro e Argumento?", 
                options: ["Não há diferença, são sinônimos idênticos", "Parâmetro é a variável na definição da rotina; Argumento é o valor real enviado no momento da chamada", "Argumento é uma mensagem de erro; Parâmetro é a solução", "Parâmetro armazena números; Argumento armazena textos"], 
                answer: 1 
            },
            { 
                question: "Analise a declaração da sub-rotina abaixo. Qual é o parâmetro recebido por este procedimento?", 
                codigo: "procedimento saudar(nome: caractere) \ninicio \n   escreval(\"Oi \", nome) \nfimprocedimento",
                options: ["saudar", "escreval", "nome", "\"Oi \""], 
                answer: 2 
            },
            { 
                question: "Uma função pode receber mais de um parâmetro na sua declaração (ex: a, b, c)?", 
                options: ["Não, é permitido apenas um por vez", "Sim, quantos forem necessários, devidamente separados por vírgula e com seus tipos definidos", "Apenas em funções puramente matemáticas", "Somente se todos compartilharem a mesma inicial"], 
                answer: 1 
            },
            { 
                question: "Analise o trecho de código onde uma função é definida e depois chamada. Qual valor será atribuído ao parâmetro 'y' dentro da função?", 
                codigo: "funcao soma(x, y: inteiro): inteiro\ninicio\n   retorne x + y\nfimfuncao\n\n// No corpo principal:\nresultado <- soma(2, 3)",
                options: ["2", "5", "3", "x"], 
                answer: 2 
            }
        ],
        // Etapa 3: Retorno e Procedimentos
        [
            { 
                question: "No VisuAlg, qual a diferença fundamental entre uma 'FUNCAO' e um 'PROCEDIMENTO'?", 
                options: ["Nenhuma, as palavras são intercambiáveis", "Uma FUNCAO obrigatoriamente devolve (retorna) um valor para o programa principal; o PROCEDIMENTO apenas executa comandos sem retornar valor", "O Procedimento é usado para cálculos matemáticos e a Função para exibir textos", "O Procedimento é mais rápido"], 
                answer: 1 
            },
            { 
                question: "Qual palavra-chave é utilizada dentro de uma FUNCAO para enviar o valor processado de volta a quem a chamou?", 
                options: ["sair", "retorne", "imprimir", "devolver"], 
                answer: 1 
            },
            { 
                question: "Qual a diferença entre usar 'escreval()' e 'retorne' dentro de uma sub-rotina?", 
                options: ["Nenhuma diferença prática", "Escreval apenas joga o texto na tela visualmente; Retorne entrega o dado na memória para ser armazenado ou calculado pelo programa", "Retorne exibe a janela de saída; Escreval guarda no HD", "Escreval finaliza a função"], 
                answer: 1 
            },
            { 
                question: "O que acontece com a execução do bloco de uma função logo após o comando 'retorne' ser lido?", 
                options: ["Ela continua rodando todos os comandos que estiverem abaixo", "Ela é encerrada e devolve o controle ao ponto onde foi chamada", "Ela entra em loop infinito", "Ela apaga as variáveis globais"], 
                answer: 1 
            },
            { 
                question: "Analise o código abaixo. Se chamarmos a função no código principal armazenando seu resultado em 'x', qual será o valor final de 'x'?", 
                codigo: "funcao triplo(n: inteiro): inteiro \ninicio \n   retorne n * 3 \nfimfuncao \n\n// No corpo principal:\nx <- triplo(4)",
                options: ["4", "7", "12", "3"], 
                answer: 2 
            }
        ],
        // Etapa 4: Escopo Global vs Local e Modularização
        [
            { 
                question: "O que é o 'Escopo Local' de uma variável?", 
                options: ["A variável pode ser acessada de qualquer lugar do código", "A variável é declarada dentro de uma sub-rotina e só existe/funciona durante a execução daquela sub-rotina", "A variável só funciona se não houver internet", "A variável não pode ter seu valor alterado"], 
                answer: 1 
            },
            { 
                question: "Em programação, uma sub-rotina (função) pode chamar outra sub-rotina?", 
                options: ["Sim, essa prática ajuda a dividir problemas complexos em partes menores", "Não, a linguagem proíbe por riscos de segurança", "Apenas se elas compartilharem as mesmas variáveis locais", "Sim, mas isso causará a formatação do disco"], 
                answer: 0 
            },
            { 
                question: "O que acontece se o programa principal tentar ler uma variável LOCAL que foi criada exclusivamente dentro de um procedimento?", 
                options: ["O valor retornado será sempre zero", "O programa ignora a instrução silenciosamente", "Ocorre um erro indicando que a variável não foi encontrada/declarada", "A variável é convertida para global instantaneamente"], 
                answer: 2 
            },
            { 
                question: "O que é uma função 'Recursiva' na ciência da computação?", 
                options: ["Uma função que recusa parâmetros incorretos", "Uma função estruturada que invoca a si mesma dentro de seu próprio bloco de código", "Uma função anônima", "Um procedimento sem declaração de fim"], 
                answer: 1 
            },
            { 
                question: "De acordo com o Princípio de Responsabilidade Única (boas práticas), uma função deve idealmente:", 
                options: ["Fazer o máximo de tarefas simultâneas possíveis para poupar linhas de código", "Ocupar no mínimo 1000 linhas textuais", "Ter um objetivo claro e fazer apenas uma única coisa muito bem feita", "Não possuir um nome descritivo"], 
                answer: 2 
            }
        ]
    ]
};
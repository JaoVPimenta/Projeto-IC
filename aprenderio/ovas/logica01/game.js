// --- VARIÁVEIS DE CONTROLE GLOBAL ---
let estado = "INTRO"; // Estados possíveis: INTRO, MAPA, JOGO
let faseLiberada = 1; // Controla o progresso do aluno (1 a 5)
let faseAtualJogo = 0; // Índice do array para saber qual pergunta carregar
let robo;
let botoes = []; // Guarda as áreas de clique das respostas

// --- BANCO DE DADOS DA JORNADA ---
let fases = [
  { 
    id: 1, nome: "Comandos Simples", x: 100, y: 350, 
    pergunta: "Qual o valor impresso no console?",
    codigo: "let saudacao = 'Olá Mundo';\nprint(saudacao);",
    opcoes: ["Olá Mundo", "saudacao", "Erro"], correta: 0
  },
  { 
    id: 2, nome: "Sequência Lógica", x: 250, y: 200, 
    pergunta: "Qual o valor final da variável 'x'?",
    codigo: "let x = 10;\nx = x + 5;\nx = x * 2;",
    opcoes: ["15", "30", "20"], correta: 1
  },
  { 
    id: 3, nome: "Condicionais", x: 450, y: 250,
    pergunta: "Qual palavra será impressa?",
    codigo: "let nota = 7;\nif (nota >= 6) {\n  print('Aprovado');\n} else {\n  print('Reprovado');\n}",
    opcoes: ["Aprovado", "Reprovado", "7"], correta: 0 
  },
  { 
    id: 4, nome: "Repetição", x: 600, y: 150, 
    bloqueado: true // Fases futuras (sem quiz por enquanto)
  },
  { 
    id: 5, nome: "Funções", x: 750, y: 250, 
    bloqueado: true
  }
];

// --- SETUP INICIAL ---
function setup() {
  let canvas = createCanvas(850, 500);
  canvas.parent('lg-placeholder'); // Joga o canvas dentro da div do HTML
  textFont('Chakra Petch');
  robo = new RoboGuia();
}

// --- LOOP PRINCIPAL DE DESENHO ---
function draw() {
  background(15, 23, 42); // Fundo padrão do projeto

  if (estado === "INTRO") {
    robo.apresentar("Olá! Eu sou seu Robô Guia.\nVou te ajudar a escalar a Montanha dos Algoritmos.\nVamos analisar como o computador pensa?");
  } 
  else if (estado === "MAPA") {
    desenharMapa();
    robo.exibirNoMapa();
  } 
  else if (estado === "JOGO") {
    desenharTerminal();
  }
}

// --- CLASSE DO ROBÔ ---
class RoboGuia {
  constructor() {
    this.x = fases[0].x;
    this.y = fases[0].y;
    this.img = '🤖'; // Representação simples. Pode ser trocada por uma imagem depois.
  }

  apresentar(texto) {
    // Desenha o robô grande no centro
    textSize(80);
    textAlign(CENTER, CENTER);
    text(this.img, width/2, height/2 - 80);
    
    // Caixa de diálogo
    fill(30, 41, 59);
    stroke(74, 222, 128); // Borda verde esmeralda
    strokeWeight(2);
    rectMode(CENTER);
    rect(width/2, height/2 + 60, 500, 120, 15);
    rectMode(CORNER);
    
    // Texto do diálogo
    noStroke();
    fill(255);
    textSize(18);
    text(texto, width/2, height/2 + 60);
    
    // Instrução
    fill(74, 222, 128);
    textSize(14);
    text("[ CLIQUE PARA COMEÇAR ]", width/2, height - 50);
  }

  exibirNoMapa() {
    // Animação suave para a posição atual liberada
    let alvoX = fases[faseLiberada - 1].x;
    let alvoY = fases[faseLiberada - 1].y;
    
    this.x = lerp(this.x, alvoX, 0.05);
    this.y = lerp(this.y, alvoY - 40, 0.05); // Fica um pouco acima do ponto
    
    textSize(40);
    textAlign(CENTER, CENTER);
    text(this.img, this.x, this.y);
  }
}

// --- FUNÇÕES DE INTERFACE ---
function desenharMapa() {
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(255);
  text("TRILHA DOS ALGORITMOS", width/2, 40);

  // 1. Desenhar as linhas de conexão
  strokeWeight(4);
  for (let i = 0; i < fases.length - 1; i++) {
    if (fases[i+1].id <= faseLiberada) {
      stroke(74, 222, 128); // Linha Verde (Liberado)
    } else {
      stroke(51, 65, 85); // Linha Cinza (Bloqueado)
    }
    line(fases[i].x, fases[i].y, fases[i+1].x, fases[i+1].y);
  }

  // 2. Desenhar os pontos (Nós)
  noStroke();
  for (let f of fases) {
    if (f.id <= faseLiberada) {
      fill(74, 222, 128); // Verde se chegou até aqui
    } else {
      fill(51, 65, 85); // Cinza se bloqueado
    }
    ellipse(f.x, f.y, 30, 30);
    
    // Nome da fase
    fill(255);
    textSize(14);
    text(f.nome, f.x, f.y + 35);
  }
}

function desenharTerminal() {
  let q = fases[faseAtualJogo];

  // Botão Voltar
  fill(255, 100, 100);
  textSize(14);
  textAlign(LEFT, TOP);
  text("< VOLTAR AO MAPA", 20, 20);

  // Tela do Terminal
  fill(30, 41, 59);
  rect(50, 60, width - 100, 200, 10);

  // Código a ser analisado
  fill(74, 222, 128);
  textSize(22);
  text(q.codigo, 70, 80);

  // Pergunta
  fill(255);
  textSize(18);
  textAlign(CENTER, TOP);
  text(q.pergunta, width/2, 290);

  // Botões de Resposta
  botoes = []; 
  let espaco = (width - 100) / q.opcoes.length;
  
  for (let i = 0; i < q.opcoes.length; i++) {
    let bx = 50 + (i * espaco);
    let by = 340;
    let bw = espaco - 20;
    let bh = 60;

    botoes.push({ x: bx, y: by, w: bw, h: bh, index: i });

    // Efeito Hover (passar o mouse)
    if (mouseX > bx && mouseX < bx + bw && mouseY > by && mouseY < by + bh) {
      fill(74, 222, 128); 
      rect(bx, by, bw, bh, 8);
      fill(0); // Texto preto no hover
    } else {
      fill(51, 65, 85);
      rect(bx, by, bw, bh, 8);
      fill(255); // Texto branco normal
    }

    textAlign(CENTER, CENTER);
    textSize(18);
    text(q.opcoes[i], bx + bw / 2, by + bh / 2);
  }
}

// --- LÓGICA DE CLIQUES ---
function mousePressed() {
  if (estado === "INTRO") {
    estado = "MAPA"; // Sai da intro e vai pro mapa
  } 
  else if (estado === "MAPA") {
    // Verifica se clicou em um ponto liberado do mapa
    for (let i = 0; i < fases.length; i++) {
      let f = fases[i];
      let distancia = dist(mouseX, mouseY, f.x, f.y);
      
      if (distancia < 30 && f.id <= faseLiberada && !f.bloqueado) {
        faseAtualJogo = i;
        estado = "JOGO";
      }
    }
  } 
  else if (estado === "JOGO") {
    // Verifica clique no botão de voltar
    if (mouseX > 20 && mouseX < 150 && mouseY > 20 && mouseY < 40) {
      estado = "MAPA";
      return;
    }

    // Verifica clique nas respostas
    let q = fases[faseAtualJogo];
    for (let btn of botoes) {
      if (mouseX > btn.x && mouseX < btn.x + btn.w && mouseY > btn.y && mouseY < btn.y + btn.h) {
        
        if (btn.index === q.correta) {
          // Acertou! Libera a próxima fase e volta pro mapa
          if (faseLiberada === q.id) {
            faseLiberada++; 
          }
          estado = "MAPA";
        } else {
          // Errou (Pode implementar um aviso na tela depois)
          console.log("Errou! Tente novamente.");
        }
      }
    }
  }
}
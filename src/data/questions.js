const data = [
  {
    level: "Fácil",
    questions: [
      {
        question: "O que é um Hardware?",
        options: ["Componente lógico de dispositivos computacionais.", "Um ambiente de desenvolvimento integrado.", "Componente físico de dispositivos computacionais.", "Método de transferência de mensagem para todos os receptores."],
        answer: "Componente físico de dispositivos computacionais.",
        tip: "Equipamento mecânico necessário para realização de uma determinada atividade.",
      },
      {
        question: 'O que significa a sigla "HTML"?',
        options: ["HOME TOTAL MODEL LANGUAGE", "HYPERTEXT MODEL LANGUAGE", "HYPERTEXT MARKUP LANGUAGE", "HOME TEXT MODEL LITERATURE"],
        answer: "HYPERTEXT MARKUP LANGUAGE",
        tip: "Com o HTML, os usuários podem criar e estruturar seções, parágrafos e links usando elementos, tags e atributos.",
      },
      {
        question: "O que é um Algoritmo?",
        options: ["Uma sequência de passos lógicos para solucionar um determinado problema.", "Tabelas de dados que fazem parte de um sistema de software.", "Linguagem de programação para desenvolvimento WEB.", "Um ambiente de desenvolvimento integrado, utilizado para criar aplicações."],
        answer: "Uma sequência de passos lógicos para solucionar um determinado problema.",
        tip: "São uma espécie de guia, para a solução de problemas matemáticos e computacionais.", 
      },
      {
        question: "Qual é a linguagem entendida pelo processador(CPU)?",
        options: ["Linguagem de Programação", "Linguagem de Máquina", "Linguagem Estruturada", "Linguagem JAVA"],
        answer: "Linguagem de Máquina",
        tip: "É a linguagem de baixo nível de entendimento pelo ser humano e a única, na verdade, entendida pelo processador.",
      },
      {
        question: "Quais são os principais dispositivos de entrada de dados?",
        options: ["Monitor e impressoras", "Projetor e alto-falantes", "Fone e caixas de som", "Teclado e mouse"],
        answer: "Teclado e mouse",
        tip: "A entrada de dados compõem o processo que consiste em receber os dados do mundo real (usuário).", 
      },
    ],
  },
  {
    level: "Médio",
    questions: [
      {
        question: "Para que serve um Banco de Dados?",
        options: ["Administrar as contas de pessoas que possuem cadastros em bancos.", "Resolver a falta de dados de um sistema e disponibilizar dados para preencherem assim que precisarem.", "Armazenar todos os dados de jogos de tabuleiro para poder serem jogados mais tarde.", "Agrupar dados sobre um mesmo assunto, armazenando-os para serem usados posteriormente."],
        answer: "Agrupar dados sobre um mesmo assunto, armazenando-os para serem usados posteriormente.",
        tip: "É uma coleção de dados inter-relacionados, representando informações sobre um domínio específico.",
      },
      {
        question: "O que é um IP?",
        options: ["Sigla para Internet Programing.", "Um endereço de protocolo da internet.", "Quando o processo entra em Deadlock.", "Número de conexões internet no mundo."],
        answer: "Um endereço de protocolo da internet.",
        tip: "Utilizada como identificador de uma máquina nos meios de Internet.",
      },
      {
        question: "Dentre as opções abaixo, qual a melhor alternativa define API?",
        options: ["É um conjunto de padrões, instruções e rotinas de programação que permitem o acesso às funcionalidades de um aplicativo por um outro software.", "É um padrão de componentes utilizados para criação de páginas WEB e a sigla significa Application Project interface.", "É um framework que analisa os componentes de projetos de interface e avalia o grau de interação com o usuário.", "É uma biblioteca de software Python gratuita para análise e tratamento de dados"],
        answer: "É um conjunto de padrões, instruções e rotinas de programação que permitem o acesso às funcionalidades de um aplicativo por um outro software.",
        tip: "É utilizada por forma externa.",
      },
      {
        question: "O que é o clock do processador (GPU) ?",
        options: ["Um espaço temporário de informações do sistema operacional e de aplicativos em uso.", " É um tipo de microprocessador especializado em processar gráficos em computadores pessoais.", "É um protocolo de envio de dados.", "É a velocidade de um processador de um computador em Hertz (Hz)."],
        answer: "É a velocidade de um processador de um computador em Hertz (Hz).",
        tip: "Define a quantidade de ciclos que o componente consegue realizar a cada segundo.",
      },
      {
        question: "O linux foi desenvolvido a partir de que Sistema Operacional?",
        options: ["Windows", "Mac0s", "Unix", "Minix"],
        answer: "Unix",
        tip: "o nome linux é a junção do nome do criador, Linus Torvalds, com um sistema desenvolvido em C que teve como um dos criadores o Dennis Ritchie.",
      },
    ],
  },
  {
    level: "Difícil",
    questions: [
      {
        question: "Escolha a alternativa que melhor define o conceito de Modelo OSI:",
        options: ["É um protocolo de transmissão que garante a chegada dos pacotes de informação ao computador destinatário", "É a camada responsável por definir o uso dos protocolos relacionados às aplicações", "É um modelo que padroniza a comunicação entre computadores e redes através de camadas", "É o modelo que define o endereçamento IP dos computadores que estão interligados em rede"],
        answer: "É um modelo que padroniza a comunicação entre computadores e redes através de camadas",
        tip: "Foi padronizado pela Organização Internacional de Normalização (ISO) para remover possíveis dificuldades de comunicação entre máquinas distintas.",
      },
      {
        question: "Qual melhor conceito se encaixa na definição de Inteligência artificial?",
        options: ["Sistemas ou máquinas que mimetizam a inteligência humana para executar tarefas  e podem se aprimorar iterativamente.", "É demonstrado por máquinas ao executar apenas tarefas simples e sem complexidade associadas a seres inteligentes.", "Uma inteligência limitada, similar à humana indo além da programação de ordens específicas para tomar decisões sem nenhum tipo de dado.", "A capacidade de dispositivos eletrônicos de funcionar de maneira que lembra o pensamento humano, sendo capaz de resolver qualquer coisa."],
        answer: "Sistemas ou máquinas que mimetizam a inteligência humana para executar tarefas  e podem se aprimorar iterativamente.",
        tip: "Tem seu aprendizado baseado na coleta de dados e informações. Pertence à computação e consiste na capacidade que máquinas (físicas, softwares e outros sistemas)",
      },
      {
        question: "Analisando as opções abaixo, quais as linguagem mais antigas em ordem (da esquerda para a direita)?",
        options: ["Javascript, C#, Assembly,Python, Rust", "C#, Python, Html,Java, Kotlin", "Swift,C++, Shell, Assembly", "Python,Java,Javascript,C#"],
        answer: "Python,Java,Javascript,C#",
        tip: "A mais antiga foi criada em 1991,mas só ganhou notoriedade a partir da facilidade com o desenvolvimento de machine learning. E a segunda mais antiga  recebe o nome de um tipo de café.",
      },
      {
        question: 'O computador interpreta uma linguagem baseada em bits como 0 e 1,ou seja, linguagem binária. A letra "Q" por exemplo se escreve em 01010001 já o número 2022 se escreve 11111100110.Deste modo, o número 126 em binário é:',
        options: ["1010101", "0000001", "1111110", "0101010"],
        answer: "1111110",
        tip: "O número 127 em binário é 1111111, já o 125 é 1111101.",
      },
      {
        question: "Os Frameworks são estruturas compostas por um conjunto de códigos genéricos que permite o desenvolvimento de sistemas e aplicações. Dentro do mercado existem vários frameworks bastante utilizados. Qual o framework das respectivas linguagens: JavaScript, Python, PHP, Java?",
        options: ["React JS, ASP.Net, Starvation, Java Lang", "React Native, Django, Laravel, Spring Boot", "Laravel, TensorFlow, Github, Udemy", "Pandas, Flask, CodeIgniter, Bootstrap"],
        answer: "React Native, Django, Laravel, Spring Boot",
        tip: "O primeiro é uma biblioteca criada pelo Facebook usada para desenvolver apps nos sistemas Android e IOS, já o segundo é um framework para desenvolvimento rápido para web, escrito em uma linguagem de alto nível.",
      },
    ],
  },
];

export default data;
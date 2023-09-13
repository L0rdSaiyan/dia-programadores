const makeVisible = () =>{

let content = document.getElementsByClassName("content")[0]
const body = document.body
content.style.display = 'none'
body.style.backgroundImage = "url('salesforcefundo2.png')"


// Cria o elemento <div> com a classe "content-after"
const divContentAfter = document.createElement("div");
divContentAfter.classList.add("content-after");

// Cria o elemento <p> dentro do <div>
const paragraph = document.createElement("p");
const textoParagrafo = "Caros colegas programadores, Hoje é o nosso dia! O Dia dos Programadores é uma data especial para celebrar o nosso trabalho árduo, dedicação e criatividade na construção de soluções incríveis. É um momento para reconhecermos o nosso papel fundamental no mundo da tecnologia.Cada linha de código que escrevemos, cada problema que resolvemos, e cada aplicativo que desenvolvemos contribuem para moldar o futuro. Somos os criadores de soluções que tornam a vida das pessoas mais fácil, a comunicação mais rápida e o mundo mais conectado.Nossas jornadas são repletas de desafios, mas também de conquistas incríveis. Continuamos aprendendo, crescendo e inovando. E, é claro, temos um senso de humor peculiar que só programadores entendem! Hoje, celebramos a nossa paixão por programar, a nossa busca pela excelência e o nosso compromisso com a resolução de problemas. Seja você um desenvolvedor de software, engenheiro de dados, designer de interface ou qualquer outra função relacionada à tecnologia, saiba que o seu trabalho é valioso e apreciado.Parabéns a todos nós, programadores! Vamos continuar a codificar o futuro e fazer do mundo um lugar melhor com a nossa criatividade e habilidades. Feliz Dia dos Programadores!";

paragraph.textContent = textoParagrafo
// Cria o elemento <video> dentro do <div>
const video = document.createElement("video");
video.src = "obrisguaido.mp4";
video.autoplay = true;

// Adiciona o <p> e o <video> ao <div>
divContentAfter.appendChild(paragraph);

// Adiciona o <div> ao elemento pai desejado (por exemplo, o <body>)
document.body.appendChild(divContentAfter);

}


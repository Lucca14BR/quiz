const perguntas = [
    {
      texto: "Qual é o planeta vermelho?",
      opcoes: ["Vênus", "Júpiter", "Marte"],
      certa: "Marte"
    },
    {
      texto: "Qual é o maior planeta?",
      opcoes: ["Terra", "Júpiter", "Netuno"],
      certa: "Júpiter"
    },
    {
      texto: "Qual planeta é o mais próximo do Sol?",
      opcoes: ["Marte", "Mercúrio", "Saturno"],
      certa: "Mercúrio"
    }
  ];
  
  let atual = 0;
  
  function carregarPergunta() {
    const p = perguntas[atual];
    document.getElementById("pergunta").textContent = p.texto;
  
    const opcoesDiv = document.getElementById("opcoes");
    opcoesDiv.innerHTML = "";
  
    p.opcoes.forEach(op => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="resposta" value="${op}"> ${op}`;
      opcoesDiv.appendChild(label);
      opcoesDiv.appendChild(document.createElement("br"));
    });
  
    document.getElementById("resultado").textContent = "";
    document.getElementById("animacao").style.display = "none";
  }
  
  function verificar() {
    const selecionado = document.querySelector('input[name="resposta"]:checked');
    if (!selecionado) {
      alert("Escolha uma resposta!");
      return;
    }
  
    const resposta = selecionado.value;
    const certa = perguntas[atual].certa;
  
    const resultado = document.getElementById("resultado");
    if (resposta === certa) {
      resultado.textContent = "✅ Acertou!";
      resultado.style.color = "lightgreen";
      mostrarAnimacao();
    } else {
      resultado.textContent = "❌ Errou!";
      resultado.style.color = "red";
    }
  
    // Vai para a próxima pergunta depois de 2 segundos
    setTimeout(() => {
      atual++;
      if (atual < perguntas.length) {
        carregarPergunta();
      } else {
        document.getElementById("quiz-box").innerHTML = "<h2>Quiz finalizado! 👏</h2>";
      }
    }, 2000);
  }
  
  function mostrarAnimacao() {
    const anim = document.getElementById("animacao");
    anim.style.display = "block";
    anim.style.animation = "none"; // reinicia a animação
    anim.offsetHeight; // força reflow
    anim.style.animation = "boom 0.8s ease-out forwards";
  }
  
  // Carrega a primeira pergunta ao abrir
  carregarPergunta();
  
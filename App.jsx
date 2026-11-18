**"Caminhos"** é uma escolha excelente! Fica com uma sonoridade orgânica, poética e encaixa-se perfeitamente na metáfora das raízes e ramificações da rede micelial.

Aqui tens o código atualizado com a expressão **"Rede Micelial de Caminhos"** aplicada no título e na interface, mantendo a estética lúdica, as cores do semáforo e a estrutura pronta para usares no teu projeto:

```jsx
import React, { useState } from 'react';

// Critérios inspirados nas dimensões do teste de profissões (PDF)
const questionData = [
  {
    id: 1,
    text: "🍄 Com o que prefere interagir no seu dia a dia profissional?",
    category: "Com o que trabalhar",
    options: [
      { text: "Pessoas, crianças, pacientes ou comunidades em colaboração", color: "green" },
      { text: "Livros, dados, textos e relatórios estruturados", color: "yellow" },
      { text: "Máquinas industriais pesadas ou burocracia estritamente financeira", color: "red" }
    ]
  },
  {
    id: 2,
    text: "🌿 Que tipo de atividade faz os seus olhos brilharem?",
    category: "Fazendo quê...",
    options: [
      { text: "Criar, desenhar, escrever, planejar e resolver problemas complexos", color: "green" },
      { text: "Organizar processos rotineiros e coordenar tarefas já estabelecidas", color: "yellow" },
      { text: "Trabalhos estritamente repetitivos sem autonomia de ação", color: "red" }
    ]
  },
  {
    id: 3,
    text: "✨ Em qual ambiente de trabalho se sente mais viva e produtiva?",
    category: "Onde trabalhar",
    options: [
      { text: "Ambiente descontraído, colaborativo, criativo ou home office flexível", color: "green" },
      { text: "Escritórios tradicionais com regras claras e estáveis", color: "yellow" },
      { text: "Ambientes altamente competitivos, rígidos e fechados", color: "red" }
    ]
  },
  {
    id: 4,
    text: "💡 O que mais deseja obter com o seu trabalho?",
    category: "O que deseja obter",
    options: [
      { text: "Autossatisfação, aprendizado contínuo, impacto social e liberdade", color: "green" },
      { text: "Estabilidade financeira e segurança a médio prazo", color: "yellow" },
      { text: "Acúmulo de status social ou competição constante", color: "red" }
    ]
  }
];

// Simulação da IA Generativa processando o semáforo de respostas
const simulateAIResponse = (answers) => {
  const greenCount = answers.filter(a => a === 'green').length;
  
  if (greenCount >= 3) {
    return "🍄 Perfil Rede Micelial Verde: Os seus caminhos apontam para uma forte afinidade com carreiras humanizadas, criativas e de alto impacto colaborativo (como Inovação Social, Gestão de Projetos Culturais, Comunicação e Educação). As suas raízes buscam propósito e liberdade de ação!";
  } else {
    return "🌿 Perfil Conector Equilibrado: Combina o pragmatismo das áreas estruturadas com a flexibilidade orgânica. Transições para áreas de estratégia, produtos, curadoria e design de processos são excelentes rotas para o seu momento profissional.";
  }
};

export default function MyceliumCaminhosQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [finalResult, setFinalResult] = useState(null);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const handleOptionSelect = (option) => {
    const newAnswers = [...userAnswers, option.color];
    setUserAnswers(newAnswers);

    if (currentStep < questionData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsEvaluating(true);
      setTimeout(() => {
        const result = simulateAIResponse(newAnswers);
        setFinalResult(result);
        setIsEvaluating(false);
      }, 1500);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setUserAnswers([]);
    setFinalResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A8D5E2] via-[#6C5B7B] to-[#2A1D34] text-[#F3ECF5] font-sans flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Efeitos visuais de esporos brilhantes */}
      <div className="absolute top-12 left-1/4 w-3 h-3 bg-green-300 rounded-full blur-[1px] animate-pulse"></div>
      <div className="absolute top-24 right-1/4 w-4 h-4 bg-yellow-300 rounded-full blur-[1px] animate-ping"></div>
      <div className="absolute bottom-20 left-10 w-3 h-3 bg-red-300 rounded-full blur-[1px]"></div>

      {/* Cabeçalho */}
      <header className="mb-8 text-center z-10 max-w-lg">
        <div className="inline-block px-4 py-1 mb-3 text-xs font-bold uppercase tracking-widest bg-[#F78888] text-white rounded-full shadow-md border border-white/30">
          MÉTODO DO SEMÁFORO • REDE MICELIAL
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#F3ECF5] font-serif mb-2 drop-shadow-md">
          🟢🟡🔴 Rede Micelial de Caminhos
        </h1>
        <p className="text-sm md:text-base text-[#F3ECF5]/90">
          Mapeie as suas rotas e transições profissionais através de escolhas conscientes.
        </p>
      </header>

      {/* Caixa Principal */}
      <main className="max-w-xl w-full bg-[#2A1D34]/90 backdrop-blur-md p-8 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] border-4 border-[#7E459B]/50 z-10 relative">
        
        {!finalResult && !isEvaluating ? (
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold tracking-wider text-[#F78888] uppercase bg-[#F78888]/20 px-3.5 py-1.5 rounded-xl border border-[#F78888]/40">
                {questionData[currentStep].category} ({currentStep + 1}/{questionData.length})
              </span>
              <div className="w-1/3 h-2.5 bg-[#1D1424] rounded-full overflow-hidden border border-[#7E459B]/30">
                 <div className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 transition-all duration-300" style={{ width: `${((currentStep + 1) / questionData.length) * 100}%` }}></div>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-bold mb-6 leading-snug text-[#F3ECF5]">
              {questionData[currentStep].text}
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {questionData[currentStep].options.map((option, index) => {
                let borderStyle = "border-[#7E459B]/40 hover:border-white";
                let bgStyle = "bg-[#1D1424]/80 hover:bg-[#7E459B]/30";
                let indicatorColor = "bg-gray-400";

                if (option.color === 'green') {
                  indicatorColor = "bg-green-500 shadow-[0_0_10px_#22c55e]";
                  borderStyle = "border-green-500/40 hover:border-green-400";
                  bgStyle = "bg-[#1D1424]/80 hover:bg-green-950/30";
                } else if (option.color === 'yellow') {
                  indicatorColor = "bg-yellow-400 shadow-[0_0_10px_#eab308]";
                  borderStyle = "border-yellow-500/40 hover:border-yellow-400";
                  bgStyle = "bg-[#1D1424]/80 hover:bg-yellow-950/30";
                } else if (option.color === 'red') {
                  indicatorColor = "bg-red-500 shadow-[0_0_10px_#ef4444]";
                  borderStyle = "border-red-500/40 hover:border-red-400";
                  bgStyle = "bg-[#1D1424]/80 hover:bg-red-950/30";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                    className={`w-full text-left p-5 rounded-2xl ${bgStyle} border-2 ${borderStyle} transition-all text-sm md:text-base font-medium group flex items-center justify-between shadow-md hover:shadow-lg cursor-pointer`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-4 h-4 rounded-full flex-shrink-0 ${indicatorColor}`}></span>
                      <span className="text-[#F3ECF5]">{option.text}</span>
                    </div>
                    <span className="text-xs uppercase tracking-wider font-bold text-white/70 group-hover:text-white transition-colors">
                      {option.color === 'green' ? '🟢 Verde' : option.color === 'yellow' ? '🟡 Amarelo' : '🔴 Vermelho'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : isEvaluating ? (
          <div className="text-center py-16">
            <div className="inline-block w-16 h-16 border-4 border-[#7E459B] border-t-[#F78888] rounded-full animate-spin mb-6"></div>
            <p className="text-xl text-[#F3ECF5] font-bold">A mapear os seus novos caminhos...</p>
            <p className="text-sm text-[#F3ECF5]/70 mt-2">Cruzando dados das dimensões profissionais...</p>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-4xl mb-3">🟢✨</div>
            <h2 className="text-2xl font-bold font-serif mb-4 text-[#F3ECF5]">Mapeamento de Caminhos Concluído</h2>
            <div className="p-6 bg-[#1D1424] border-2 border-green-500/60 rounded-2xl mb-6 text-left shadow-inner">
              <p className="text-base leading-relaxed text-[#F3ECF5] font-medium">{finalResult}</p>
            </div>
             <p className="text-xs text-[#F3ECF5]/60 mb-6 italic">Lembre-se: este é o resultado baseado na IA. A validação humana garante o alinhamento com a realidade!</p>
            <button
              onClick={resetQuiz}
              className="px-8 py-3.5 bg-[#F78888] hover:bg-[#F78888]/90 text-white font-bold rounded-2xl transition-all shadow-lg text-base inline-flex items-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>🔄</span> Explorar Outros Caminhos
            </button>
          </div>
        )}
      </main>

      <footer className="mt-12 text-center text-xs text-[#F3ECF5]/70 z-10 font-medium tracking-wide">
         Rede Micelial de Caminhos • Projeto Final Reprograma 🍄🌿
      </footer>
    </div>
  );
}

```

---

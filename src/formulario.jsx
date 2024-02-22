import React, { useState } from "react";

const Formulario = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado.toFixed(2));

    if (imcCalculado < 18.5) {
      setClassificacao("Abaixo do peso");
    } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
      setClassificacao("Peso normal");
    } else if (imcCalculado >= 25 && imcCalculado < 29.9) {
      setClassificacao("Sobrepeso");
    } else if (imcCalculado >= 30 && imcCalculado < 34.9) {
      setClassificacao("Obesidade grau 1");
    } else if (imcCalculado >= 35 && imcCalculado < 39.9) {
      setClassificacao("Obesidade grau 2");
    } else {
      setClassificacao("Obesidade grau 3");
    }
  };

  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <form>
        <div>
          <label>Altura (cm):</label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        <div>
          <label>Peso (kg):</label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <button type="button" onClick={calcularIMC}>
          Calcular
        </button>
      </form>
      {imc && (
        <div>
          <h3>Seu IMC é: {imc}</h3>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
};

export default Formulario;

import React, { useState } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import Result from './components/Result';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState(null);
  const [categoria, setCategoria] = useState(null);

  const calcularIMC = () => {
    if (peso && altura) {
      const pesoNum = parseFloat(peso);
      const alturaNum = parseFloat(altura);
      
      if (pesoNum > 0 && alturaNum > 0) {
        const imcCalculado = pesoNum / (alturaNum * alturaNum);
        const imcFormatado = imcCalculado.toFixed(1);
        
        setIMC(imcFormatado);
        
        // Determinar categoria
        if (imcCalculado < 18.5) {
          setCategoria('Abaixo do peso');
        } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
          setCategoria('Peso normal');
        } else if (imcCalculado >= 25.0 && imcCalculado <= 29.9) {
          setCategoria('Sobrepeso');
        } else {
          setCategoria('Obesidade');
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <InputForm 
          peso={peso}
          altura={altura}
          setPeso={setPeso}
          setAltura={setAltura}
          calcularIMC={calcularIMC}
        />
        
        <Result imc={imc} categoria={categoria} />
      </div>
    </div>
  );
};

export default App;
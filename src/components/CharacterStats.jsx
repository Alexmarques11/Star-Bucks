import React, { useState, useEffect } from 'react';

const CharacterStats = () => {
  // Inicializa o estado para cada estatística
  const [money, setMoney] = useState(0);
  const [blaster, setBlaster] = useState(0);
  const [saber, setSaber] = useState(0);
  const [charm, setCharm] = useState(0);

  // Efeito para ler as estatísticas do sessionStorage quando o componente é montado
  useEffect(() => {
    setMoney(parseInt(sessionStorage.getItem('money') || 0));
    setBlaster(parseInt(sessionStorage.getItem('blaster') || 0));
    setSaber(parseInt(sessionStorage.getItem('saber') || 0));
    setCharm(parseInt(sessionStorage.getItem('cuteness') || 0));
  }, []);

  return (
    <div className="CharacterStats">
      <div className="CharacterStatsContainer">
        <h2 id="CharacterStats" className="CharacterStatsHeader" align="center">Character Stats</h2>
        <p id="money" className="CharacterStatsParagraph" align="center">💰 Money: {money}</p>
        <p id="CharacterStats1" className="CharacterStatsParagraph" align="center">🔫 Blaster: {blaster}</p>
        <p id="CharacterStats2" className="CharacterStatsParagraph" align="center">🔦 Saber: {saber}</p>
        <p id="CharacterStats3" className="CharacterStatsParagraph" align="center">🐶 Charm: {charm}</p>
      </div>
    </div>
  );
};

export default CharacterStats;
import React, { useState } from 'react';

// import { Container } from './styles';

export default function TechList() {
  const [techs, setTechs] = useState([]);

  function addTech() {
    setTechs([ ...techs, 'Node.js' ]);
  }

  return (
    <div>
      <ul data-testid="tech-list">
        {techs.map(tech => <li key={tech}>{techs}</li>)}
      </ul>
      <button onClick={addTech}>Adicionar</button>
    </div>
  );
}

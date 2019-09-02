import React, { useState, useEffect } from 'react';

export default function TechList() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  useEffect(() => {
    const storedTechs = localStorage.getItem('techs');

    if (storedTechs) {
      setTechs(JSON.parse(storedTechs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs))
  }, [techs]);

  function addTech() {
    setTechs([ ...techs, newTech ]);
    setNewTech('');
  }

  return (
    <form onSubmit={addTech} data-testid="tech-form">
      <ul data-testid="tech-list">
        {techs.map(tech => <li key={tech}>{techs}</li>)}
      </ul>

      <label htmlFor="tech">Tech</label>
      <input id="tech" value={newTech} onChange={e => setNewTech(e.target.value)} />

      <button type="submit">Adicionar</button>
    </form>
  );
}
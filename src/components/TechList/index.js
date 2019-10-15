import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

export default function TechList() {
  const techs = useSelector(state => state.techs);
  const [newTech, setNewTech] = useState('');
  const dispatch = useDispatch();

  function addTech() {
    useDispatch({ type: 'ADD_TECH', payload: { tech: setNewTech } });
    setTechs([ ...techs, newTech ]);
    setNewTech('');
  }

  return (
    <form onSubmit={addTech} data-testid="tech-form">
      <ul data-testid="tech-list">
        {techs.map(tech => <li key={tech}>{tech}</li>)}
      </ul>

      <label htmlFor="tech">Tech</label>
      <input id="tech" value={newTech} onChange={e => setNewTech(e.target.value)} />

      <button type="submit">Adicionar</button>
    </form>
  );
}

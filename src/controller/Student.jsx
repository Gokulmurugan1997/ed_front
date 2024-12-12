import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Student() {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setWord(e.target.value);
  };

  const getMeaning = async () => {
    if (!word) {
      return;
    }

    try {

      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

      if (response.data && response.data[0] && response.data[0].meanings) {
        const definition = response.data[0].meanings[0].definitions[0].definition;
        setMeaning(definition);
        setError('');
      } else {
        setMeaning('');
        setError('No meaning found');
      }
    } catch (err) {
      setError('Error fetching meaning');
      setMeaning('');
    }
  };

  return (
    <div className='container2'>
      <div className='container3'>
      <h1>Student Dictionary</h1>
      <input
        type="text"
        value={word}
        onChange={handleInputChange}
        placeholder="Enter word"
      />
      <button onClick={getMeaning}>Get Meaning</button>
      <button onClick={()=>navigate('/home')}>Back</button>
      {meaning && <p><strong>Meaning:</strong> {meaning}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}

export default Student;

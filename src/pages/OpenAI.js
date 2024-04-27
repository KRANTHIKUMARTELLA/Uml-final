import React, { useState } from 'react';
import axios from 'axios';

const OpenAI = ({ apiKey }) => {
  const [generatedText, setGeneratedText] = useState('');

  const generateText = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci/completions',
        {
          prompt: 'Once upon a time,',
          max_tokens: 50,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          }
        }
      );
      setGeneratedText(response.data.choices[0].text);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={generateText}>Generate Text</button>
      <div>
        <h2>Generated Text:</h2>
        <p>{generatedText}</p>
      </div>
    </div>
  );
};

export default OpenAI;

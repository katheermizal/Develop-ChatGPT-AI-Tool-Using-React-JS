import {useState} from 'react';
import axios from 'axios';

import { Logo } from '../core/Logo';
import { SendButton } from '../core/SendButton';
import { Input } from '../core/Input';

import { Wrapper } from '../hoc/Wrapper';

export const Search = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // communicate with API
    // post input value 'prompt' to API end point 
    axios
      .post("http://localhost:5555/chat", { prompt })
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="flex flex-row px-4 py-2 h-20 bg-white/90 w-full mt-10 rounded-xl items-center mb-6">
        <Logo />
        <Input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <SendButton isLoading={loading}/>
      </form>
      
      {response && (
        <div className="border border-blue-300 shadow rounded-md p-4 w-full text-yellow-50">
          {response}
        </div>
      )}
    </Wrapper>
  );
}
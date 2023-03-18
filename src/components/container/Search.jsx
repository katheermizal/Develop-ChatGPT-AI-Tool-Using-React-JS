import {useState} from 'react';

import { Logo } from '../core/Logo';
import { SendButton } from '../core/SendButton';
import { Input } from '../core/Input';

import { Wrapper } from '../hoc/Wrapper';

import { SearchFromChatGPT } from '../../services/Search';

export const Search = () => {
  const [prompt, setPrompt] = useState(''); // initial state is empty string
  const [responseData, setResponseData] = useState(''); // initial state is empty string
  const [loading, setLoading] = useState(false); // initial state is false

  // form submit event 
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent from form reload

    // set the states when form is submit
    setLoading(true); 
    setResponseData('');

    // cmmunicating with api, and sent the prompt in the payload
    try {
      SearchFromChatGPT(prompt).then((response) => {
        // set the states once recived the response
        setResponseData(response.data);
        setLoading(false);
      });
    } catch (error) {
      // handle error __
      console.error(error?.response?.data); // NOTE - use "error.response.data` (not "error")
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="flex flex-row items-center w-full h-20 px-4 py-2 mt-10 mb-6 bg-white/90 rounded-xl">
        <Logo />
        <Input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <SendButton isLoading={loading}/>
      </form>
      
      {responseData && (
        <div className="w-full p-4 border border-blue-300 rounded-md shadow text-yellow-50">
          {responseData}
        </div>
      )}
    </Wrapper>
  );
}
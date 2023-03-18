import { SentIcon, LoaderIcon } from "./Icons";

export const SendButton = ({isLoading=false}) => {
 return (
  <button type="submit" className="inline-flex items-center justify-center w-10 h-10 bg-transparent rounded-full hover:bg-transparent">
   {!isLoading ? <SentIcon /> : <LoaderIcon /> }
  </button>
 );
};
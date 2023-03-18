import { SentIcon, LoaderIcon } from "./Icons";

export const SendButton = ({isLoading=false}) => {
 return (
  <button type="submit" class="inline-flex justify-center items-center w-10 h-10 rounded-full bg-transparent hover:bg-transparent">
   {!isLoading ? <SentIcon /> : <LoaderIcon /> }
  </button>
 );
};
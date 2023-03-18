export const Input = ({value, onChange}) => {
 return (
  <input
     type="text"
     value={value}
     onChange={onChange}
     placeholder="How can I help you ... ?"
     className="bg-transparent focus:bg-transparent outline-none focus:outline-none h-14 w-full text-lg text-gray-600 font-medium placeholder:text-slate-400 placeholder:text-lg"
   />
 );
};
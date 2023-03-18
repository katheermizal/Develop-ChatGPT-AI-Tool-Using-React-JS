export const Input = ({value, onChange}) => {
 return (
  <input
     type="text"
     value={value}
     onChange={onChange}
     placeholder="..."
     className="w-full text-lg font-medium text-gray-600 bg-transparent outline-none focus:bg-transparent focus:outline-none h-14 placeholder:text-slate-400 placeholder:text-lg"
   />
 );
};
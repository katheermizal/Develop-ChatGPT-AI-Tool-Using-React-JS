export const Wrapper = ({children}) => (
 <div className="bg-gradient-to-t from-cyan-500 to-blue-500 h-100vh w-100vw flex justify-center overflow-y-auto">
  <div className="flex flex-col max-w-4xl w-full">
  {children}
  </div>
 </div>
);
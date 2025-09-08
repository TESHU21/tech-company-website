export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-60 left-1/4 w-3 h-3 bg-green-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-80 right-1/3 w-5 h-5 bg-purple-500/20 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="absolute top-1/3 left-5 w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/2 right-10 w-4 h-4 bg-blue-500/30 rounded-full animate-float" style={{ animationDelay: '5s' }}></div>
      <div className="absolute top-2/3 left-1/5 w-3 h-3 bg-green-500/30 rounded-full animate-float" style={{ animationDelay: '6s' }}></div>
      
      {/* Floating squares */}
      <div className="absolute top-32 right-1/4 w-3 h-3 bg-primary/15 rotate-45 animate-float" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute top-72 left-1/3 w-4 h-4 bg-blue-500/15 rotate-45 animate-float" style={{ animationDelay: '4.5s' }}></div>
      <div className="absolute top-96 right-1/5 w-2 h-2 bg-green-500/15 rotate-45 animate-float" style={{ animationDelay: '6.5s' }}></div>
      
      {/* Floating triangles */}
      <div className="absolute top-48 left-1/6 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-primary/20 animate-float" style={{ animationDelay: '3.5s' }}></div>
      <div className="absolute top-64 right-1/6 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-blue-500/20 animate-float" style={{ animationDelay: '5.5s' }}></div>
    </div>
  );
}
import { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(12); // Modern standard is often 12+
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const passwordref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charactersAllowed) str += "!@#$%^&*()-+[{}]~`";
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charactersAllowed]);

  const copyPasswordtoclipboard = useCallback(() => {
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password);
    
    // Feedback animation
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charactersAllowed, passwordGenerator]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0f172a] text-slate-200 p-4">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] -z-10"></div>

      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-8">
        PassGuard
      </h1>

      <div className="w-full max-w-lg backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-3xl p-8 transition-all duration-300">
        
        {/* Password Display Area */}
        <div className="relative flex items-center bg-slate-900/50 rounded-2xl border border-white/5 p-2 mb-8 group">
          <input
            type="text"
            value={password}
            className="bg-transparent w-full py-3 px-4 text-xl font-mono text-emerald-400 outline-none tracking-wider"
            placeholder="Generating..."
            ref={passwordref}
            readOnly
          />
          <button
            onClick={copyPasswordtoclipboard}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 active:scale-95 ${
              isCopied 
              ? "bg-emerald-500 text-white" 
              : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20"
            }`}
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Controls Section */}
        <div className="space-y-6">
          {/* Length Slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-slate-400 font-medium uppercase text-xs tracking-widest">Length</label>
              <span className="text-blue-400 font-mono text-lg">{length}</span>
            </div>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Number Toggle */}
            <label className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl cursor-pointer hover:bg-white/10 transition-colors border border-transparent hover:border-white/10">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-slate-700 bg-slate-800 text-blue-500 focus:ring-blue-500/20 focus:ring-offset-0"
                defaultChecked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <span className="text-sm font-medium">Numbers</span>
            </label>

            {/* Characters Toggle */}
            <label className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl cursor-pointer hover:bg-white/10 transition-colors border border-transparent hover:border-white/10">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-slate-700 bg-slate-800 text-blue-500 focus:ring-blue-500/20 focus:ring-offset-0"
                defaultChecked={charactersAllowed}
                onChange={() => setCharactersAllowed((prev) => !prev)}
              />
              <span className="text-sm font-medium">Symbols</span>
            </label>
          </div>
        </div>

        {/* Footer Hint */}
        <p className="mt-8 text-center text-slate-500 text-xs">
          Securely generated in your browser.
        </p>
      </div>
    </div>
  );
};

export default App;
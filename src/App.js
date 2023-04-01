import './App.css';

function App() {
  return (
    <div className="text-center">
      <header className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-gray-800 w-1/3 rounded-2xl">
          <div className="text-white text-center text-5xl m-3">
              Calculator
          </div>

          <div className="flex flex-col rounded-lg bg-gray-600 m-3">
            <div className="text-white text-right">
              <span className="mr-2">.</span>
            </div>
    
            <div className="grow text-white text-right text-3xl">
              <span className="mr-2">..</span>
            </div>
          </div>

          <div className="flex items-stretch h-24">
            <div className="flex flex-1 justify-center items-center content-center text-white text-2xl">
              <button className="h-20 w-20 rounded-3xl bg-red-400 hover:bg-red-500" alt="Delete last number or operation">x</button>
            </div>
            <div className="flex flex-1 justify-center items-center content-center text-white text-2xl">
              <button className="h-20 w-20 rounded-3xl bg-gray-500 hover:bg-gray-600" alt="Open parentheses">(</button>
            </div>
            <div className="flex flex-1 justify-center items-center content-center text-white text-2xl">
              <button className="h-20 w-20 rounded-3xl bg-gray-500 hover:bg-gray-600" alt="Close parentheses">)</button>
            </div>
            <div className="flex flex-1 justify-center items-center content-center text-white text-2xl">
              <button className="h-20 w-20 rounded-3xl bg-gray-500 hover:bg-gray-600" alt="Split operation">/</button>
            </div>
          </div>
          
          <div className="flex items-stretch h-24">
            <div className="flex flex-1 justify-center items-center content-center text-white text-2xl">
              <button className="h-20 w-20 rounded-3xl bg-gray-400 hover:bg-gray-500" alt="Add number 7">7</button>
            </div>
            <div className="flex flex-1 justify-center items-center content-center text-white text-2xl">
              <button className="h-20 w-20 rounded-3xl bg-gray-400 hover:bg-gray-500" alt="Add number 8">8</button>
            </div>
            <div className="flex flex-1 justify-center items-center content-center text-white text-2xl">
              <button className="h-20 w-20 rounded-3xl bg-gray-400 hover:bg-gray-500" alt="Add number 9">9</button>
            </div>
            <div className="flex flex-1 justify-center items-center content-center text-white text-2xl">
              <button className="h-20 w-20 rounded-3xl bg-gray-500 hover:bg-gray-600" alt="Multiplication operation">*</button>
            </div>
          </div>

          <div className="flex items-stretch h-24">
            <div className="flex flex-1 justify-center items-center content-center text-white text-2xl">
              <button className="h-20 w-20 rounded-3xl bg-gray-400 hover:bg-gray-500" alt="Add number 4">4</button>
            </div>
            <div className="flex flex-1 justify-center items-center content-center text-white text-2xl">
              <button className="h-20 w-20 rounded-3xl bg-gray-400 hover:bg-gray-500" alt="Add number 5">5</button>
            </div>
            <div className="flex flex-1 justify-center items-center content-center text-white text-2xl">
              <button className="h-20 w-20 rounded-3xl bg-gray-400 hover:bg-gray-500" alt="Add number 6">6</button>
            </div>
            <div className="flex flex-1 justify-center items-center content-center text-white text-2xl">
              <button className="h-20 w-20 rounded-3xl bg-gray-500 hover:bg-gray-600" alt="Subtract operation">-</button>
            </div>
          </div>
          
          <div className="flex items-stretch h-24">
            <div className="flex flex-1 justify-center items-center content-center text-white text-2xl">
              <button className="h-20 w-20 rounded-3xl bg-gray-400 hover:bg-gray-500" alt="Add number 1">1</button>
            </div>
            <div className="flex flex-1 justify-center items-center content-center text-white text-2xl">
              <button className="h-20 w-20 rounded-3xl bg-gray-400 hover:bg-gray-500" alt="Add number 2">2</button>
            </div>
            <div className="flex flex-1 justify-center items-center content-center text-white text-2xl">
              <button className="h-20 w-20 rounded-3xl bg-gray-400 hover:bg-gray-500" alt="Add number 3">3</button>
            </div>
            <div className="flex flex-1 justify-center items-center content-center text-white text-2xl">
              <button className="h-20 w-20 rounded-3xl bg-gray-500 hover:bg-gray-600" alt="Addition operation">+</button>
            </div>
          </div>

          <div className="flex items-stretch h-24">
            <div className="flex flex-1 justify-center items-center content-center text-white text-2xl">
              <button className="h-20 w-20 rounded-3xl bg-red-400 hover:bg-red-500" alt="Delete all operation">C</button>
            </div>
            <div className="flex flex-1 justify-center items-center content-center text-white text-2xl">
              <button className="h-20 w-20 rounded-3xl bg-gray-400 hover:bg-gray-500" alt="Add number 0">0</button>
            </div>
            <div className="flex flex-1 justify-center items-center content-center text-white text-2xl">
              <button className="h-20 w-20 rounded-3xl bg-gray-400 hover:bg-gray-500" alt="Add comma">,</button>
            </div>
            <div className="flex flex-1 justify-center items-center content-center text-white text-2xl">
              <button className="h-20 w-20 rounded-3xl bg-blue-400 hover:bg-blue-500" alt="Calculate mathematical operation">=</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

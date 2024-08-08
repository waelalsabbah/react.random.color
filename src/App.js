/* import './App.css';
import randomColor from 'randomColor';
import { useState } from 'react';

export default function App() {
  const initialColor = randomColor();
  const [color, setColor] = useState(null);
  const hue = 240;
  const lightness = 75;
  return (
    <div className="App" style={{ backgroundColor: 'red' }}>
      <h1> Random Color Generator</h1>

      <div
        style={{
          fontSize: '20px',
          backgroundColor: `${color}`,
          width: '300px',
          height: '300px',
        }}
      >
        {color}
      </div>
      <button
        onClick={() => {
          const newColor = randomColor();

          setColor(newColor);
        }}
      >
        Generate
      </button>
    </div>
  );
}
 */
import './App.css';
import randomColor from 'randomColor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Random Color Generator</h1>

      <div
        className="text-lg font-medium mb-8 flex items-center justify-center rounded-lg"
        style={{
          backgroundColor: color || 'transparent',
          width: '300px',
          height: '300px',
          border: color ? 'none' : '2px dashed gray',
        }}
      >
        {color ? (
          <span className="text-white bg-black bg-opacity-75 p-2 rounded">
            {color}
          </span>
        ) : (
          <span className="text-gray-500">No color generated yet</span>
        )}
      </div>

      <button
        onClick={() => {
          const newColor = randomColor();
          setColor(newColor);
        }}
        className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-xl transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 animate-bounce"
      >
        Generate
      </button>
    </div>
  );
}

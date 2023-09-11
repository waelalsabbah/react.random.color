import randomColor from 'randomColor';
import { useState } from 'react';

export default function App() {
  const Initialcolor = randomColor();
  const [color, setColor] = useState('Generated Color');
  const hue = 240;
  const lightness = 75;
  return (
    <>
      <h1> Random Color Generator</h1>;
      <div
        style={{
          backgroundColor: `hsl(${hue}, 100%, ${lightness}%)`,
          width: '100px',
          height: '100px',
        }}
      >
        <br />
        {color}
      </div>
      <br />
      <button
        onClick={() => {
          const newColor = randomColor();
          setColor(newColor);
        }}
      >
        Generate
      </button>
    </>
  );
}

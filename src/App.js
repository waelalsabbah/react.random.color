import randomColor from 'randomColor';
import { useState } from 'react';

export default function App() {
  const Initialcolor = randomColor();
  const [color, setColor] = useState('#999');
  return (
    <>
      <h1> Random Color Generator</h1>;
      <div style={{ backgroundColor: '#72e3dc' }}>
        <br />
        {color}
      </div>
      <br />
      <input />
      <br />
      <button onClick={() => setColor('#fff')}>Generate</button>
    </>
  );
}

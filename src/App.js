import { useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import Navbar from './components/Navbar';
import useGenerateColors from './hooks/useGenerateColor';

function App() {
  const [selectedColor, setSelectedColor] = useState(localStorage.getItem('selectedColor') ? localStorage.getItem('selectedColor'): "#FFFFFFFF");
  const [colors] = useGenerateColors(18);

  return (
    <>
    <div className="w-100 h-100" style={{ backgroundColor: selectedColor}}>
      <Navbar />
      <h1>App React</h1>
      <Canvas colors={colors} setSelectedColor={setSelectedColor} />
    </div>
    </>
  );
}

export default App;

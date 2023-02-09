import { useState } from 'react';
import './App.css';
import TextArea from './components/TextArea';

function App() {
  const [codes, setCodes] = useState([])

  const copyToClipboard = () => {
    const copyText = document.getElementById("output");
    console.log({ copyText })

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.innerHTML);
  }

  return (
    <div className="App">
      <h1>Official Fuck Karuta App</h1>
      <h3>Just paste the fucking "kc" output here and I will give you the card codes with fucking commas</h3>
      <TextArea
        setCodes={setCodes}
      />

      <button style={{ width: '60%', height: 30 }} onClick={copyToClipboard}>Copy to fucking clipboard</button>
      <div id='output' style={{ width: '60%' }}>
        {codes.map(code => {
          return `${code},`
        })}
      </div>
      {/* <div>{codes}</div> */}
    </div>
  );
}

export default App;

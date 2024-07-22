import React, {useState} from "react";
import "./App.css";

const App = () => {
const [input,setInput] = useState("");
const [result,setResult] = useState(0);
const handler = e =>{
  setInput(e.target.value);
}

  return(
    <div>
      <center>
      <div className="border">
        <input className="input" type ="text" value={input} name="input" onChange={handler} />
        <p><button onClick = {() => setResult(eval(input))} className="output">Click here</button></p>
        <h4 className="Ans">Ans is : {result} </h4>

        <button onClick={() => setInput(input+'1')}>1</button>
        <button onClick={() => setInput(input+'2')}>2</button>
        <button onClick={() => setInput(input+'3')}>3</button>
        <button onClick={() => setInput(input+'+')}>+</button> <br/>

        <button onClick={() => setInput(input+'4')}>4</button>
        <button onClick={() => setInput(input+'5')}>5</button>
        <button onClick={() => setInput(input+'6')}>6</button>
        <button onClick={() => setInput(input+'-')}>-</button> <br/>

        <button onClick={() => setInput(input+'7')}>7</button>
        <button onClick={() => setInput(input+'8')}>8</button>
        <button onClick={() => setInput(input+'9')}>9</button>
        <button onClick={() => setInput(input+'*')}>*</button> <br/>

        <button onClick={() => setInput('')}>C</button>
        <button onClick={() => setInput(input+'0')}>0</button>
        <button onClick={() => setInput(input+'.')}>.</button>
        <button onClick={() => setInput(input+'/')}>/</button>
</div>
      </center>
    </div>
  )
}



export default App;



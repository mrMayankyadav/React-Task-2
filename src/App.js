import logo from './logo.svg';
import './Style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

function App() {
  const [inp, setInp] = useState("");
  const [result, setResult] = useState("");
  const oprt = ['/', '*', '-', '+', '.'];

  const updateCalc = (value) =>{
    if(oprt.includes(value) && inp === '')
      return;
    if(oprt.includes(value) && oprt.includes(inp.slice(-1)))
      return;

    setInp(inp + value);

    if(!oprt.includes(value))
    {
      setResult(eval(inp + value).toString());
    }
  }

  const calculate=()=>{
    setInp(eval(inp).toString());
  }

  const erase=()=>{
    if(inp === '')
      return;
    
      setInp(inp.slice(0, -1));
  }




  return (
    <div id="Body">
      <div id="box" class="container-fluid mx-auto">
        <div class="row" id="header">
        </div>
        <div class="row">
          <div id="display">
            <div id="small-disp">{result || ''}</div>
            <div id="big-disp">{inp || "0"}</div>
          </div>
        </div>

        <div class="row" id="btns">

          <div class="col-9" id="col-btn">
            <div class="row" id="row">
              <div class="col-3" id="col">
                <button onClick={()=>updateCalc('7')} >7</button>
              </div>
              <div class="col-3" id="col">
                <button onClick={()=>updateCalc('8')} >8</button>
              </div>
              <div class="col-3" id="col">
                <button onClick={()=>updateCalc('9')} >9</button>
              </div>
            </div>

            <div class="row" id="row">
              <div class="col-3" id="col">
                <button onClick={()=>updateCalc('4')} >4</button>
              </div>
              <div class="col-3" id="col">
                <button onClick={()=>updateCalc('5')} >5</button>
              </div>
              <div class="col-3" id="col">
                <button onClick={()=>updateCalc('6')} >6</button>
              </div>
            </div>

            <div class="row" id="row">
              <div class="col-3" id="col">
                <button onClick={()=>updateCalc('1')} >1</button>
              </div>
              <div class="col-3" id="col">
                <button onClick={()=>updateCalc('2')} >2</button>
              </div>
              <div class="col-3" id="col">
                <button onClick={()=>updateCalc('3')} >3</button>
              </div>
            </div>

            <div class="row" id="row">
              <div class="col-3" id="col">
                <button id="btn-bottom" onClick={()=>updateCalc('0')} >0</button>
              </div>
              <div class="col-3" id="col">
                <button onClick={()=>updateCalc('.')} >.</button>
              </div>
              <div class="col-3" id="col">
                <button onClick={calculate}>=</button>
              </div>
            </div>
          </div>

          <div class="col-3" id="col-operators">
            <button id="btn-operator" onClick={erase}>DEL</button>
            <button id="btn-operator" onClick={()=>updateCalc('/')} >/</button>
            <button id="btn-operator" onClick={()=>updateCalc('*')} >x</button>
            <button id="btn-operator" onClick={()=>updateCalc('-')} >-</button>
            <button id="btn-operator-bottom" onClick={()=>updateCalc('+')} >+</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

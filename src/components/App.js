import  React, {useState} from "react";

const App = () => {
    let [inputText, setInputText] = useState("");

    const buttonClick = (event) => {
        let clickedButton = event.target;
        let value = clickedButton.innerHTML;
        setInputText(inputText + value);
    }
    const ans = () => {
        let result = eval(inputText);
        setInputText(result);
    }
    const clear = () => {
        setInputText("");
    }
    return(
       <div className='calc-wrapper Calculator'>
        <input type="text" id="calci" className="calculator-input" value={inputText}/>
         <div className="buttons-container" id="btn-div">
            <button onClick={clear}>C</button>
            <button onClick={buttonClick}>/</button>
            <button onClick={buttonClick}>*</button>
            <button onClick={buttonClick}>-</button>
            
            <button onClick={buttonClick} id="btn-7">7</button>
            <button onClick={buttonClick} id="btn-8">8</button>
            <button onClick={buttonClick} id="btn-9">9</button>
            <button onClick={buttonClick} id="plus">+</button>

            <button onClick={buttonClick} id="btn-4">4</button>
            <button onClick={buttonClick} id="btn-5">5</button>
            <button onClick={buttonClick} id="btn-6">6</button>

            <button onClick={buttonClick} id="btn-1">1</button>
            <button onClick={buttonClick} id="btn-2">2</button>
            <button onClick={buttonClick} id="btn-3">3</button>
            <button onClick={ans} id="equal">=</button>
            <button onClick={buttonClick}>0</button>
            <button onClick={buttonClick}>.</button>
        </div>
       </div>
    )
}
export default App;

// done
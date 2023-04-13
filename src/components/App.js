
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
       <div>
        <input type="text" className="calculator-input" value={inputText}/>
         <div className="buttons-container">
            <button onClick={clear}>C</button>
            <button onClick={buttonClick}>/</button>
            <button onClick={buttonClick}>*</button>
            <button onClick={buttonClick}>-</button>
            
            <button onClick={buttonClick}>7</button>
            <button onClick={buttonClick}>8</button>
            <button onClick={buttonClick}>9</button>
            <button onClick={buttonClick} id="plus">+</button>

            <button onClick={buttonClick}>4</button>
            <button onClick={buttonClick}>5</button>
            <button onClick={buttonClick}>6</button>

            <button onClick={buttonClick}>1</button>
            <button onClick={buttonClick}>2</button>
            <button onClick={buttonClick}>3</button>
            <button onClick={ans} id="equals">=</button>
            <button onClick={buttonClick}>0</button>
            <button onClick={buttonClick}>.</button>
        </div>
       </div>
    )
}
export default App;
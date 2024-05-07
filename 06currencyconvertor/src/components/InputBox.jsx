import { useId } from "react";
import React from 'react'

function InputBox({     //takes two input from user label and className
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const ammountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}` }>
            <div className="w-1/2">
                <label htmlFor="ammounInputId" className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={ammountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange &&      //checks for change of amount
                    onAmountChange(Number(e.target.value))} //checks if onAmountchnage exists or not 
                    

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}                  //used for picking up currency type
                    onChange={(e)=>onCurrencyChange &&        //checks for change of amount
                    onCurrencyChange(Number(e.target.value))}      
                    disabled={currencyDisable}

                    >
                    {currencyOption.map((currency)=>(              //key needs to be passed while using loops in JSX
                        <option key={currency} value={currency}>    
                        {currency}
                        </option>
                    ))}
                        
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
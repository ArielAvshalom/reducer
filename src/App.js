// constructor(props){
//     super(props)
//     this.state = {count : 0}
// }

import React, {useState} from "react";
function Counter(){
    const [count, setCount] = useState(0)
    function changeCount(amount){
        setCount(prevCount => prevCount + amount)
    }
    function resetCount(){
        //todo reset/update the state
        setCount(0)
    }
    return (
        <>
            <button onClick={() => changeCount(1)}>+</button>
            <span>{count}</span>
            <button onClick={() => changeCount(-1)}>-</button>
            <button onClick={() => resetCount()}>Reset</button>
        </>
    )
}

export default Counter
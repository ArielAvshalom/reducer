import React, {useReducer, useState} from 'react'
//here is how we make a usereducer hook
//const [count, dispatch] = useReducer(reducer, 0)

function reducer(count, action){
    switch (action.type) {
        case 'increment':
            return count + 1
        case 'decrement':
            return count - 1
        case 'reset':
            return 0
        case 'change-count':
            return count + action.payload.amount
        case 'change-count-divide':
            return count / action.payload.amount
        case 'change-count-multiply':
            return count * action.payload.amount
        default:
            return count
    }
}


function Counter2(){

    const [count, dispatch] = useReducer(reducer, 0)

    // function changeCount(amount){
    //     setCount(prevCount => prevCount + amount)
    // }
    // function resetCount(){
    //     //todo reset/update the state
    //     setCount(0)
    // }
    return (
        // <>
        //     <button onClick={() => changeCount(1)}>+</button>
        //     <span>{count}</span>
        //     <button onClick={() => changeCount(-1)}>-</button>
        //     <button onClick={() => resetCount()}>Reset</button>
        // </>

        <>
            <br></br>
            <p>The count is rounded in this example. Note the actual count is different than what is displayed by the button.</p>
            <p>Actual count: {count}</p>
            <p>You can also round using the toFixed method for Numbers. To avoid trailing zeros do this: {+count.toFixed(2)}</p>

            <button onClick={() => {
                dispatch({type: 'change-count-divide', payload : {amount : 6} })
            }}>divide by 6
            </button>
            <button onClick={() => dispatch({type: 'increment'})}>
                +</button>

            <span>{Math.round(count)}</span>

            <button onClick={() => dispatch({type: 'decrement'})}>
                -</button>

            <button onClick={() => {
                dispatch({type: 'change-count-multiply', payload : {amount : -7} })
            }}>multiply -7
            </button>

            <button onClick={() => dispatch({type: 'reset'})}>
                Reset</button>

        </>
    )
}

export default Counter2
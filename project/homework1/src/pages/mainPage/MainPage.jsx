// import React from "react";
// import { useDispatch, useSelector } from "react-redux";


// const MainPage = () => {

//     const minusOne = useSelector(state => state.schetchik)
//     // const plusOne = useSelector(state => state.btn2)
//     // const reset = useSelector(state => state.btn3)
//     // const minusTen = useSelector(state => state.btn4)
//     // const plusTen = useSelector(state => state.btn5)

//     const dispatch = useDispatch()

//     const counter = () => {
//         dispatch({
//             type: 'SUBTRACT_ONE'
//         })
//     }

//     return (
//         <div>
//             <h1>{schetchik}</h1>
//             <button onClick={counter}>{counter}subtract</button>
//             {/* <button onClick={counter}>+{plusOne}</button>
//             <button onClick={counter}>{reset}</button>
//             <button onClick={counter}>{minusTen}</button>
//             <button onClick={counter}>+{plusTen}</button> */}
//         </div>
//     )
// }
// export default MainPage;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
const MainPage = () => {
    const schetchik = useSelector(state => state.schetchik);
    const dispatch = useDispatch();

    const subtractOne = () => {
        dispatch({
            type: 'SUBTRACT_ONE',
            
        });
    };
    const plusOne = () => {
        dispatch({
            type: 'PLUS_ONE'
        })
    };
    const reset = () => {
        dispatch({
            type: 'RESET'
        })
    };
    const plusTen = () => {
        dispatch({
            type: 'PLUS_TEN'
        })
    }
    const subtractTen = () => {
        dispatch({
            type: 'SUBTRACT_TEN'
        })
    }

    return (
        <div>
            <h1>{schetchik}</h1>
            <button onClick={subtractOne}>Subtract one</button>
            <button onClick={plusOne}>Plus one</button>
            <button onClick={reset}>Reset</button>
            <button onClick={plusTen}>Plus ten</button>
            <button onClick={subtractTen}>Subtract ten</button>
        </div>
    );
};

export default MainPage;
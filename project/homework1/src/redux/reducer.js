// const initialState = {
//     schetchik: 10,
    
// }
// export default function reducer(state = initialState.schetchik, action) {
    
//     if(action.type === 'SUBTRACT_ONE') {
//         return (
//             {...state, schetchik: state.schetchik -1,}
//         )
//     }

//     return state
// }

const initialState = {
    schetchik: 5,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SUBTRACT_ONE':
            return {
                ...state,
                schetchik: state.schetchik > 0 ? state.schetchik - 1 : state.schetchik,
            };

        case 'PLUS_ONE':
            return {
            ...state, 
            schetchik: state.schetchik + 1

        }; 
        case 'RESET':
            return {
                ...state,
                schetchik: state.schetchik = 0
            }
        case 'PLUS_TEN':
            return {
                ...state,
                schetchik: state.schetchik + 10
            }
        case 'SUBTRACT_TEN':
            return {
                ...state,
                schetchik: state.schetchik >= 10 ? state.schetchik - 10 : 0
            }
        default:
            return state;
    }


      
    
}


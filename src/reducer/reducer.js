const initState = {
    count : 10
}


const reducer = (state = initState , action) => {
    if ( action.type === "increase"){
        return { count: state.count + 1 }
    } else if ( action.type === "decrease"){
        return { count: state.count - 1 }
    }


    return state ;
}


export default reducer;
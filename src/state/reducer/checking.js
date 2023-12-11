const reducer = (state=0,action)=>{
    if(action.payload > 0){
        console.log(action.payload)
        return 1
    }
    else if(action.payload === 0){
        console.log(action.payload)
        return 0
    }
    else{
    console.log(action.payload)
    return -1
    }

    
}
export default reducer
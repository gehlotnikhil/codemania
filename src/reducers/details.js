const details = (state="",action)=>{
    console.log(action);
    switch(action.type){
        case "naming":    console.log("true")
                            return action.payload;
            break;
        default:  console.log("false")
                 return state;
    }

}

export default details
const initialState = 10
const getQuestion = async() => {
    //API CALL
    const response = await fetch(`http://localhost:5000/api/question/getallquestion`, {
     method: "GET",
     headers: {
       "Content-Type": "application/json" 
        }
   });
   
   const json = await response.json();
   console.log(typeof json,"json-",json)
   return json
 }
const changeTheNumber = (state = initialState,action)=>{

    
    switch(action.type){
        
        case "INCREMENT": return state+action.payload;
        break;
        case "DECREMENT": return state-action.payload;
        break;
        default :return state;
    }
}

export default changeTheNumber
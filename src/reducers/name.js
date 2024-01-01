const initializeState = {
    id: "",
    token: "",
    name: "",
    username: "",
    institude: "",
    email: "",
    mobile: "",
    address: "",

    originalName: "",
    originalusername: "",
    originalinstitude: "",
    originalemail: "",
    originalmobile: "",
    originaladdress: "",

}
const name = (state = initializeState, action) => {
    console.log(action);
    switch (action.type) {
        case "id":
            console.log("id-true");
            state = { ...state, "id": action.payload }
            return state;
            break;
        case "token":
            console.log("token-true");
            state = { ...state, "token": action.payload }
            return state;
            break;
        case "name":
            console.log("name-true");
            state = { ...state, "name": action.payload }
            return state;
            break;
        case "username":
            console.log("username-true");
            state = { ...state, "username": action.payload }
            return state;
            break;
        case "institude":
            console.log("institude-true");
            state = { ...state, "institude": action.payload }
            return state;
            break;
        case "email":
            console.log("email-true");
            state = { ...state, "email": action.payload }
            return state;
            break;
        case "mobile":
            console.log("mobile-true");
            state = { ...state, "mobile": action.payload }
            return state;
            break;
        case "address":
            console.log("address-true");
            state = { ...state, "address": action.payload }
            return state;
            break;
        case "originalName":
            console.log("o-name-true");
            state = { ...state, "originalName": action.payload }
            return state;
            break;
        case "originalusername":
            console.log("o-originalusername-true");
            state = { ...state, "originalusername": action.payload }
            return state;
            break;
        case "originalinstitude":
            console.log("o-originalinstitude-true");
            state = { ...state, "originalinstitude": action.payload }
            return state;
            break;
        case "originalemail":
            console.log("o-originalemail-true");
            state = { ...state, "originalemail": action.payload }
            return state;
            break;
        case "originalmobile":
            console.log("o-originalmobile-true");
            state = { ...state, "originalmobile": action.payload }
            return state;
            break;
        case "originaladdress":
            console.log("o-originaladdress-true");
            state = { ...state, "originaladdress": action.payload }
            return state;
            break;
            
        default:
            console.log("false");
            return state;
            break;
    }

}

export default name
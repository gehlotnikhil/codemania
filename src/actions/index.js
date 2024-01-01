export const incNumber = (num)=>{
    return {
        type:"INCREMENT",
        payload:num
    }
}
export const decNumber = (num)=>{
    return {
        type:"DECREMENT",
        payload:num
    }
}
export const initializeState = ()=>{
    return {
        type:"INITIALIZE",
    }
}



export const Sid = (set)=>{
    return {
        type:"id",
        payload: set
    }
}
export const Stoken = (set)=>{
    return {
        type:"token",
        payload: set
    }
}
export const Sname = (set)=>{
    return {
        type:"name",
        payload: set
    }
}
export const Susername = (set)=>{
    return {
        type:"username",
        payload: set
    }
}
export const Sinstitude = (set)=>{
    return {
        type:"institude",
        payload: set
    }
}
export const Semail = (set)=>{
    return {
        type:"email",
        payload: set
    }
}
export const Smobile = (set)=>{
    return {
        type:"mobile",
        payload: set
    }
}
export const Saddress = (set)=>{
    return {
        type:"address",
        payload: set
    }
}






export const SoriginalName = (set)=>{
    return {
        type:"originalName",
        payload: set
    }
}
export const Soriginalusername = (set)=>{
    return {
        type:"originalusername",
        payload: set
    }
}
export const Soriginalinstitude = (set)=>{
    return {
        type:"originalinstitude",
        payload: set
    }
}
export const Soriginalemail = (set)=>{
    return {
        type:"originalemail",
        payload: set
    }
}
export const Soriginalmobile = (set)=>{
    return {
        type:"originalmobile",
        payload: set
    }
}
export const Soriginaladdress = (set)=>{
    return {
        type:"originaladdress",
        payload: set
    }
}

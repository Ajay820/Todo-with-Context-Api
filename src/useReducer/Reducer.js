export const reducer =(state,action)=>{
    const {type,payload} = action

    switch (type) {
      case "ADD_TODO":
        return {...state,todo:payload.updated}
      case "REMOVE_TODO":
        return {...state,todo:payload.removed}
      default: 
       return state
    }
}
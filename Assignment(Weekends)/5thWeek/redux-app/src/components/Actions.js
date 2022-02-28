export const addEntry=(item,cal)=>{
    return{
        type:'ADD_ENTRY',
        item,
        cal
    }
}

export const deleteEntry=(id)=>{
    return{
        type:'DELETE_ENTRY',
        id
    }
}
import React,{useState,createContext,useReducer} from 'react'

export const BankingContext = createContext()

const bankingReducer=(state,action)=>{
    switch(action.type){
        case 'WITHDRAW':
            if(action.amount > state){
                alert("Not enough Balance")
                return state;
            }
            return state-parseInt(action.amount);
        case 'DEPOSIT':
            let temp=state+parseInt(action.amount)
            return state=temp;
        case 'FD':
            return state+parseInt(action.amount)+(parseInt(action.amount)*0.03);
        case 'DELETE':
            return 0;
        default:
            return state
    }
}

export const BankingProvider=(props)=>{
   
    const [balance, dispatch] = useReducer(bankingReducer,200)
    return <BankingContext.Provider value={{
    // Balance,
    // Amount,
    // amountHandler,
    // WithDraw,
    // Deposit,
    // FD,
    // Delete
    balance,
    dispatch
    }}>
        {props.children}
    </BankingContext.Provider>
}

 // const [Balance, setBalance] = useState(200)
    // const [Amount, setAmount] = useState(0)
    // const amountHandler=(e)=>{
    //     setAmount(e.target.value)
    // }
    // const WithDraw=()=>{
    //     if(Amount>Balance)alert("Not enough Balance")
    //     else setBalance(Balance-Amount)
    //     setAmount(0)
    // }
    // const Deposit=()=>{
    //     let temp = parseInt(Amount)
    //      setBalance(Balance+temp)
    //     setAmount(0)
    // }
    // const FD=()=>{
    //     let temp = parseInt(Amount)
    //     let interest = temp+(0.03*temp)
    //      setBalance(Balance+interest)
    //     setAmount(0)
    // }

    // const Delete=()=>{
    //     setBalance(0)
    // }

const reducer =(state,action)=>{

    if(action.type==='LOADING')
        return{...state,loading:true}
    if(action.type==='DISPLAY_ITEM'){
        return{...state,cart:action.payload,loading:false}
    }
    if(action.type==='CLEAR_CART')
    {
        return{...state,cart:[]}
    }
    if(action.type==='REMOVE'){
        return{...state,cart:state.cart.filter((cartItem)=>cartItem.id!==action.payload)}
    }
    if(action.type==='INCREASEQTY'){
        const newcart=state.cart.map((item)=>{
            if(item.id===action.payload)
            {
                 return {...item,amount: item.amount+1};
            }
            else
                return item;
        })
        return {...state,cart:newcart}
    }
    if(action.type==='DECREASEQTY'){
        const newcart=state.cart.map((item)=>{
            if(item.id===action.payload)
            {
                 return {...item,amount: item.amount-1};
            }
            else
                return item;
        }).filter((cartItem)=>cartItem.amount!==0);
        return {...state,cart:newcart}
    }

    if(action.type==='GET_TOTAL'){
        let {total,amount}=state.cart.reduce(
            (cartTotal,cartItem)=>{
                const{price,amount}=cartItem
                const itemTotal=price*amount

                cartTotal.total+=itemTotal;
                cartTotal.amount+=amount
                return cartTotal
            },
            {total:0,amount:0}
        )
        // only get 2 number after point.
        total=parseFloat(total.toFixed(2));
        return{...state,total,amount}
    }

    return state; 
}
export default reducer;

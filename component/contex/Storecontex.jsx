import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";

export const Storecontex= createContext(null)
const StoreContexProvaider=(props)=>{
    const [cardItem,setCardItem]=useState({});
    
    const addtoCart=(itemid)=>{
            if(!cardItem[itemid]){
                setCardItem((prev)=>({...prev,[itemid]:1}))
            }
            else{
                setCardItem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
            }
    }
        const removeFromcard=(itemid)=>{
            setCardItem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
        }

        const getTotal=()=>{
            let totoaAmount=0;
            for(const Items in cardItem){
                if(cardItem[Items]>0){
                    let itemInfo=food_list.find((prev)=>prev._id===Items)
                totoaAmount+= itemInfo.price* cardItem[Items]
                }
                
            }
            return totoaAmount;
        }

     const contexvalue={
            food_list,
            cardItem,
            setCardItem,
            addtoCart,
            removeFromcard,
            getTotal,

    }
    return(
        <Storecontex.Provider value={contexvalue}>
                {props.children}
        </Storecontex.Provider>
    )
}
export default StoreContexProvaider
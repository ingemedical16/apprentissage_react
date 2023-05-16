import { useState,useEffect } from "react";
let globaleState = {};
let listeners = [];
let actions = {}


export const useStore = (shouldListen = true) =>{
    const setState = useState(globaleState)[1];
    const dispatch = (actionIdentfier,payload) =>{
        const newSate = actions[actionIdentfier](globaleState,payload);
        globaleState= {...globaleState,...newSate};

        for (const listener of listeners){
            listener(globaleState);
        }
    };
    useEffect(()=>{
        if(shouldListen){
            listeners.push(setState);
        }
        return () =>{
            if(shouldListen){
                listeners = listeners.filter(li=>li !== setState);
            }
            
        }
    },[setState,shouldListen]);
    return [globaleState,dispatch];
};

export const initStore = (userActions,initialState) =>{
    if(initialState){
        globaleState = {...globaleState,...initialState};
    }
    actions={...actions,...userActions};
};
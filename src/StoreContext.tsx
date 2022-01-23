import React from 'react';
import {StoreType} from './redux/redux-store';


const StoreContext=React.createContext({}as StoreType);

export type propsTypeProvider={
    children:React.ReactNode,
    store:StoreType
}
export const Provider=(props:propsTypeProvider)=>{
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext;
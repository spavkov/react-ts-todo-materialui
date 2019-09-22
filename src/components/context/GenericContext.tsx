import React from "react";

export interface IGenericContextProps {
    children: React.ReactNode;
}

export interface IStateAndDispatcher<T,V> {
    State: T;
    Dispatcher: React.Dispatch<V> | null;
}



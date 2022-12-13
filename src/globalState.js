import React from "react";

const defaultGlobalState = {
    user: 0,
};

const globalStateContext = React.createContext(defaultGlobalState);
const dispatchStateContext = React.createContext(undefined);

export {defaultGlobalState, globalStateContext, dispatchStateContext}
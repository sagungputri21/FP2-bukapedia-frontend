import React from "react";
import {globalStateContext, dispatchStateContext} from "./globalState";

const useGlobalState = () => [
    React.useContext(globalStateContext),
    React.useContext(dispatchStateContext)
];

export default useGlobalState
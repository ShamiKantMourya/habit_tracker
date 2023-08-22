import { createContext, useReducer, useState } from "react";

import { reducer, initialState } from "../Reducer/habitReducer";

export const HabitContext = createContext();

export const HabitProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {Habits, Archive} = state;
    const [model, setModel] = useState(false);

    console.log(Habits, "Habits")
    const values = {
        state,
        habitDispatch: dispatch,
        model,
        setModel,
        Habits,
        Archive
    };
    return(
        <HabitContext.Provider value={values}>
            {children}
        </HabitContext.Provider>
    )
}

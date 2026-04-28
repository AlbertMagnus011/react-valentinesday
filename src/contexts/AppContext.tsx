"use client"

import { Phase} from "@/config/phase"
import { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
    phase: Phase;
    setPhase: (phase: Phase) => void;
}

const AppContext = createContext({} as AppContextType);

export function AppProvider ({
    children,
}: {
    children: ReactNode;
}) {
    const [phase, setPhase] = useState<Phase>("intro");

    return (
        <AppContext.Provider value={{phase, setPhase}}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp(){
    return useContext(AppContext)
}
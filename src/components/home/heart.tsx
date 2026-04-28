"use client"

import { useApp } from "@/contexts/AppContext";
import { useTheme } from "@/contexts/ThemeContext";
import {AnimatePresence, motion} from "framer-motion"
import { useState } from "react"


export const Heart = () => {
    const [opened, setOpened] = useState(false)
    const {setTheme} = useTheme();
    const [finish, setFinished] = useState(false);
    const {setPhase} = useApp();

    const handleFinish = () => {
        setTheme("pink");
        setFinished(true);
        setPhase("key");
    }

    if (finish) return null;

    return(
    <div className={`relative flex items-center justify-center h-screen overflow-hidden`}>
                    {opened && (<motion.div 
                        initial= {{ scale: 0}}
                        animate= {{scale: opened ? 25 : 0}}
                        transition={{duration: 1.3, 
                            ease: [0.83, 0, 0.17, 1]}}
                        className="absolute w-40 h-40 rounded-full bg-[#F19BB8] z-0"
                        onAnimationComplete={handleFinish}
                        />
                    )}
                    <motion.div onClick={() => setOpened(true)}
                        animate={opened ? {scale: 1.15} :{
                        scale: [1, 1.25, 1, 1.25, 1, 1], 
                        }}
                        transition={opened ? 
                            {duration: 0.3} :
                            {duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0,0.08,0.18, 0.26,0.36,1]}
                        }
                        className="w-32 h-32 bg-[#F19BB8] rotate-45 relative cursor-pointer"
                    >
                        <div className="absolute w-32 h-32 bg-[#F19BB8] rounded-full -top-16 left-0" />
                        <div className="absolute w-32 h-32 bg-[#F19BB8] rounded-full top-0 -left-16" />
                </motion.div>
    </div>
    )
}

export default Heart;
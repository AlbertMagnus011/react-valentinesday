"use client"

import {motion} from "framer-motion"

export const Heart = () => {
    return(
    <div className="flex items-center justify-center h-screen ">
        <motion.div animate= {{
            scale: [1, 1.2, 1],
        }}
        transition={{
            duration: 1.2,
            repeat: Infinity,
            times: [0, 0.2, 0.4, 0.6, 1]
        }}
        className="text-purple-500 text-8xl" >
            💜
        </motion.div>
    </div>
    )
}

export default Heart;
import { motion } from "framer-motion"
import { useState } from "react"

const tabs = [
    "Uma história",
    "Um momento",
    "Uma mensagem"
]

export const StoryTabs = () => {
    const [hovered, setHovered] = useState<number | null>(null);
    return (
        <section className="flex h-screen w-full">
            {tabs.map((tab, index) =>{
                const expanded = hovered === index;
                const shrink = hovered !== null && hovered !== index;

                return(
                    <motion.button key={tab} onMouseEnter={() => setHovered(index)} onMouseLeave={() => setHovered(null)}
                    className="relative flex h-full items-center justify-center overflow-hidden border-warm-white/70 px-6 text-center"
                    animate={{flex: hovered === null ? 1 : expanded ? 1.8 : 0.6}}
                            transition={{duration:0.45, ease: "easeInOut"}}>
                        <motion.span className=" text-3xl md:text-5xl lg:text-6xl font-light tracking-wide text-warm-white"
                        animate={{scale: expanded ? 1.08 : 1, opacity: shrink ? 0.45 : 1}}
                        transition={{duration: 0.3}}>{tab}</motion.span>
                    </motion.button>
                )
            })}
        </section>
    )
}
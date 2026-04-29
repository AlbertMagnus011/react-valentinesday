import { Input } from "@/components/ui/input"
import { FancyButton } from "../shared/FancyButton";
import { Field, FieldLabel } from "../ui/field";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {motion} from "framer-motion"
import { SubmitEventHandler, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useApp } from "@/contexts/AppContext";

export const LoveKey = () => {

    const [key, setKey] = useState(""); /*Controla oque é digitado no input*/
    const [error, setError] = useState(false);/*Controla e valida o input*/
    const [open, setOpen] = useState(false);/*Controla o Dialog */
    const [closing, setClosing] = useState(false);/*Controla se o dialog foi validado, se sim, inicial a animação de fechamento e retira o botão do DialogTrigger*/
    const [unlocking, setUnlocking] = useState(false);/*Controla o desbloqueio da animação*/
    const [animation, setAnimation]  = useState<"retraction" | "expansion">("retraction");/*Controla as fases da animação, aonde o circulo retrai e expande */
    const {setTheme} = useTheme();
    const {setPhase} = useApp();

    const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) =>{
        e.preventDefault();

        if(key.trim().toLowerCase() === "rafael"){
        
        setClosing(true);
        
        setTimeout(() => {
            setOpen(false);
            setUnlocking(true)
        }, 300)
        }
        setError(true);
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center gap-8 max-w-sm mx-auto">
            <motion.div
                initial= {{ opacity:0, scale: 0.5}}
                animate= {{ opacity:1, scale: 1}}
                transition= {{delay: 0.6, duration: 0.5, ease: "backOut"}}>
            <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        {!closing && (<FancyButton>Abrir</FancyButton>)}
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-sm bg-cabernet">    
                        <motion.div 
                            animate={
                                closing ? {opacity: 0, scale: 0.7}
                                        : {opacity: 1, scale: 1}
                            }
                            transition={{ duration: 0.3}}>
                            <form onSubmit={handleSubmit} className="h-80 bg-cabernet flex flex-col justify-center items-center gap-10">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl text-warm-white">Digite a chave</DialogTitle>
                                </DialogHeader>
                                    <Input name="key" 
                                    value={key}
                                    onChange={(e) => {setKey(e.target.value); if(error) setError(false)}}
                                    placeholder="Digite aqui..."
                                    className={`border-0 border-b-2 border-b-warm-white shadow-none rounded-none 
                                    focus-visible:border-b-white text-center text-white focus-visible:ring-0 
                                    ${error ? "border-b-red-500 text-red-300 placeholder:text-red-300"
                                    : "border-b-white text-white placeholder:text-white/50"
                                }`} autoFocus />
                                {error && (<p className="text-sm text-red-300 text-center">Chave incorreta</p>)}
                                <DialogFooter>
                                    <FancyButton type="submit" className="border-warm-white text-warm-white hover:border-warm-white hover:text-warm-white" >
                                        Abrir</FancyButton>
                                </DialogFooter>
                            </form>
                        </motion.div>
                    </DialogContent>
            </Dialog>
            </motion.div>
            {unlocking && (
            <motion.div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
                <motion.div 
            className="absolute rounded-full bg-cabernet"
            initial={{ width:220, height:220, scale:1}}
            animate={animation === "retraction" ? { width: 25, height:25, scale:1} : {scale: 120}}
            transition={{duration: animation === "retraction" ? 1 : 0.4, ease: [0.83, 0, 0.17, 1]}}
            onAnimationComplete={() => {
                if(animation === "retraction"){
                    setTimeout(() => setAnimation("expansion"), 150)
                }
                if(animation === "expansion"){
                    setTheme("black");
                    setPhase("story")
                }
            }}/>
            </motion.div>
            )}


        </div>
    )
}
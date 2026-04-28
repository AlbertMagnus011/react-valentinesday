import { Input } from "@/components/ui/input"
import { FancyButton } from "../shared/FancyButton";
import { Field, FieldLabel } from "../ui/field";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {motion} from "framer-motion"

export const LoveKey = () => {



    return (
        <div className="h-screen flex flex-col justify-center items-center gap-8 max-w-sm mx-auto">
            <motion.div
                initial= {{ opacity:0, scale: 0.5}}
                animate= {{ opacity:1, scale: 1}}
                transition= {{delay: 0.6, duration: 0.5, ease: "backOut"}}>
            <Dialog >
                <form>
                    <DialogTrigger asChild>
                        <FancyButton className="">Abrir</FancyButton>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-sm h-80 bg-[#942cde] flex flex-col justify-center items-center gap-10">
                        <DialogHeader>
                            <DialogTitle className="text-2xl text-white">Digite a chave</DialogTitle>
                        </DialogHeader>
                        <Field>
                            <Input id="key" name="key" autoFocus className="border-0 border-b-2 border-b-white shadow-none rounded-none 
                            focus-visible:border-b-white text-center text-white focus-visible:ring-0"></Input>
                        </Field>
                        <DialogFooter>
                            <FancyButton type="submit" className="border-white text-white hover:border-white hover:text-white" >Abrir</FancyButton>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
            </motion.div>

        </div>
    )
}
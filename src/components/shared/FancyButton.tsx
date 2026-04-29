import { useTheme } from "@/contexts/ThemeContext"
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<typeof Button>;

export const FancyButton = ({children, className, ...props} : Props) => {

    const { styles } = useTheme();

    return (
        <>
            <Button variant="outline"
            className={cn(`bg-transparent border-2 border-cabernet text-cabernet hover:bg-transparent cursor-pointer
            hover:border-[#3d0e0e] hover:border-2 rounded-2xl px-8 py-6 text-lg font-button font-medium tracking-[0.18em] uppercase`, className)}
            {...props}
            >
                {children}
            </Button>
        </>
    )
}
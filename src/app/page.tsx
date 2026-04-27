"use client"

import { Heart } from "@/components/home/heart";
import { useTheme } from "@/contexts/ThemeContext";

export default function Page() {

  const { styles } = useTheme();

  return (
    <div>
        <main className={`mx-auto min-h-screen w-full ${styles.primary}`}>
          <Heart/>
        </main>
    </div>
  )
}
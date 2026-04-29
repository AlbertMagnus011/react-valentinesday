"use client"

import { Heart } from "@/components/home/Heart";
import { LoveKey } from "@/components/home/LoveKey";
import { StoryTabs } from "@/components/home/StoryTabs";
import { useApp } from "@/contexts/AppContext";
import { useTheme } from "@/contexts/ThemeContext";

export default function Page() {

  const {phase} = useApp();
  const { styles } = useTheme();

  return (
    <div>
        <main className={`mx-auto min-h-screen w-full ${styles.background}`}>
          {phase == "intro" && <Heart/>}
          {phase == "key" && <LoveKey />}
          {phase == "story" && <StoryTabs/>}
        </main>
    </div>
  )
}
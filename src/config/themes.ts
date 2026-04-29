export type Theme = "black" | "pink";

export const themes = {
  black: {
    background: "bg-[#5B1F33]",
    text: "text-[#5B1F33]",
  },

  pink: {
    background: "bg-[#F19BB8]",
    text: "text-[#FFF7FA]"
  },
} as const;
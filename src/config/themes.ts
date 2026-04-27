export type Theme = "dark" | "love";

export const themes = {
  dark: {
    background: "bg-[#100202]",
    primary: "bg-[#100202]",
    text: "text-white"
  },

  love: {
    background: "bg-[#F19BB8]",
    primary: "bg-[#F19BB8]",
    text: "text-white"
  },
} as const;
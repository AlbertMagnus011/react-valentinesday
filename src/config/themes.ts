export type Theme = "black" | "pink" | "purple";

export const themes = {
  black: {
    background: "bg-[#100202]",
    primary: "bg-[#100202]",
    text: "text-white"
  },

  pink: {
    background: "bg-[#F19BB8]",
    primary: "bg-[#F19BB8]",
    text: "text-[#6A1B2E]"
  },

  purple: {
    background: "bg- [#BF32FE]",
    primary: "bg-[#BF32FE]",
    text: "text-[#6A1B2E]"
  },
} as const;
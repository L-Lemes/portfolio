import { Gwendolyn, Poppins, DM_Serif_Display } from "next/font/google";

export const dM_Serif_Display = DM_Serif_Display({ subsets: ["latin"], weight: "400"})

export const gwendolyn = Gwendolyn({ subsets: ["latin"], weight: ["400", "700"]}) 

export const poppins = Poppins({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700"]})

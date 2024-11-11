import { Rock_Salt, Permanent_Marker, Kalam } from "next/font/google";

const rockSalt = Rock_Salt({
  weight: "400",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanentMarker",
});

const kalamFont = Kalam({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export { rockSalt, permanentMarker, kalamFont };

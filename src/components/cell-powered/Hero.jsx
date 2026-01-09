import DarkIcon from "../../assets/cell-powered/iconDark.png"
import { titleCN } from "../../Reusable/typography";


export default function Hero() {
   return (
      <div className="flex flex-col h-[50vh] sm:h-[60vh] items-center justify-center min-h-1125 gap-8">
         <img src={DarkIcon}
         alt="Cell Powered Icon (dark)"
         className="h-30 rotate-6 drop-shadow-green-400/70 drop-shadow-xl mb-10" />

         <h1 className={`${titleCN} text-6xl sm:text-7xl`}>
            Cell Powered
         </h1>
         <h3 className="text-2xl opacity-70 text-center">
            Keep an eye on your Mac's battery
         </h3>
      </div>
   );
}

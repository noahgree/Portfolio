import mainImage from "../../assets/cell-powered/fullScreen.png"
import Dark1 from "../../assets/cell-powered/background-solo/Dark1.png"
import Dark2 from "../../assets/cell-powered/background-solo/Dark2.png"
import Dark3 from "../../assets/cell-powered/background-solo/Dark3.png"
import Dark4 from "../../assets/cell-powered/background-solo/Dark4.png"
import Dark5 from "../../assets/cell-powered/background-solo/Dark5.png"
import Light1 from "../../assets/cell-powered/background-solo/Light1.png"
import Light2 from "../../assets/cell-powered/background-solo/Light2.png"
import Light3 from "../../assets/cell-powered/background-solo/Light3.png"
import Light4 from "../../assets/cell-powered/background-solo/Light4.png"
import Light5 from "../../assets/cell-powered/background-solo/Light5.png"

export default function Content() {
   return (
      <div className="flex flex-col max-w-4xl mx-auto">
         <div className="m-8">
            <div>
               <img src={mainImage} alt="Hero Image" className="rounded"></img>
            </div>

            <div className="carousel carousel-center rounded-box space-x-4 p-4 h-120">
               <div className="carousel-item">
                  <img
                     src={Dark1}
                     className="rounded-box" />
               </div>
               <div className="carousel-item">
                  <img
                     src={Dark2}
                     className="rounded-box" />
               </div>
               <div className="carousel-item">
                  <img
                     src={Dark3}
                     className="rounded-box" />
               </div>
               <div className="carousel-item">
                  <img
                     src={Dark4}
                     className="rounded-box" />
               </div>
               <div className="carousel-item">
                  <img
                     src={Dark5}
                     className="rounded-box" />
               </div>
               <div className="carousel-item">
                  <img
                     src={Light1}
                     className="rounded-box" />
               </div>
               <div className="carousel-item">
                  <img
                     src={Light2}
                     className="rounded-box" />
               </div>
               <div className="carousel-item">
                  <img
                     src={Light3}
                     className="rounded-box" />
               </div>
               <div className="carousel-item">
                  <img
                     src={Light4}
                     className="rounded-box" />
               </div>
               <div className="carousel-item">
                  <img
                     src={Light5}
                     className="rounded-box" />
               </div>
            </div>
         </div>
      </div>
   );
}

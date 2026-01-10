import mainImage from "../../assets/cell-powered/fullScreen.png"

export default function Content() {
   return (
      <div className="flex max-w-4xl mx-auto">
         <div className="m-8">
            <img src={mainImage} alt="Hero Image" className="rounded"></img>
         </div>
      </div>
   );
}

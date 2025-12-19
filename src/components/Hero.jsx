export default function Hero() {
   return (
      <div className="hero py-16 bg-base-200">
         <div className="hero-content flex-col items-start gap-6 mx-auto max-w-5xl px-4">
            <div>
               <h1 className="text-4xl font-bold">Richard "Noah" Greene</h1>
               <p className="mt-3 max-w-2xl opacity-80">
               CS @ Georgia Tech
               </p>
            </div>

            <div className="flex flex-wrap gap-3">
               <a className="btn btn-primary" href="#projects">See My Work</a>
               <a className="btn btn-outline" href="#contact">Contact Me</a>
            </div>

            <div className="flex flex-wrap gap-2">
               <span className="badge badge-outline">Android</span>
               <span className="badge badge-outline">ML</span>
               <span className="badge badge-outline">Godot</span>
               <span className="badge badge-outline">React</span>
               <span className="badge badge-outline">Swift</span>
            </div>
         </div>
      </div>
   )
}

export default function Hero() {
   return (
      <div className="hero py-16 bg-base-200">
         <div className="hero-content flex-col sm:flex-row sm:items-stretch gap-6 mx-auto max-w-5xl px-4">
            <div className="sm:self-stretch shrink-0 flex items-start sm:items-center">
               <div className="avatar w-24 sm:w-72">
                  <div className="rounded">
                     <img
                        src="/noahsnow.png"
                        alt="Profile avatar"
                        className="h-full w-full object-cover"
                     />
                  </div>
               </div>
            </div>

            <div className="flex flex-col gap-6">
               <div>
                  <h1 className="text-4xl font-bold">Richard "Noah" Greene</h1>
                  <p className="mt-3 max-w-2xl opacity-80">CS @ Georgia Tech</p>
               </div>

               <div className="flex flex-wrap gap-3">
                  <a className="btn btn-primary" href="#projects">
                     See My Work
                  </a>
                  <a className="btn btn-outline" href="#contact">
                     Contact Me
                  </a>
               </div>

               <div className="flex flex-wrap gap-2">
                  <span className="badge badge-soft">Android</span>
                  <span className="badge badge-soft">ML</span>
                  <span className="badge badge-soft">Godot</span>
                  <span className="badge badge-soft">React</span>
                  <span className="badge badge-soft">Swift</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default function Navbar() {
   return (
      <div className="navbar bg-base-300">
         <div className="navbar-start">
            <a className="px-3 py-2 text-lg" href="#top">
            RNG
            </a>
         </div>

         <div className="navbar-end">
            <ul className="menu menu-horizontal px-1">
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
         </div>
      </div>
   )
}

export default function Navbar() {
   return (
      <div className="navbar bg-base-300">
         <div className="navbar-start">
            <a className="btn btn-ghost text-lg" href="#top">
            Noah Greene
            </a>
         </div>

         <div className="navbar-end">
            <ul className="menu menu-horizontal px-1">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
         </div>
      </div>
   )
}

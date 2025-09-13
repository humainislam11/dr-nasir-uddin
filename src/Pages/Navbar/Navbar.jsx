import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

   const nav = <>
     
  <NavLink className={({isActive})=>isActive? 'font-semibold text-green-400  hover:text-orange-400': 'font-semibold'} to='/about' >About Me</NavLink>

  <NavLink className={({isActive})=>isActive? 'font-semibold text-green-400  hover:text-orange-400': 'font-semibold'} to='/services' >Services</NavLink>


  <NavLink className={({isActive})=>isActive? 'font-semibold text-green-400  hover:text-orange-400': 'font-semibold'} to='/Gallery' >Gallery</NavLink>


  <NavLink className={({isActive})=>isActive? 'font-semibold text-green-400  hover:text-orange-400': 'font-semibold'} to='/appointment' >Chamber & Appointment</NavLink>


 <NavLink className={({isActive})=>isActive? 'font-semibold text-green-400  hover:text-orange-400': 'font-semibold'} to='/contact' >Contact</NavLink>

 <NavLink className={({isActive})=>isActive? 'font-semibold text-green-400  hover:text-orange-400': 'font-semibold'} to='/publication' >Publication</NavLink>

</>


    return (
       <div className="navbar  fixed z-10 bg-opacity-30 w-full mx-auto text-white bg-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>{nav}</li>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl">DR-NASIR-UDDIN-BHUIYAN</Link>
  </div>
   <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-6">
      {
        nav
      }
    </ul>
  </div>
  
</div>
    );
};

export default Navbar;
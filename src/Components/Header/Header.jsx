import React from 'react';

const Header = () => {
    return (
        <header className='mb-10'>
            <div class="navbar bg-base-100 flex justify-between">
               <div class="navbar-start">    
                 <a class="btn btn-ghost text-4xl font-bold">Recipe Calories</a>
                </div>
                <div class="navbar hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Recipe</a></li>      
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
                </div>
                <div class="form-control">
                   <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
                </div>
                <div class="dropdown dropdown-end">
                     <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                      <div class="w-10 rounded-full">
                         <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                  </div>  
            </div>
        </header>
    );
};

export default Header;
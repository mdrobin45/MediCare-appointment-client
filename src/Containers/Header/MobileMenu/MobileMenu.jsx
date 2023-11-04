const MobileMenu = ({ dropdownOpen }) => {
   return (
      <div className={`sm:hidden ${!dropdownOpen ? "hidden" : "block"}`}>
         <div className="space-y-1 px-2 pb-3 pt-2">
            <a
               href="#"
               className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
               aria-current="page">
               Dashboard
            </a>
            <a
               href="#"
               className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
               Team
            </a>
            <a
               href="#"
               className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
               Projects
            </a>
            <a
               href="#"
               className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
               Calendar
            </a>
         </div>
      </div>
   );
};

export default MobileMenu;

import React, { useState } from "react";
// HEROICONS --> npm i heroicons
import { Bars3Icon, XMarkIcon, HomeIcon, IdentificationIcon, ClipboardDocumentListIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'

function Header() {

    const [icon, seticon] = useState(true)
    const handleclick = () => {
        seticon(!icon)
    }

    return (
        <div className="">


            <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 md:h-13" >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 sticky top-0">
                    <a href="/" className="flex items-center">
                        <img src="https://static.vecteezy.com/system/resources/previews/006/989/005/original/joker-mascot-for-sports-and-esports-logo-illustration-free-vector.jpg
" className="h-9 w-9 mr-3 rounded-full ring ring-gray-50 " alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Brand Name</span>
                    </a>
                    <div className="flex items-center ">

                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center px-2 py-1 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false" onClick={handleclick}>
                            {
                                icon ? <Bars3Icon className="text-white w-7 h-7" /> : <XMarkIcon className="text-white w-7 h-7" />
                            }

                        </button>
                    </div>
                    <div className={icon ? " hidden md:block" : "w-full md:flex md:w-auto md:order-1 items-center justify-between"} id="mobile-menu-2">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" className="text-lg font-bold py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 flex items-center gap-1" aria-current="page"><HomeIcon className="text-white w-6 h-6" /> Home</a>
                            </li>
                            <li>
                                <a href="/" className="text-lg font-bold py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex items-center gap-1"><IdentificationIcon className="text-white w-6 h-6" />About</a>
                            </li>
                            <li>
                                <a href="/" className="text-lg font-bold py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex items-center gap-1"><ClipboardDocumentListIcon className="text-white w-6 h-6" />Skils</a>
                            </li>
                            <li>
                                <a href="/" className="text-lg font-bold py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex items-center gap-1"><ChatBubbleBottomCenterTextIcon className="text-white w-6 h-6" />Contact</a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-5 w-full h-screen grid-flow-row-dense ">
                                    <img src="https://c0.wallpaperflare.com/preview/329/62/424/animal-cheetah-exotic-wild.jpg" alt="grid"/>
                                    <img src="https://c0.wallpaperflare.com/preview/329/62/424/animal-cheetah-exotic-wild.jpg" alt="grid"/>

                                </div>


        </div>



    );
}
export default Header;
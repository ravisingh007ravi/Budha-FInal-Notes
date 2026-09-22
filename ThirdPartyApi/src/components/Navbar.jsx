import { useState } from 'react'
import { FaGithub, FaInstagram, FaBars } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";


export default function Navbar() {

  const [toggle, setToggle] = useState(true)

  const MENUData = [
    { icons: '', name: 'All Users', link: '' },
    { icons: '', name: 'All Product', link: '' },
    { icons: '', name: 'All Stock', link: '' },
  ]

  const SocialMediaLink = [
    { icons: <FaGithub />, link: '' },
    { icons: <FaLinkedin />, link: '' },
    { icons: <FaInstagram />, link: '' },
  ]

  return (
    <header className="p-5">

      <nav className="flex shadow-lg justify-between items-center bg-black text-white rounded-full py-2 sm:py-3 md:py-4 lg:py-5 2xl:py-7 px-20 w-full">
        {/* left section   */}
        <h1>RS</h1>

        {/* center section   */}
        <ul className="md:flex hidden items-center gap-5">
          {
            MENUData.map((v, i) => (
              <li key={i}>{v.name}</li>
            ))
          }
        </ul>

        {/* right section   */}
        <ul className="md:flex hidden items-center gap-5">
          {
            SocialMediaLink.map((v, i) => (
              <li>{v.icons}</li>
            ))
          }
        </ul>

        <div onClick={() => setToggle(!toggle)} className="md:hidden">
          {toggle ? <IoCloseSharp className="text-yellow-600" /> : <FaBars className="text-red-600 text-2xl" />}
        </div>



        {
          toggle &&
          <div className="flex flex-col absolute bg-black text-white start-10 w-[420px] rounded-b-2xl top-15 md:hidden items-center gap-5">
            <ul className="flex mt-3 md:hidden items-center gap-5">
              {
                SocialMediaLink.map((v, i) => (
                  <li>{v.icons}</li>
                ))
              }
            </ul>

            <ul className="">
              {
                MENUData.map((v, i) => (
                  <li key={i}>{v.name}</li>
                ))
              }
            </ul>
          </div>


        }

      </nav>

    </header>
  )
}

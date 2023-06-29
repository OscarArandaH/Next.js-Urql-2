/* eslint-disable @next/next/no-img-element */
import Logo from '../../../public/images/Usach S2.png'

export default function Header() {
  return (
    <div className='container'>
      <div className="flex flex-row w-screen">
        <div className="basis-1/4 bg-[#ea7600] h-4"/>
        <div className="basis-3/4 bg-[#00a499] h-4"/>
      </div>
      <div className="flex flex-row w-screen bg-white py-8">
        <div className="basis-1/2">
          <img src={Logo.src} alt="Logo" className=' h-40 mx-auto'/>
        </div>
      </div>
    </div>
  )
}
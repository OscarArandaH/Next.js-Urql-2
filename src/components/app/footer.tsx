/* eslint-disable @next/next/no-img-element */
import Logo from '../../../public/images/Usach SVB.png'

export default function Footer() {
  return (
    <div className='container'>
      <div className="flex flex-row w-screen bg-[#858585] py-2 ">
        <div className="basis-1/3">
          <img src={Logo.src} alt="Logo" className='max-h-20 mx-auto'/>
        </div>
        <div className="basis-1/3 text-xs text-white text-center align-middle py-3">
          <p>Facultad Tecnológica</p>
          <p>Universidad de Santiago de Chile | Avenida Ecuador N°3769 | Estación Central | Santiago - Chile</p>
          <p>Teléfono: (569) 718 - 0500</p>
          <p>Mail: comunicaciones.factec@usach.cl</p>
        </div>
        <div className="basis-1/3">
          <img src={Logo.src} alt="Logo" className='max-h-20 mx-auto'/>
        </div>
      </div>
    </div>
  )
}
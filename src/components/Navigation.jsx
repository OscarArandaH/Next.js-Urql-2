'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';

const links = [
  {
    label: 'Home',
    route: '/'
  }, {
    label: 'Paises',
    route: '/countries'
  }, {
    label: 'PDF',
    route: 
    '/pdf'
  }
]

export function Navigation () {
  const currentPage = usePathname();
  return (
    <header>
      <nav>
        <div className='container'>
          <div className="flex flex-row w-screen bg-[#507482] py-4 text-white text-2xl ">
            <div className="basis-1/3"/>
            {
              links.map(({ label, route }) => (
                <div className='mx-auto' key={route}>
                  {
                    route === currentPage ? (
                      <li key={route} clasName="mr-7 pt-4" style={{listStyle: 'none', textDecoration: 'underline', textDecorationColor: '#ea7600', textDecorationThickness: '2px', textUnderlineOffset:'5px'}} >
                        <Link href={route}>
                          {label}
                        </Link>
                      </li>
                    ) : (
                      <li key={route} clasName="mr-7 pt-4" style={{listStyle: 'none'}}>
                        <Link href={route}>
                          {label}
                        </Link>
                      </li>
                    )
                  }
                </div>
              ))
            }
            <div className="basis-1/3"/>
          </div>
        </div>
      </nav>
    </header>
  )
}
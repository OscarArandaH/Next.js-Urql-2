import Link from 'next/link'

const links = [
  {
    label: 'Home',
    route: '/'
  }, {
    label: 'Countries',
    route: '/countries'
  }, {
    label: 'Graficos',
    route: '/charts'
  }, {
    label: 'PDF',
    route: 
    '/pdf'
  }, {
    label: 'Excel',
    route: '/excel'
  }
]

export function Navigation () {
  return (
    <header>
      <nav>
        <div className='container'>
          <div className="flex flex-row w-screen bg-[#507482] py-2 pl-2  text-white">
            {
              links.map(({ label, route }) => (
                <li key={route} className="mr-7" style={{listStyle: 'none'}}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))
            }
          </div>
        </div>
      </nav>
    </header>
  )
}
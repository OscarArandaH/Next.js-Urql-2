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
  }
]

export function Navigation () {
  return (
    <header>
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        {links.map(({ label, route }) => (
          <a className=' mr-5' key={route}>
            <Link href={route}>
              {label}
            </Link>
          </a>
        ))}
        </div>
      </div>
    </header>
  )
}

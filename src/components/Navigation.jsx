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
      <nav>
        <ul>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

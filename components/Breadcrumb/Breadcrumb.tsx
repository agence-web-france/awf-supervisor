/* This example requires Tailwind CSS v2.0+ */
import { HomeIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { Customer } from 'types/Customer.type'

const pages = [
  { name: 'Project Nero', href: '#', current: true },
]

type BreadcrumbProps = {
  customer: Customer
}

export default function Breadcrumb({ customer }: BreadcrumbProps) {
  return (
    <nav className="flex mt-4" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link href={`/`}>
              <a className="text-gray-400 hover:text-gray-500">
                <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Dashboard</span>
              </a>
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="flex-shrink-0 h-5 w-5 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
            <Link href={`/${customer.slug}`}>
              <a
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                {customer.title}
              </a>
            </Link>
          </div>
        </li>
      </ol>
    </nav>
  )
}

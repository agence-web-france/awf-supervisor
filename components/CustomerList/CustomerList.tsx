import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
import CustomerStatus from 'components/CustomerStatus/CustomerStatus'
import useCustomers from 'hooks/useCustomer'
import Link from 'next/link'



export default function CustomerList() {

  const { customers } = useCustomers()

  return (
    <section>
      <h1 className='mt-6 text-2xl font-medium'>
        Mes sites web
      </h1>
      <p className="mt-2 mb-6 text-base text-gray-500">Résumé de tous les sites web créé avec l&apos;application</p>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {customers.map((customer) => (
          <li key={customer.email} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
            <Link href={`/${customer.slug}`}>
              <a>
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate">{customer.title}</h3>
                      <CustomerStatus customer={customer} />
                    </div>
                    <p className="mt-1 text-gray-500 text-sm truncate">{customer.description}</p>
                  </div>
                </div>
              </a>
            </Link>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="w-0 flex-1 flex">
                  <a
                    href={`mailto:${customer.email}`}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                  >
                    <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">Email</span>
                  </a>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href={`tel:${customer.telephone}`}
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                  >
                    <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">Téléphone</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

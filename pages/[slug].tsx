import AuthLayout from 'components/AuthLayout/AuthLayout'
import CustomerPreview from 'components/CustomerPreview/CustomerPreview'
import CustomerStatus from 'components/CustomerStatus/CustomerStatus'
import GoToHomeButton from 'components/GoToHomeButton/GoToHomeButton'
import RedeployButton from 'components/RedeployButton/RedeployButton'
import useCustomers from 'hooks/useCustomer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

const CustomerPage = () => {
  const router = useRouter()
  const { slug } = router.query
  const { getCustomerBySlug } = useCustomers()
  const customer = getCustomerBySlug(slug as string)
  if (customer) {
    return (
      <>
        <GoToHomeButton />
        <div className='flex items-center'>
          <h1 className='text-3xl font-medium mt-4'>{customer.title}</h1>
          <div className='flex items-center mb-4'>
            {/* <CustomerStatus customer={customer} /> */}
          </div>
        </div>
        <CustomerPreview />
        <div className='pb-2'>
          <p className='text-xl font-medium mb-2'>Lien d&apos;administration :</p>
          <Link href={customer.adminUrl as string}>
            <a target='_blank' className='text-black underline'>{customer.adminUrl}</a>
          </Link>
        </div>
        <div>
          <p className='text-xl font-medium mb-2'>Lien pour obtenir les identifiants de l&apos;administration :</p>
          <Link href={customer.credentialsUrl as string}>
            <a target='_blank' className='text-black underline'>Discord</a>
          </Link>
        </div>
        <RedeployButton url={customer.deployUrl} />
      </>
    )
  }
}

CustomerPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}

export default CustomerPage

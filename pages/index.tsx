import AuthLayout from 'components/AuthLayout/AuthLayout'
import CustomerList from 'components/CustomerList/CustomerList'
import NewCustomerButton from 'components/NewCustomerButton/NewCustomerButton'
import { ReactElement } from 'react'

const DashboardPage = () => {
  return (
    <>
      <CustomerList />
      <NewCustomerButton />
    </>
  )
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}

export default DashboardPage

import AuthLayout from 'components/AuthLayout/AuthLayout'
import GoToHomeButton from 'components/GoToHomeButton/GoToHomeButton'
import NewCustomerForm from 'components/NewCustomerForm/NewCustomerForm'
import { ReactElement } from 'react'

const NewCustomerPage = () => {
  return (
    <>
      <GoToHomeButton />
      <NewCustomerForm />
    </>
  )
}

NewCustomerPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}

export default NewCustomerPage

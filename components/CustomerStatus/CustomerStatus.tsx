import { Customer } from "types/Customer.type";

type CustomerStatusProps = {
  customer: Customer
}

export default function CustomerStatus({ customer }: CustomerStatusProps) {
  return <>
    {
      customer.status === "Hors ligne" && (
        <span className="flex-shrink-0 inline-block px-2 py-1 text-red-800 text-sm font-medium bg-red-100 rounded-full">
          {customer.status}
        </span>
      )
    }
    {
      customer.status === "En ligne" && (
        <span className="flex-shrink-0 inline-block px-2 py-1 text-green-800 text-sm font-medium bg-green-100 rounded-full">
          {customer.status}
        </span>
      )
    }
  </>
}
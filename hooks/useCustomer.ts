import { useEffect, useState } from "react";
import { Customer } from "types/Customer.type";

export default function useCustomers() {
  const [customers, setCustomers] = useState<Customer[]>([])

  useEffect(() => {
    const rawData: Customer[] = [{
      slug: 'agence-web-france',
      title: 'Agence Web France',
      description: 'Site vitrine Next.js',
      status: 'Hors ligne',
      email: 'mgelle.agencewebfrance@gmail.com',
      telephone: '+33686765547',
      url: 'https://www.agence-web-france.com/',
      adminUrl: 'https://www.awf-supervisor.agence-web-france.com/login',
      credentialsUrl: 'https://discord.com/channels/752104885532622949/832381713505714186',
      deployUrl: ''
    },
    {
      slug: 'cuisine-deco',
      title: 'Cuisine Déco',
      description: 'Site vitrine wordpress + Next.js',
      status: 'En ligne',
      email: 'anita@cuisinedeco.fr',
      telephone: '+33672843914',
      url: 'https://www.cuisinedeco.fr/',
      adminUrl: 'https://admin.cuisinedeco.fr/',
      credentialsUrl: 'https://discord.com/channels/752104885532622949/832381713505714186',
      deployUrl: 'https://api.vercel.com/v1/integrations/deploy/prj_YmI9A5Xx8zPhcNzptcreeUOz4jtp/EpNjY1AUXt'
    },
    {
      slug: 'digital-rc',
      title: 'Digital RC',
      description: 'Site vitrine wordpress + Next.js',
      status: 'En ligne',
      email: 'richardclaude721@gmail.com',
      telephone: '+33650515864',
      url: 'https://digitalrc.fr/',
      adminUrl: 'https://admin.digitalrc.fr/',
      credentialsUrl: 'https://discord.com/channels/752104885532622949/832381713505714186',
      deployUrl: ''
    }]
    setCustomers(rawData)
  }, [])

  const getCustomerBySlug = (slug: string): Customer | undefined => customers.filter((customer) => customer.slug === slug)[0]

  return { customers, getCustomerBySlug }
}
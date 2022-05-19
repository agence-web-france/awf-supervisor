export default function NewCustomerForm() {
  return <>
    <div className="pt-8">
      <div>
        <h3 className="text-2xl leading-6 font-medium text-gray-900">Créer un nouveau site web</h3>
        <p className="mt-3 text-base text-gray-500 leading-5">Saisissez les informations nécessaire pour créer votre nouveau site web</p>
      </div>
      <div className="mt-6">
        <p className="text-base font-medium text-gray-900 mb-2">Informations :</p>
      </div>
      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
            Nom du projet
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
            Slug
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <div className="sm:col-span-6">
          <p className="text-base font-medium text-gray-900">Technologies :</p>
          <fieldset className="mt-4">
            <legend className="sr-only">Technologies</legend>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  id="sqlite"
                  name="stack"
                  type="radio"
                  className="focus:ring-black h-4 w-4 text-slate-600 border-gray-300"
                  defaultChecked
                />
                <label htmlFor={"sqlite"} className="ml-3 block text-sm font-medium text-gray-700">
                  Next.js + SQLite
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="wordpress"
                  name="stack"
                  type="radio"
                  className="focus:ring-black h-4 w-4 text-slate-600 border-gray-300"
                />
                <label htmlFor={"wordpress"} className="ml-3 block text-sm font-medium text-gray-700">
                  Next.js + Wordpress
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="chapiter"
                  name="stack"
                  type="radio"
                  className="focus:ring-black h-4 w-4 text-slate-600 border-gray-300"
                />
                <label htmlFor={"chapiter"} className="ml-3 block text-sm font-medium text-gray-700">
                  Next.js + Chapiter
                </label>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="sm:col-span-6">
          <p className="text-base font-medium text-gray-900">Machines :</p>
          <fieldset className="mt-4">
            <legend className="sr-only">Machines</legend>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  id="vps"
                  name="vps"
                  type="radio"
                  defaultChecked
                  className="focus:ring-black h-4 w-4 text-slate-600 border-gray-300"
                />
                <label htmlFor={"vps"} className="ml-3 block text-sm font-medium text-gray-700">
                  vps-782442a1.vps.ovh.net
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </>
}
interface TProps {
  CardTitle: string
  CardDescription: string
  CardIcon: string
  CardLink: string
}

const ServiceCard = ({ CardTitle, CardDescription, CardIcon, CardLink }: TProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
        <i className={`${CardIcon} text-2xl text-indigo-600`}></i>
      </div>
      <h3 className="text-xl font-bold mb-3">{CardTitle}</h3>
      <p className="text-gray-600 mb-4">
        {CardDescription}
      </p>
      <a href={CardLink} className="text-indigo-600 font-medium hover:text-indigo-700 inline-flex items-center">
        Learn more
        <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    </div>
  )
}

export default ServiceCard

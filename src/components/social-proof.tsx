import Image from 'next/image'

export const SocialProof = ({ dict }: { dict: any }) => {
  return (
    <div className="mt-12 text-center">
      <p className="text-sm text-gray-400 mb-4">{dict.socialProof.title}</p>
      <div className="flex justify-center items-center space-x-8">
        {dict.socialProof.companies.map((company: string, index: number) => (
          <Image
            key={index}
            src={`/company-logos/${company}.svg`}
            alt={company}
            width={100}
            height={40}
            className="opacity-50 hover:opacity-100 transition-opacity"
          />
        ))}
      </div>
    </div>
  )
}


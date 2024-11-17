import { Link } from 'next-view-transitions'

import { SPECIAL_COMPONENTS } from '@/constants/special-components'
import { FormFieldType } from '@/types'

export type FormFieldOrGroup = FormFieldType | FormFieldType[]

const SpecialComponentsNotice = ({
  formFields,
}: {
  formFields: FormFieldOrGroup[]
}) => {
  const usedSpecialComponents = SPECIAL_COMPONENTS.filter((component) =>
    formFields.some(
      (field) => !Array.isArray(field) && field.variant === component.variant,
    ),
  )

  if (usedSpecialComponents.length === 0) return null

  return (
    <>
      <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
        This form includes special components, add the component in your
        directory.
      </p>
      <ul className="list-disc text-sm text-muted-foreground pl-3 md:pl-5 lg:pl-8">
        {usedSpecialComponents.map((component) => (
          <li key={component.variant} className="hover:shadow-lg transition-shadow duration-200">
            <Link
              href={component.url}
              target="_blank"
              className="hover:underline"
              aria-label={`Learn more about ${component.variant}`}
            >
              {component.variant}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default SpecialComponentsNotice

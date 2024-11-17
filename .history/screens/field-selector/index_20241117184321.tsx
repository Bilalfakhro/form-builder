import React from 'react'

import { fieldTypes } from '@/constants'
import { Button } from '@/components/ui/button'
import If from '@/components/ui/if'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

type FieldSelectorProps = {
  addFormField: (variant: string, index?: number) => void
}

export const FieldSelector: React.FC<FieldSelectorProps> = ({
  addFormField,
}) => {
  return (
    <div className="flex flex-row items-center md:items-start flex-wrap gap-3 min-h-[70vh] overflow-y-auto">
      {fieldTypes.map((variant) => (
        <div className="flex items-center gap-1" key={variant.name}>
          <Button
            key={variant.name}
            variant="outline"
            onClick={() => addFormField(variant.name, variant.index)}
            className="rounded-full hover:scale-105 transform transition-transform duration-200"
            size="sm"
          >
            {variant.name}
            <If
              condition={variant.isNew}
              render={() => (
                <Badge variant={'new'} className='md:hidden ml-1 p-1 text-[10px] bg-gradient-to-r from-yellow-400 to-pink-500'>
                  New
                </Badge>
              )}
            />
          </Button>
          <If
            condition={variant.isNew}
            render={() => (
              <Badge variant={'new'} className='hidden md:block ml-1 p-1 text-[10px] bg-gradient-to-r from-yellow-400 to-pink-500'>
                New
              </Badge>
            )}
          />
        </div>
      ))}
      <Link href="https://shadcnform.featurebase.app/" target="_blank">
        <Button className="rounded-full" size="sm">
          Request
        </Button>
      </Link>
    </div>
  )
}

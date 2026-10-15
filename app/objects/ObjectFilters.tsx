'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'

import type {
  InstallationAreaFilterOption,
  InstallationTypeOption,
} from '@/shared/api/types'

import { Checkbox } from '@/shared/ui/Checkbox'
import { Typography } from '@/shared/ui/Typography'

interface ObjectFiltersProps {
  areaFilterOptions: InstallationAreaFilterOption[]
  mobileSection?: 'areaFilters' | 'types'
  onClose?: () => void
  typeOptions: InstallationTypeOption[]
}

export function ObjectFilters({
  areaFilterOptions,
  mobileSection,
  onClose,
  typeOptions,
}: ObjectFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [optimisticTypes, setOptimisticTypes] = useState<number[]>(
    searchParams.getAll('types').map(Number),
  )
  const [optimisticAreaFilters, setOptimisticAreaFilters] = useState<number[]>(
    searchParams.getAll('areaFilters').map(Number),
  )

  const updateParams = useCallback(
    (updates: Record<string, null | number[] | string>) => {
      const params = new URLSearchParams(searchParams.toString())

      for (const [key, value] of Object.entries(updates)) {
        params.delete(key)
        if (value === null) continue
        if (Array.isArray(value)) {
          value.forEach(v => params.append(key, String(v)))
        } else {
          params.set(key, String(value))
        }
      }

      router.push(`/objects?${params.toString()}`)
    },
    [router, searchParams],
  )

  const handleTypeChange = (id: number, checked: boolean) => {
    const next = checked
      ? [...optimisticTypes, id]
      : optimisticTypes.filter(v => v !== id)
    setOptimisticTypes(next)
    updateParams({ types: next })
  }

  const handleAreaFilterChange = (id: number, checked: boolean) => {
    const next = checked
      ? [...optimisticAreaFilters, id]
      : optimisticAreaFilters.filter(v => v !== id)
    setOptimisticAreaFilters(next)
    updateParams({ areaFilters: next })
    onClose?.()
  }

  const showTypes = !mobileSection || mobileSection === 'types'
  const showAreaFilters = !mobileSection || mobileSection === 'areaFilters'

  return (
    <>
      {showTypes && (
        <div>
          <Typography
            className='text-primary-blue mb-[32px]'
            tag='p'
            variant='p1'>
            Тип объекта
          </Typography>
          <div className='flex flex-col gap-[24px]'>
            {typeOptions.map(opt => (
              <Checkbox
                checked={optimisticTypes.includes(opt.id)}
                key={opt.id}
                label={opt.name}
                onChange={checked => handleTypeChange(opt.id, checked)}
                variant='bordered'
              />
            ))}
          </div>
        </div>
      )}
      {showAreaFilters && (
        <div className={mobileSection ? '' : 'mt-[64px]'}>
          <Typography
            className='text-primary-blue mb-[32px]'
            tag='p'
            variant='p1'>
            Площадь (кв. м.)
          </Typography>
          <div className='flex flex-col gap-[24px]'>
            {areaFilterOptions.map(opt => (
              <Checkbox
                checked={optimisticAreaFilters.includes(opt.id)}
                key={opt.id}
                label={opt.name}
                onChange={checked => handleAreaFilterChange(opt.id, checked)}
                variant='bordered'
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

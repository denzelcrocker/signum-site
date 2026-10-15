'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'

import type { DeviceType, SortOption } from '@/shared/api/types'

import { Checkbox } from '@/shared/ui/Checkbox'
import { Radio } from '@/shared/ui/Radio'
import { Typography } from '@/shared/ui/Typography'

interface ProductFiltersProps {
  categoryId: string
  deviceTypes: DeviceType[]
  mobileSection?: 'deviceTypes' | 'sort'
  onClose?: () => void
  sortOptions: SortOption[]
}

export function ProductFilters({
  categoryId,
  deviceTypes,
  mobileSection,
  onClose,
  sortOptions,
}: ProductFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [optimisticSort, setOptimisticSort] = useState<null | number>(
    searchParams.get('sort') ? Number(searchParams.get('sort')) : null,
  )
  const [optimisticDeviceTypes, setOptimisticDeviceTypes] = useState<number[]>(
    searchParams.getAll('deviceTypeIds').map(Number),
  )

  const updateParams = useCallback(
    (updates: Record<string, null | number | number[] | string>) => {
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

      router.push(`/catalog/products/${categoryId}?${params.toString()}`)
    },
    [router, searchParams, categoryId],
  )

  const handleSortChange = (id: number) => {
    setOptimisticSort(id)
    updateParams({ sort: id })
    onClose?.()
  }

  const handleDeviceTypeChange = (id: number, checked: boolean) => {
    const next = checked
      ? [...optimisticDeviceTypes, id]
      : optimisticDeviceTypes.filter(v => v !== id)
    setOptimisticDeviceTypes(next)
    updateParams({ deviceTypeIds: next })
  }

  const showDeviceTypes = !mobileSection || mobileSection === 'deviceTypes'
  const showSort = !mobileSection || mobileSection === 'sort'

  return (
    <>
      {showDeviceTypes && (
        <div>
          <Typography
            className='text-primary-blue mb-[32px]'
            tag='p'
            variant='p1'>
            Тип
          </Typography>
          <div className='flex flex-col gap-[24px]'>
            {deviceTypes.map(dt => (
              <Checkbox
                checked={optimisticDeviceTypes.includes(dt.id)}
                key={dt.id}
                label={dt.name}
                onChange={checked => handleDeviceTypeChange(dt.id, checked)}
                variant='bordered'
              />
            ))}
          </div>
        </div>
      )}
      {showSort && (
        <div className={mobileSection ? '' : 'mt-[64px]'}>
          <Typography
            className='text-primary-blue mb-[32px]'
            tag='p'
            variant='p1'>
            Сортировка
          </Typography>
          <div className='flex flex-col gap-[24px]'>
            {sortOptions.map(opt => (
              <Radio
                checked={optimisticSort === opt.id}
                key={opt.id}
                label={opt.name}
                name='sort'
                onChange={() => handleSortChange(opt.id)}
                variant='bordered'
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

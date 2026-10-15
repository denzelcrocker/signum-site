'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { ObjectCard } from '@/domains/object/components/ObjectCard'
import {
  getInstallationAreaFilterOptions,
  getInstallations,
  getInstallationTypeOptions,
} from '@/shared/api'
import { isRokada } from '@/shared/constants'
import { useFetch } from '@/shared/lib/useFetch'
import { Typography } from '@/shared/ui/Typography'

import { ObjectFilters } from './ObjectFilters'

const ROOT_FOLDER_ID = isRokada ? '2' : '1'

export function ObjectList() {
  const searchParams = useSearchParams()

  const types = searchParams.getAll('types').map(Number)
  const areaFilters = searchParams.getAll('areaFilters').map(Number)

  const { data: areaFilterOptions } = useFetch(
    getInstallationAreaFilterOptions,
    [],
  )
  const { data: typeOptions } = useFetch(getInstallationTypeOptions, [])
  const {
    data: installations,
    error,
    loading,
  } = useFetch(
    () =>
      getInstallations({
        areaFilters,
        folderId: ROOT_FOLDER_ID,
        types,
      }),
    [searchParams.toString()],
  )
  const [mobilePanel, setMobilePanel] = useState<
    'areaFilters' | 'types' | null
  >(null)

  return (
    <div className='mt-[32px] flex flex-col gap-[32px] md:mt-[65px] md:flex-row md:gap-[50px]'>
      <div className='hidden w-[250px] md:block'>
        <ObjectFilters
          areaFilterOptions={areaFilterOptions ?? []}
          typeOptions={typeOptions ?? []}
        />
      </div>
      <div className='flex gap-2 md:hidden'>
        <button onClick={() => setMobilePanel('types')}>
          <Typography className='text-primary-blue' tag='p' variant='p1'>
            Тип
          </Typography>
        </button>
        <Typography className='text-primary-blue' tag='p' variant='p1'>
          |
        </Typography>
        <button onClick={() => setMobilePanel('areaFilters')}>
          <Typography className='text-primary-blue' tag='p' variant='p1'>
            Площадь
          </Typography>
        </button>
      </div>
      {mobilePanel && (
        <div
          className='fixed inset-0 z-50 flex items-end md:hidden'
          onClick={() => setMobilePanel(null)}>
          <div
            className='w-full rounded-t-[16px] bg-white px-[24px] pt-[24px] pb-[48px]'
            onClick={e => e.stopPropagation()}>
            <div className='mb-[24px] flex items-center justify-between'>
              <Typography
                className='text-primary-blue'
                tag='p'
                variant='p1-highlight'>
                {mobilePanel === 'types' ? 'Тип' : 'Площадь'}
              </Typography>
              <button
                className='text-primary-grey text-[24px] leading-none'
                onClick={() => setMobilePanel(null)}>
                ×
              </button>
            </div>
            <ObjectFilters
              areaFilterOptions={areaFilterOptions ?? []}
              mobileSection={mobilePanel}
              onClose={() => setMobilePanel(null)}
              typeOptions={typeOptions ?? []}
            />
          </div>
        </div>
      )}
      <div className='flex-1'>
        <Typography className='text-primary-grey' tag='p' variant='h3'>
          Реализованные проекты
        </Typography>
        {loading ? (
          <div className='mt-[20px] grid grid-cols-2 gap-1 md:mt-[40px] md:gap-2 lg:grid-cols-3'>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                className='aspect-[3/4] animate-pulse rounded-[6px] bg-gray-100'
                key={i}
              />
            ))}
          </div>
        ) : error ? (
          <Typography
            className='text-primary-grey mt-[65px]'
            tag='p'
            variant='p1'>
            Не удалось загрузить проекты. Попробуйте позже.
          </Typography>
        ) : (
          <div className='mt-[20px] grid grid-cols-1 gap-1 md:mt-[40px] md:grid-cols-2 md:gap-4'>
            {installations!.map(installation => (
              <ObjectCard installation={installation} key={installation.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

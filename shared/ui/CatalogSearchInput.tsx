'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import type { ProductListItem } from '@/shared/api/types'

import { getProducts } from '@/shared/api'
import { IconSearch } from '@/shared/icons/IconSearch'
import { cn } from '@/shared/lib/cn'
import { useDebounce } from '@/shared/lib/useDebounce'
import { Input } from '@/shared/ui/Input'
import { Typography } from '@/shared/ui/Typography'

import { isRokada } from '../constants'

interface CatalogSearchInputProps {
  className?: string
}

export function CatalogSearchInput({ className }: CatalogSearchInputProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<ProductListItem[]>([])
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const debouncedQuery = useDebounce(query)

  useEffect(() => {
    if (!debouncedQuery.trim()) return

    const controller = new AbortController()

    getProducts({ search: debouncedQuery }, controller.signal).then(data => {
      setResults(data ?? [])
      setOpen(true)
    })

    return () => controller.abort()
  }, [debouncedQuery])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    if (!value.trim()) {
      setOpen(false)
      setResults([])
    }
  }

  return (
    <div
      className={cn('relative', className ?? 'w-full flex-1 lg:max-w-[486px]')}
      ref={containerRef}>
      <Input
        onChange={handleChange}
        placeholder={isRokada ? 'Громкоговоритель...' : 'Извещатель дымовой...'}
        rightIcon={<IconSearch />}
        value={query}
        variant='bordered'
      />
      {open && (
        <div className='bg-background border-primary-blue absolute top-full left-0 z-50 mt-1 w-full rounded-[4px] border-[0.5px] shadow-lg'>
          {results.length === 0 ? (
            <div className='p-3'>
              <Typography className='text-primary-grey' variant='p2'>
                Ничего не найдено
              </Typography>
            </div>
          ) : (
            <ul>
              {results.map(product => (
                <li key={product.id}>
                  <Link
                    className='hover:bg-secondary-card block px-3 py-2 transition-colors'
                    href={`/catalog/product/${product.id}`}
                    onClick={() => setOpen(false)}>
                    <Typography className='text-primary-blue' variant='p2'>
                      {product.name}
                    </Typography>
                    <Typography className='text-primary-grey' variant='p2'>
                      {product.price.toLocaleString('ru-RU')} ₽
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

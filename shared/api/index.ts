import type {
  Category,
  DesignerSection,
  DeviceType,
  HomeData,
  InstallationAreaFilterOption,
  InstallationListItem,
  InstallationTypeOption,
  MapInstallation,
  ProductDetail,
  ProductListItem,
  SortOption,
} from './types'

import { isRokada } from '../constants'

const ROOT_ID = isRokada ? '2' : '1'

const SERVER_API_URL = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL
const PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL ?? process.env.API_URL

function requireUrl(value: string | undefined, name: string): string {
  if (!value) {
    throw new Error(`${name} is not configured`)
  }

  return value.replace(/\/$/, '')
}

const API_URL = requireUrl(SERVER_API_URL, 'API_URL')
const NEXT_PUBLIC_API_URL = requireUrl(PUBLIC_API_URL, 'NEXT_PUBLIC_API_URL')

const noStore = { cache: 'no-store' } as const

export async function getCatalogTree(): Promise<Category | null> {
  try {
    const res = await fetch(
      `${API_URL}/api/catalog/tree/${ROOT_ID}`,
      noStore,
    )
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export async function getDesignerSections(): Promise<DesignerSection[]> {
  try {
    const res = await fetch(
      `${API_URL}/api/designer-sections?rootId=${ROOT_ID}`,
      { cache: 'no-store' },
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.sections ?? []
  } catch {
    return []
  }
}

export async function getDeviceTypes(): Promise<DeviceType[] | null> {
  try {
    const url = new URL(`${NEXT_PUBLIC_API_URL}/api/device-types`)
    if (ROOT_ID) url.searchParams.set('rootId', ROOT_ID)
    const res = await fetch(url, noStore)
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export async function getHomeData(): Promise<HomeData | null> {
  try {
    const res = await fetch(
      `${API_URL}/api/home?rootId=${ROOT_ID}`,
      { cache: 'no-store' },
    )
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export async function getInstallationAreaFilterOptions(): Promise<
  InstallationAreaFilterOption[] | null
> {
  try {
    const res = await fetch(
      `${NEXT_PUBLIC_API_URL}/api/installations/area-filter-options`,
      noStore,
    )
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export async function getInstallations(
  params: {
    areaFilters?: number[]
    folderId: string
    types?: number[]
  },
  signal?: AbortSignal,
): Promise<InstallationListItem[] | null> {
  try {
    const url = new URL(
      `${NEXT_PUBLIC_API_URL}/api/installations/folder/${params.folderId}`,
    )
    params.types?.forEach(t => url.searchParams.append('types', String(t)))
    params.areaFilters?.forEach(a =>
      url.searchParams.append('areaFilters', String(a)),
    )
    const res = await fetch(url, { ...noStore, signal })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export async function getInstallationTypeOptions(): Promise<
  InstallationTypeOption[] | null
> {
  try {
    const res = await fetch(
      `${NEXT_PUBLIC_API_URL}/api/installations/type-options`,
      noStore,
    )
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export async function getMapInstallations(): Promise<MapInstallation[] | null> {
  try {
    const url = new URL(
      `${NEXT_PUBLIC_API_URL}/api/map-installations`,
    )
    url.searchParams.set('rootId', ROOT_ID)
    const res = await fetch(url, noStore)
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export async function getProduct(id: string): Promise<null | ProductDetail> {
  try {
    const res = await fetch(`${API_URL}/api/products/${id}`, noStore)
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export async function getProducts(
  params: {
    deviceTypeIds?: number[]
    folderId?: string
    rootId?: string
    search?: string
    sort?: number
  },
  signal?: AbortSignal,
): Promise<null | ProductListItem[]> {
  try {
    const url = new URL(`${NEXT_PUBLIC_API_URL}/api/products`)
    if (params.folderId) url.searchParams.set('folderId', params.folderId)
    url.searchParams.set('rootId', params.rootId ?? ROOT_ID)
    if (params.sort !== undefined)
      url.searchParams.set('sort', String(params.sort))
    if (params.search) url.searchParams.set('search', params.search)
    params.deviceTypeIds?.forEach(id =>
      url.searchParams.append('deviceTypeIds', String(id)),
    )
    const res = await fetch(url, { ...noStore, signal })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export async function getSortOptions(): Promise<null | SortOption[]> {
  try {
    const res = await fetch(
      `${NEXT_PUBLIC_API_URL}/api/products/sort-options`,
      noStore,
    )
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

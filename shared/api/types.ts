export interface Category {
  children: Category[]
  id: number
  imageUrl: null | string
  name: string
}

export interface ContentBlock {
  file: null | { extension: string; id: number; name: string; url: string }
  id: number
  sortOrder: number
  text: string
  type: 'Image' | 'Markdown'
}

export interface DesignerSection {
  description: string
  files: DesignerSectionFile[]
  id: number
  imageUrl: string
  name: string
}

export interface DesignerSectionFile {
  description: string
  fileUrl: string
  id: number
  title: string
}

export interface DeviceType {
  id: number
  name: string
}

export interface Document {
  extension: string
  id: number
  title: string
  url: string
}

export interface Feature {
  iconUrl: string
  id: number
  sortOrder: number
  title: string
}

export interface GalleryImage {
  id: number
  sortOrder: number | string
  type: string
  url: string
}

export interface HomeData {
  featured: {
    mediaUrl: string
    productId: number
    productUrl: string
    title: string
  }
  products: ProductListItem[]
  rootId: number
  rootName: string
}

export interface InstallationAreaFilterOption {
  id: number
  name: string
}

export interface InstallationImage {
  id: number
  order: number
  type: number
  url: string
}

export interface InstallationListItem {
  address: string
  area: number
  description: string
  folderName: string
  id: number
  images: InstallationImage[]
  name: string
  type: number
}

export interface InstallationTypeOption {
  id: number
  name: string
}

export interface MapInstallation {
  /** Порядок с сервера — [долгота, широта]. */
  coordinates: [number, number]
  /** Сервер отдаёт не для всех записей. */
  id?: number
  name: string
  /** Сервер отдаёт не для всех записей. */
  rootId?: number
}

export interface ProductDetail {
  code: string
  content: ContentBlock[]
  description: string
  deviceType: string
  documents: Document[]
  features: Feature[]
  folderName: string
  id: number
  images: GalleryImage[]
  manufacturer: string
  name: string
  price: number
  properties: Property[]
  relatedProducts: RelatedProduct[]
}

export interface ProductListItem {
  code: string
  folderName: string
  hoverImageUrl: null | string
  id: number
  mainImageUrl: null | string
  manufacturer: string
  name: string
  price: number
}

export interface Property {
  name: string
  value: string
}

export interface RelatedProduct {
  hoverImageUrl: null | string
  id: number
  mainImageUrl: null | string
  name: string
  price: number
}

export interface SortOption {
  id: number
  name: string
}

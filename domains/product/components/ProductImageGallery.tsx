'use client'

import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

interface GalleryImage {
  id: number
  sortOrder: number | string
  type: string
  url: string
}

interface ProductImageGalleryProps {
  images: GalleryImage[]
}

export const ProductImageGallery = ({ images }: ProductImageGalleryProps) => {
  const thumbnails = images
    .slice()
    .sort((a, b) => Number(a.sortOrder) - Number(b.sortOrder))
    .filter(img => img.type !== 'Hover')
  const [activeImage, setActiveImage] = useState(
    thumbnails.find(img => img.type === 'Main') ?? thumbnails[0],
  )
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const slides = thumbnails.map(img => ({ src: img.url }))

  return (
    <>
      <div className='flex w-full flex-1 flex-col-reverse gap-[8px] md:max-w-[566px] md:flex-row md:gap-[32px]'>
        <div
          className='flex flex-row gap-2 overflow-x-auto md:max-h-[456px] md:flex-col md:overflow-x-visible md:overflow-y-auto'
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
          {thumbnails.map(img => (
            <button
              className={`bg-secondary-card-bg relative h-[120px] w-[120px] shrink-0 rounded-[6px] border-[1px] transition-all md:h-[130px] md:w-[130px] md:bg-transparent ${activeImage?.id === img.id ? 'md:border-primary-orange border-transparent' : 'hover:border-primary-orange border-transparent'}`}
              key={img.id}
              onClick={() => setActiveImage(img)}>
              <Image alt='' className='object-contain' fill src={img.url} />
            </button>
          ))}
        </div>
        <button
          className='relative aspect-square w-full cursor-zoom-in md:aspect-auto md:h-[456px] md:flex-1'
          onClick={() => {
            const idx = thumbnails.findIndex(t => t.id === activeImage?.id)
            setLightboxIndex(idx >= 0 ? idx : 0)
          }}>
          {activeImage && (
            <Image
              alt=''
              className='object-contain'
              fill
              src={activeImage.url}
            />
          )}
        </button>
      </div>

      <Lightbox
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        open={lightboxIndex >= 0}
        plugins={[Zoom, Thumbnails]}
        slides={slides}
      />
    </>
  )
}

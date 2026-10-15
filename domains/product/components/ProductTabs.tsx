'use client'

import Image from 'next/image'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

import { IconFile } from '@/shared/icons/IconFile'
import { Typography } from '@/shared/ui/Typography'

interface ContentBlock {
  file: null | { extension: string; id: number; name: string; url: string }
  id: number
  sortOrder: number
  text: string
  type: 'Image' | 'Markdown'
}

interface Document {
  extension: string
  id: number
  title: string
  url: string
}

interface ProductTabsProps {
  content: ContentBlock[]
  documents: Document[]
  properties: Property[]
}

interface Property {
  name: string
  value: string
}

export const ProductTabs = ({
  content,
  documents,
  properties,
}: ProductTabsProps) => {
  const [activeSection, setActiveSection] = useState<
    'description' | 'documentation' | 'specifications'
  >('description')

  return (
    <>
      <div className='bg-secondary-card-bg mt-[64px] py-[12px] md:py-[32px]'>
        <div className='container'>
          <div
            className='scrollbar-hide flex gap-[32px] overflow-x-auto'
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            <button
              className={`flex items-center gap-2 text-[16px] leading-[104%] lg:text-[18px] ${activeSection === 'description' ? 'text-primary-orange' : 'text-primary-black'}`}
              onClick={() => setActiveSection('description')}>
              <svg
                className='h-[14px] w-[18.375px] md:h-[16px] md:w-[21px]'
                fill='none'
                viewBox='0 0 21 16'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M21 16H0V14H21V16ZM21 9H0V7H21V9ZM21 2H0V0H21V2Z'
                  fill='currentColor'
                />
              </svg>
              Описание
            </button>
            <button
              className={`flex items-center gap-2 text-[16px] leading-[104%] lg:text-[18px] ${activeSection === 'specifications' ? 'text-primary-orange' : 'text-primary-black'}`}
              onClick={() => setActiveSection('specifications')}>
              <svg
                className='h-[14px] w-[16.667px] md:h-[21px] md:w-[25px]'
                fill='none'
                viewBox='0 0 25 21'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M2.9082 15.1855C4.28892 15.1855 5.4082 16.3048 5.4082 17.6855C5.40794 19.066 4.28875 20.1855 2.9082 20.1855C1.52765 20.1855 0.408467 19.066 0.408203 17.6855C0.408203 16.3048 1.52749 15.1855 2.9082 15.1855ZM24.377 18.9541H9.37695V16.9541H24.377V18.9541ZM8.18945 8.625L3.00391 13.1631L0 10.1592L1.5 8.625L3.00391 10.1592L6.5 7.00098L8.18945 8.625ZM24.377 11.5166H9.37695V9.5166H24.377V11.5166ZM8.18945 1.62402L3.00391 6.16211L0 3.1582L1.5 1.62402L3.00391 3.1582L6.5 0L8.18945 1.62402ZM24.377 4.0791H9.37695V2.0791H24.377V4.0791Z'
                  fill='currentColor'
                />
              </svg>
              Характеристики
            </button>
            <button
              className={`flex items-center gap-2 text-[16px] leading-[104%] lg:text-[18px] ${activeSection === 'documentation' ? 'text-primary-orange' : 'text-primary-black'}`}
              onClick={() => setActiveSection('documentation')}>
              <svg
                className='h-[14px] w-[10.08px] md:h-[25px] md:w-[18px]'
                fill='none'
                viewBox='0 0 18 25'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M0 22.4359V2.5641C0 1.14799 1.11157 0 2.48276 0H11.2791C11.9375 5.11552e-05 12.5689 0.270385 13.0345 0.751202L17.2726 5.12821C17.7382 5.60902 18 6.26113 18 6.94111V22.4359C18 23.852 16.8884 25 15.5172 25H2.48276C1.11157 25 0 23.852 0 22.4359ZM13.0345 12.5938C13.7201 12.5938 14.2759 12.9288 14.2759 13.6369C14.2759 14.3449 13.7201 14.7436 13.0345 14.7436H4.96552C4.06812 14.7436 3.62305 14.2288 3.62305 13.5938C3.62305 12.9587 4.27992 12.5938 4.96552 12.5938H13.0345ZM11.123 6.94111H16.123L11.123 1.59375V6.94111ZM1.62305 23.0938H16.123V8.97436H10.8002C9.97753 8.97436 9.31034 8.28532 9.31034 7.43565V1.59375H1.62305V23.0938Z'
                  fill='currentColor'
                />
                <path
                  d='M13.0345 16.9439C13.7201 16.9439 14.2759 17.279 14.2759 17.987C14.2759 18.6951 13.7201 19.0938 13.0345 19.0938H4.96552C4.06812 19.0938 3.62305 18.579 3.62305 17.9439C3.62305 17.3088 4.27992 16.9439 4.96552 16.9439H13.0345Z'
                  fill='currentColor'
                />
              </svg>
              Документация
            </button>
          </div>
        </div>
      </div>
      <div className='mt-[30px]'>
        <div className='container'>
          {activeSection === 'description' && (
            <div className='flex flex-col gap-[32px]'>
              {content.map(block =>
                block.type === 'Markdown' ? (
                  <div key={block.id}>
                    <ReactMarkdown
                      components={{
                        a: ({ children, href }) => (
                          <a
                            className='text-primary-orange underline'
                            href={href}
                            rel='noopener noreferrer'
                            target='_blank'>
                            {children}
                          </a>
                        ),
                        blockquote: ({ children }) => (
                          <blockquote className='border-primary-orange border-l-4 pl-3 italic'>
                            {children}
                          </blockquote>
                        ),
                        code: ({ children }) => (
                          <code className='rounded bg-gray-100 px-1 text-sm'>
                            {children}
                          </code>
                        ),
                        em: ({ children }) => (
                          <em className='italic'>{children}</em>
                        ),
                        h1: ({ children }) => (
                          <h1 className='mt-6 mb-3 text-2xl font-bold'>
                            {children}
                          </h1>
                        ),
                        h2: ({ children }) => (
                          <h2 className='mt-5 mb-2 text-xl font-bold'>
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className='mt-4 mb-2 text-lg font-bold'>
                            {children}
                          </h3>
                        ),
                        hr: () => (
                          <hr className='border-secondary-gray-50 my-4 border-t' />
                        ),
                        li: ({ children }) => (
                          <li className='mb-1'>{children}</li>
                        ),
                        ol: ({ children }) => (
                          <ol className='mb-3 list-decimal pl-6'>{children}</ol>
                        ),
                        p: ({ children }) => <p className='mb-3'>{children}</p>,
                        strong: ({ children }) => (
                          <strong className='font-bold'>{children}</strong>
                        ),
                        ul: ({ children }) => (
                          <ul className='mb-3 list-disc pl-6'>{children}</ul>
                        ),
                      }}>
                      {block.text.replaceAll('\\n', '\n\n')}
                    </ReactMarkdown>
                  </div>
                ) : block.file ? (
                  <div className='relative w-full' key={block.id}>
                    <Image
                      alt={block.file.name}
                      className='h-auto w-full object-contain'
                      height={600}
                      src={`${process.env.NEXT_PUBLIC_API_URL}${block.file.url}`}
                      width={1200}
                    />
                  </div>
                ) : null,
              )}
            </div>
          )}
          {activeSection === 'specifications' && (
            <div>
              <div className='grid grid-cols-2 gap-[8px]'>
                <Typography className='text-[14px] md:text-[16px]' variant='p2'>
                  Характеристика
                </Typography>
                <Typography className='text-[14px] md:text-[16px]' variant='p2'>
                  Значение
                </Typography>
              </div>
              <div className='bg-primary-orange my-[10px] h-[1.5px] w-full md:my-[20px]' />
              <div className='flex flex-col gap-[6px] md:gap-[12px]'>
                {properties.map((prop, i) => (
                  <div key={prop.name + i}>
                    <div className='grid grid-cols-2 gap-[8px]'>
                      <Typography
                        className='text-primary-blue text-[13px] md:text-[14px]'
                        variant='p2'>
                        {prop.name}
                      </Typography>
                      <Typography
                        className='text-primary-blue text-[13px] md:text-[14px]'
                        variant='p2'>
                        {prop.value}
                      </Typography>
                    </div>
                    {i < properties.length - 1 && (
                      <div className='bg-secondary-gray-50 mt-[6px] h-[1.5px] w-full md:mt-[16px]' />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeSection === 'documentation' && (
            <div className='flex flex-col gap-[24px]'>
              {documents.map(doc => (
                <a
                  className='flex items-center gap-[16px]'
                  href={doc.url}
                  key={doc.id}
                  rel='noopener noreferrer'
                  target='_blank'>
                  <IconFile />
                  <Typography
                    className='text-primary-orange text-[16px] leading-[104%] lg:text-[18px]'
                    variant='p1'>
                    {doc.title}
                  </Typography>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

'use client'

import dynamic from 'next/dynamic'

/** ssr: false — react-simple-maps даёт рассинхрон разметки при гидрации. */
export const HomeMap = dynamic(
  () => import('./HomeMap').then(mod => mod.HomeMap),
  { ssr: false },
)

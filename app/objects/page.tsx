import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Проекты',
}

export default function ObjectsPage() {
  // Временно скрыто: страница проектов/объектов отключена до наполнения раздела.
  notFound()
}

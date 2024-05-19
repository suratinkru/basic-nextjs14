import React from 'react'

import { Metadata } from 'next'
import DashboardPage from './Dashboard'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page description',
  keywords: ['Home', 'Next.js'],
}


type Props = {}

export default function Dashboard({}: Props) {
  return (
    <DashboardPage />
  )
}
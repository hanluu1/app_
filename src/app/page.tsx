import Image from 'next/image'
import Slider from '@/components/Slider'
import Features from '@/components/Features'
import Offers from '@/components/Offers'

export default function Home() {
  return (
    <main>
      <Slider/>
      <Features/>
      <Offers/>
    </main>
  )
}

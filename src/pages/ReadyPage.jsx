import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ShareVideo from '../components/ShareVideo'

export default function ReadyPage() {
  return (
    <div className='flex flex-col gap-[100px]'>
        <Header/>
        <ShareVideo/>
        <Footer/>
    </div>
  )
}

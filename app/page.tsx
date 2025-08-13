"use client"
import React from 'react'
import Hero from '@/components/Hero/Hero'
import MyExperience from '@/components/MyExperience/MyExperience'
import MyStack from '@/components/MyStack/MyStack'
import MyServices from '@/components/MyServices/MyServices'
import ShowCase from '@/components/ShowCase'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <div className="flex flex-col gap-0 px-5 lg:px-0 w-full">
      <div className='flex flex-col gap-[100px] max-w-full lg:max-w-[750px] lg:w-[80%] mx-auto py-[80px]'>
        <Hero />
        <MyExperience />
        <MyStack />
        <MyServices />
        <ShowCase isMore={true} showData={2} layout="list" />
        {/* <Testimonials /> */}
      </div>
    </div>
  )
}

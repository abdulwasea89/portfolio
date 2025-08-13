"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { flyIcon, linkIcon } from '@/app/assets/assets'
import Link from 'next/link'
import { myShowCases } from '@/data'
import { motion } from "framer-motion"

type ShowCaseProps = {
  isMore?: boolean;
  showData?: number;
  layout?: 'grid' | 'list';
}

export default function ShowCase({ isMore = true, showData = 2, layout = 'grid' }: ShowCaseProps) {
  return (
    <section className='flex flex-col gap-8 w-full'>
      <SectionHeading 
        title='Creative Design Showcase' 
        icon={flyIcon} 
        description='Explore a collection of my most innovative works.' 
      />

      <div className={`grid ${
        layout === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 gap-6' 
          : 'grid-cols-1 gap-8'
      } w-full`}>
        {myShowCases.slice(0, showData).map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="min-h-[280px]"
          >
            <div className="bg-very-dark-gray rounded-xl border border-dark-gray-3 flex flex-col gap-4 p-6 h-full hover:border-light-gray-3 hover:shadow-lg transition-all duration-300">
              
              {/* Project Info */}
              <h3 className='text-white font-bold text-xl'>{item.title}</h3>
              <p className='text-light-gray-2 text-[15px] flex-grow'>{item.description}</p>

              <div className="flex flex-wrap gap-2 items-center text-light-gray-2 text-[14px]">
                <span className="px-3 py-1 bg-dark-gray-4 rounded-full">{item.type}</span>
              </div>

              {/* Link Button */}
              <Link 
                href={"https://" + item.link} 
                target="_blank" 
                className="flex items-center justify-center gap-2 bg-almost-black border border-dark-gray-4 rounded-lg p-3 mt-3 hover:bg-dark-gray-4 transition group"
              >
                <div className="w-4 h-4 relative group-hover:scale-110 transition-transform">
                  <img src={linkIcon.src} alt="Link Icon" className="object-cover w-full h-full"/>
                </div>
                <p className="text-light-gray-3 text-sm truncate group-hover:text-white transition-colors">{item.link}</p>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {isMore && (
        <div className="w-full flex justify-center mt-4">
          <Link 
            href="/services" 
            className='bg-almost-black border border-dark-gray-4 rounded-lg px-6 py-3 text-sm text-very-light-gray hover:bg-dark-gray-4 transition'
          >
            Explore More Projects
          </Link>
        </div>
      )}
    </section>
  )
}

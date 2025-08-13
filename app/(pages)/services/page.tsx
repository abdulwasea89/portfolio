"use client"
import { calendarIcon, zapIcon } from '@/app/assets/assets'
import MyStack from '@/components/MyStack/MyStack'
import SectionHeading from '@/components/SectionHeading'
import ShowCase from '@/components/ShowCase'
import Testimonials from '@/components/Testimonials'
import { myServicesPlans } from '@/data'
import React from 'react'
import { motion } from "framer-motion"
import ScheduleButton from '@/components/ui/ScheduleButton'

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-0 p-0 w-full items-center">
      <div className='flex flex-col gap-[60px] max-w-full w-full lg:max-w-[750px] px-5 lg:px-0 lg:w-[80%] py-[80px_0]'>
        <SectionHeading 
          icon={zapIcon} 
          title='My Services' 
          description='Formulating comprehensive strategies to meet your design goals and exceed expectations.' 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {myServicesPlans?.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="h-full" // Add this to ensure equal height cards
            >
              <div className="rounded-xl border border-dark-gray-3 bg-very-dark-gray p-6 flex flex-col gap-4 h-full
                transition-all duration-300 hover:border-light-gray-3 hover:shadow-lg hover:scale-[1.02]">

                <div className="flex justify-between items-center">
                  <p className="font-bold text-[24px] text-very-light-gray">{plan.service}</p>
                </div>

                <p className="text-light-gray-2 text-[16px] flex-grow">{plan.description}</p>

                <div className="flex flex-col gap-2 border-t border-dark-gray-3 pt-2">
                  <InfoRow label="Experience" value={plan.experience + " years"} />
                </div>

                <ScheduleButton label='Schedule Call' icon={calendarIcon} />
              </div>
            </motion.div>
          ))}
        </div>

        <MyStack />
        
        {/* All Projects Section */}
        <div className="flex flex-col gap-8 mb-5">
          <SectionHeading 
            icon={zapIcon}
            title="All Projects"
            description="Explore my complete portfolio of projects and creative works."
          />
          <ShowCase isMore={false} showData={100} layout="grid" />
        </div>

        {/* <Testimonials /> */}
      </div>
    </div>
  )
}

type InfoRowProps = {
  label: string;
  value: string | number;
};

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
  <div className="flex justify-between items-center last:border-transparent border-b border-dark-gray-3 py-2">
    <p className="text-light-gray-2 font-medium text-[15px]">{label}</p>
    <p className="text-light-gray-4 font-bold text-[18px]">{value}</p>
  </div>
);

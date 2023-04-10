import React from 'react'
import { useState } from 'react'
import { Suspense } from 'react'
import TabBar from './TabBar'

function FAQ() {
  return (
    <Suspense fallback={<div>lOADING</div>}>
      <div className='flex flex-col justify-center items-center gap-3 px-40'>
        <TabBar heading ="Frequently asked questions" items = {["General" , "Support" , "Hosting" , "Product"]} />
      </div>
    </Suspense>
  )
}

export default FAQ
import Pageheader from '@/components/Pageheader'
import React from 'react'
import Contactpage from '@/app/contact-us/components/Contactpage'
function page() {
  return (
    <>
      <Pageheader pageTitle='Contact Us' />
      <Contactpage />
    </>
  )
}

export default page
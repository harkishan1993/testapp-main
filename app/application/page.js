import Pageheader from '@/components/Pageheader'
import React from 'react'
import Applicationpage from './component/Applicationpage'
function page() {
  return (
    <>
      <Pageheader pageTitle='Application' />
      <Applicationpage />
    </>
  )
}

export default page
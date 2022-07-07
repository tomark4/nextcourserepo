import React, { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import MainLayout from '../components/layouts/MainLayout'
import DarkLayout from '../components/layouts/DarkLayout'


const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sequi blanditiis totam eum assumenda? Voluptatibus provident, dolor aliquid laudantium consequuntur non quas, a amet eveniet est enim beatae dignissimos at! Quis illo aspernatur quos beatae debitis quo consectetur ad aliquid officia consequuntur laudantium natus nobis deserunt cumque excepturi, fuga rem.</p>
    </>
    
  )
}

AboutPage.getLayout = function getLayout(page: ReactElement){
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  )
}

export default AboutPage
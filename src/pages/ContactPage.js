import React from 'react'
import HeroPage from '../components/HeroPage'
import contactImg from '../images/contactBcg.jpeg'
import Contact from '../components/ContactPage/Contact'

export default function ContactPage () {
  return (
    <>
      <HeroPage img={contactImg} />
      <Contact />
    </>
  )
}

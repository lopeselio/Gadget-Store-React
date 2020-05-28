import React from 'react'
import Title from '../Title'

export default function Contact () {
  return (
    <section className='py-5'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <Title title='contact-us' />
          <form className='mt-5' action='https://formspree.io/lopeselio@gmail.com' method='POST'>
            <div className='form-group'>
              <input type='text' className='form-control' name='firstName' placeholder='John Smith' />
            </div>
            <div className='form-group'>
              <input type='email' className='form-control' name='email' placeholder='email@email.com' />
            </div>
            <div className='form-group'>
              <input type='text' className='form-control' name='subject' placeholder='important!!!' />
            </div>
            <div className='form-group'>
              <textarea className='form-control' name='message' rows='10' placeholder='hello there buddy' />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

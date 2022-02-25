import React from 'react'
import Layout from '../components/Layout'


function Contact() {
    return (
        <Layout>
            <main className="page">
            <div className="contact-page ">
                <article className="contact-info">
           <h3>Want to get in touch?</h3>
             <p>Kombucha cray +1 migas, sartorial tote bag hashtag ennui mumblecore yr forage stumptown vaporware direct trade.</p>
             <p>Humblebrag paleo roof party VHS flannel marfa listicle gastropub lomo. La croix unicorn woke neutra vaporware pitchfork affogato hammock put a bird on it. </p>
            <p>Butcher sartorial slow-carb mlkshk put a bird on it everyday carry. Bushwick activated charcoal slow-carb franzen.</p>
          </article> 
          <article>
              <form className="form contact-form">
                  <div className="form-row">
                      <label htmlFor="Name">Your Name</label>
                      <input type='text' name='name' id='name'></input>
                  </div>
                  <div className="form-row">
                      <label htmlFor="Email">Your Email</label>
                      <input type='email' name='email' id='email'></input>
                  </div>
                  <div className="form-row">
                      <label htmlFor="Message">Message</label>
                      <textarea  name='message' id='message'></textarea>
                  </div>
                  <button className="btn block" type="submit">Submit</button>
                  
              </form>
          </article>
           </div>
          </main>
     
        </Layout>
    )
}


export default Contact
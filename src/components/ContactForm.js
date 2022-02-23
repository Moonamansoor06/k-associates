import React from 'react'

import {Box} from 'theme-ui'


export default function ContactForm() {
  return (
    
      <Box p={2}  style={{display:'block',marginLeft:'500px'}}>
      <h1>Contact</h1>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        
      >

        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field"  />
          </label>
        </p>
        <p>
          <label>
            Your name:
            <br />
            <input type="text" name="name"  />
          </label>
        </p>
        <p>
          <label>
            Your email:
            <br />
            <input type="email" name="email"  />
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea name="message"  />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      </Box>
      )
}
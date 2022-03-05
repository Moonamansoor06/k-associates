/** @jsxImportSource theme-ui */
import React from 'react'
import {Card} from 'theme-ui'


export default function ContactForm() {
  return (
    <div sx={{justifyContent:"center",marginTop:'8%',marginBottom:'8%'}}>
    <Card sx={{variant:'cards.compact',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',alignContent:'center'
    ,width:'350px',height:'auto'}}>
      <h3 sx={{marginTop:'10px'}}>Contact us</h3>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        sx={{display:'flex', flexDirection:'column' ,alignItems:'center',alignContent:'center'}}
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
          <button sx={{color:'white',backgroundColor:'black',alignSelf:'center'}} type="submit">Send</button>
        </p>
      </form>
      </Card>
      </div>
      )
}
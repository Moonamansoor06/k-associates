/** @jsxImportSource theme-ui */
import React from 'react'
import {Card} from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image';


export default function ContactForm() {
  return (
    <div >
    <Card sx={{variant:'cards.compact',
    display:'flex', justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',alignContent:'center'
    ,width:'auto',height:'auto'}}>
      <StaticImage
       
          src="../images/contact_us.jpg"
          alt=""
          placeholder="blurred"
        />
<div sx={{marginTop:'5%',
marginBottom:'5%',
width:'70%',
border:'1px solid gray',
borderRadius:'5px',
boxShadow:'5px 10px #888888',
display:'flex',
flexDirection:'column',
justifyContent:'center',
alignItems:'center'}}>
      <h3 sx={{marginTop:'10px'}}>Contact us</h3>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        sx={{padding:'10px',display:'flex', flexDirection:'column' ,alignItems:'center',alignContent:'center'}}
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
            <input type="text" name="name" size="60" />
          </label>
        </p>
        <p>
          <label>
            Your email:
            <br />
            <input type="email" name="email" size="60" />
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea name="message"  rows="6" cols="60"/>
          </label>
        </p>
        <p>
          <button sx={{color:'white',
          backgroundColor:'black',
          alignSelf:'center',
          width:'200px',
          boxShadow:'2px 2px #888888',}} type="submit">Send</button>
        </p>
      </form>
    </div>
      </Card>
      </div>
      )
}
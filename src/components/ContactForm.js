/** @jsxImportSource theme-ui */
import React from "react"
import { Card } from "theme-ui"
import { StaticImage } from "gatsby-plugin-image"

export default function ContactForm() {
  return (
    <div sx={{
   
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      alignContent: "center",
    }}>
      <StaticImage
        src="../images/contact_us.jpg"
        alt=""
        placeholder="blurred"
      />
    <Card
      sx={{
        variant: "cards.compact",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        marginTop: "5%",
        marginBottom: "5%",
        width: "70%",
        border: "1px solid gray",
        borderRadius: "5px",
        boxShadow: "5px 10px #888888",
      }}
    >
      
      
        <h3 sx={{ marginTop: "10px" }}>Contact us</h3>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
       sx={{width:'100%',
       boxSizing:'border-box',
       display: "flex",
       justifyContent: "center",
       flexDirection: "column",
       alignItems: "center",
       alignContent: "center",}}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Your name:
              <br />
             
            </label>
            <input type="text" name="name"  />
          </p>
          <p>
            <label>
              Your email:
              <br />
              
            </label>
            <input type="email" name="email"  />
          </p>
          <p>
            <label>
              Message:
              <br />
              
            </label>
            <textarea name="message" rows="6"  />
          </p>
          <p>
            <button
              sx={{
                color: "white",
                backgroundColor: "black",
                alignSelf: "center",
                width: "200px",
                boxShadow: "2px 2px #888888",
              }}
              type="submit"
            >
              Send
            </button>
          </p>
        </form>
   
    </Card>
    </div>
  )
}

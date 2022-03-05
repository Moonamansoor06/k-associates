/** @jsxImportSource theme-ui */
import * as React from "react"
import { Card, Text } from "@theme-ui/components"
import NavBar2 from "./../components/NavBar2"
import NavBar from "./../components/NavBar"

const Thanks = () => {
  return (
    <div>
      <NavBar2 />
      <NavBar />
      <div
        sx={{
          marginTop: "8%",
          display: "flex",
          flexDirection: "column",
          aligItems: "center",
          alignContent: "center",
          justifyContent:"center",
        }}
      >
        <Card
          sx={{
            variant: "cards.compact",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
            width: "auto",
            height: "200px",
          }}
        >
          <h1>Thank you</h1>
          <Text sx={{ fontSize: "24px" }}>
            Your message is received, you will receive a reply soon
          </Text>
        </Card>
      </div>
    </div>
  )
}

export default Thanks

import React from "react"
import Button from "@material-ui/core/Button"

export default function ExportCharacter(props) {
  async function exportCharacter() {
    const fileName = "character"
    const json = JSON.stringify(props.character)
    const blob = new Blob([json],{type:'application/json'})
    const href = await URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = href
    link.download = fileName + ".chr"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <Button onClick={exportCharacter}>
        Export Character
      </Button>
    </>
  )
}

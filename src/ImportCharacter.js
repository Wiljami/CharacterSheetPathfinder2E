import React from "react";
import Button from "@material-ui/core/Button";

export default function ImportCharacter(props) {
  let fileReader;

  const handleFileRead = (e) => {
    const content = fileReader.result;
    const char = JSON.parse(content)
    props.callback(char)
  };

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  return (
    <>
      <input
        accept='.chr'
        id="contained-button-file"
        type='file'
        style={{display: 'none'}}
        onChange={e => handleFileChosen(e.target.files[0])}
      />
      <label htmlFor="contained-button-file">
        <Button component='span'>Import Character</Button>
      </label>
    </>
  )
}

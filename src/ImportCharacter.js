import React from "react";
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
      <input type='file'
             id='file'
             className='input-file'
             accept='.chr'
             onChange={e => handleFileChosen(e.target.files[0])}
      />
    </>
  )
}

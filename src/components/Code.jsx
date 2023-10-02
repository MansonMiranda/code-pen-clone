import { useContext } from 'react';

//componenets
import Editor from './Editor'

import { Box, styled } from '@mui/material'

import { DataContext } from '../context/DataProvider'

const Container = styled(Box)`
        display:flex; 
        background-color:#060606;    
`

const Code = () => {
 
  const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext);

  return (
    <Container>
      <Editor  
        language="xml"
        heading="HTML"
        color="#FF3C41"
        icon="/"
        value={html}
        onChange={setHtml}
      />

      <Editor
        language="css"
        heading="CSS"
        color='#0EBEFF'
        icon="*"
        value={css}
        onChange={setCss}
     />


      <Editor 
        language="javascript"
        heading="JavaScript"
        color='#FCD000'
        icon="( )" 
        value={js}
        onChange={setJs}
      />


    </Container>
  )
}

export default Code

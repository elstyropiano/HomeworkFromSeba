import { Button } from '@mui/material'
import styled from 'styled-components'

export default ({
  data,
  setClickedButton,
  setClickedCollection,
  setListElement,
}) => {
  const handleButton = async (element) => {
    const response = await fetch(data[element])
    const rowData = await response.json()
    setClickedCollection(rowData)
    setClickedButton(element)
    setListElement(rowData.results)
  }
  return (
    <S.MainWrapper>
      {data &&
        Object.keys(data).map((element, index) => (
          <Button
            color='success'
            key={index}
            onClick={() => handleButton(element)}
            sx={{
              flex: '1',
              height: '50px',
              margin: '5px',
              maxWidth: '500px',
            }}
            variant='contained'
          >
            {element}
          </Button>
        ))}
    </S.MainWrapper>
  )
}
const S = {
  MainWrapper: styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
  `,
}

import { useState, useEffect } from 'react'
import styled from 'styled-components'
import NavButtons from './components/NavButtons'
import Pagination from './components/Pagination'
import Table from './components/Table'

const baseURL = ' https://rickandmortyapi.com/api'

export default () => {
  const [clickedButton, setClickedButton] = useState(null)
  const [clickedCollection, setClickedCollection] = useState(null)
  const [data, setData] = useState(null)
  const [listElement, setListElement] = useState(null)
  const [checkbox, setCheckbox] = useState(() =>
    listElement?.map((element) => false)
  )
  const [rate, setRate] = useState(() =>
    listElement?.map((element) => 0)
  )

  useEffect(() => {
    ;(async () => {
      const response = await fetch(baseURL)
      const data = await response.json()
      setData(data)
    })()
  }, [])

  return (
    <S.MainWrapper>
      <NavButtons
        data={data}
        setClickedButton={setClickedButton}
        setClickedCollection={setClickedCollection}
        setListElement={setListElement}
      />
      {clickedButton && (
        <Table
          checkbox={checkbox}
          clickedButton={clickedButton}
          listElement={listElement}
          rate={rate}
          setCheckbox={setCheckbox}
          setListElement={setListElement}
          setRate={setRate}
        ></Table>
      )}
      <Pagination
        clickedButton={clickedButton}
        clickedCollection={clickedCollection}
        setCheckbox={setCheckbox}
        setClickedCollection={setClickedCollection}
        setListElement={setListElement}
        setRate={setRate}
      />
    </S.MainWrapper>
  )
}

const S = {
  MainWrapper: styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100vw;
  `,
}

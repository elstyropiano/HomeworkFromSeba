import { useEffect, useState } from 'react'
import styled from 'styled-components'
import SimpleElementList from './SimpleElementList'
import RemoveAllButton from './RemoveAllButton'

export default ({
  listElement,
  clickedButton,
  setListElement,
  checkbox,
  setCheckbox,
  rate,
  setRate,
}) => {
  const [keys, setKeys] = useState(null)

  useEffect(() => {
    setKeys([...Object.keys(listElement?.[0]), 'rate'])
    setCheckbox(() => listElement.map((element) => false))
    setRate(() => listElement.map((element) => 0))
  }, [clickedButton])

  return (
    <S.MainWrapper>
      <S.Table>
        <thead>
          <S.Tr>
            {keys &&
              keys.map((element) => {
                if (
                  element === 'url' ||
                  element === 'origin' ||
                  element === 'location'
                )
                  return
                if (
                  (clickedButton === 'characters' &&
                    element === 'type') ||
                  (clickedButton === 'characters' &&
                    element === 'episode')
                )
                  return
                return (
                  <S.Th key={element} expand={element === 'id'}>
                    {element}
                  </S.Th>
                )
              })}
          </S.Tr>
        </thead>
        <tbody>
          {listElement?.map((element, index) => (
            <SimpleElementList
              actuallyElementIndex={index}
              checkbox={checkbox}
              clickedButton={clickedButton}
              element={element}
              listElement={listElement}
              key={index}
              keys={keys}
              rate={rate}
              setListElement={setListElement}
              setCheckbox={setCheckbox}
              setRate={setRate}
            />
          ))}
        </tbody>
      </S.Table>
      {checkbox?.some((element) => element === true) && (
        <RemoveAllButton
          checkbox={checkbox}
          listElement={listElement}
          rate={rate}
          setCheckbox={setCheckbox}
          setListElement={setListElement}
          setRate={setRate}
        />
      )}
    </S.MainWrapper>
  )
}

const S = {
  MainWrapper: styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
  `,
  Table: styled.table`
    width: 90vw;
    display: flex;
    flex-direction: column;
    position: relative;
  `,
  Th: styled.th`
    flex: ${(props) => (props.expand ? '0.12' : '1')};
    margin: 30px 0 0 0;
    display: flex;
    border: 1px solid black;
    color: white;
    justify-content: center;
    background-color: rgba(10, 21, 12, 0.89);
    border-radius: 5px;
    text-transform: uppercase;
    padding: 5px 0;
  `,
  Tr: styled.tr`
    display: flex;
    justify-content: space-between;
    flex: 1;
  `,
  Td: styled.td`
    padding: 0 10px;
    display: 'flex';
    justify-content: center;
    flex: ${(props) => (props.expand ? '0.12' : '1')};
    overflow: ${(props) => (props.over ? 'scroll' : 'none')};
    word-break: ${(props) =>
      props.wordBreak ? 'none' : 'break-word'};
  `,
}

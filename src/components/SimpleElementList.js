import styled from 'styled-components'
import Actions from './Actions'

export default ({
  actuallyElementIndex,
  keys,
  clickedButton,
  element,
  listElement,
  setListElement,
  rate,
  setRate,
  setCheckbox,
  checkbox,
}) => {
  const changeData = (key) => {
    if (key === 'created') {
      const date = new Date(element[key])
      const newDate = `${date.getDay()}-${
        date.getMonth() + 1
      }-${date.getFullYear()}`
      return newDate
    }
    if (key === 'image')
      return <S.Img src={element[key]} alt={element[key]} />

    return typeof element[key] === 'object'
      ? element[key].toString()
      : element[key]
  }

  return (
    <S.Tr key={actuallyElementIndex}>
      {keys &&
        keys.map((key, index) => {
          if (key === 'url' || key === 'origin' || key === 'location')
            return
          if (
            (clickedButton === 'characters' && key === 'type') ||
            (clickedButton === 'characters' && key === 'episode')
          ) {
            return
          }

          return (
            <S.Td
              key={index}
              expand={key === 'id'}
              over={key === 'characters' || key === 'residents'}
              wordBreak={key === 'characters' || key === 'residents'}
            >
              {changeData(key)}
              {key === 'rate' && (
                <Actions
                  actuallyElementIndex={actuallyElementIndex}
                  listElement={listElement}
                  setListElement={setListElement}
                  rate={rate}
                  setRate={setRate}
                  setCheckbox={setCheckbox}
                  checkbox={checkbox}
                />
              )}
            </S.Td>
          )
        })}
    </S.Tr>
  )
}

const S = {
  Tr: styled.tr`
    background-color: lightgray;
    display: flex;
    margin: 10px 0;
    justify-content: space-between;

    padding: 20px 0;
    border-radius: 20px;
  `,
  Td: styled.td`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: ${(props) => (props.expand ? '0.12' : '1')};
    overflow: ${(props) => (props.over ? 'scroll' : 'none')};
    word-break: ${(props) =>
      props.wordBreak ? 'none' : 'break-word'};
  `,
  Img: styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
  `,
}

import styled from 'styled-components'
import Check from './Check'
import Rating from './Rating'
import RemoveButtons from './RemoveButtons'

export default ({
  actuallyElementIndex,
  checkbox,
  listElement,
  setCheckbox,
  setListElement,
  setRate,
  rate,
}) => (
  <S.MainWrapper>
    <S.CheckWrapper>
      <Check
        actuallyElementIndex={actuallyElementIndex}
        checkbox={checkbox}
        setCheckbox={setCheckbox}
      />
      {checkbox[actuallyElementIndex] && (
        <S.ButtonsWrapper>
          <RemoveButtons
            actuallyElementIndex={actuallyElementIndex}
            checkbox={checkbox}
            listElement={listElement}
            rate={rate}
            setCheckbox={setCheckbox}
            setListElement={setListElement}
            setRate={setRate}
          />
        </S.ButtonsWrapper>
      )}
    </S.CheckWrapper>

    {
      <Rating
        actuallyElementIndex={actuallyElementIndex}
        rate={rate}
        setRate={setRate}
      />
    }
  </S.MainWrapper>
)

const S = {
  MainWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  CheckWrapper: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
  `,

  ButtonsWrapper: styled.div`
    align-items: 'center';
    display: flex;
    flex: 1;
    justify-content: center;
  `,
}

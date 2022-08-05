import { Button } from '@mui/material'

export default ({
  checkbox,
  actuallyElementIndex,
  setCheckbox,
  listElement,
  setListElement,
  rate,
  setRate,
}) => {
  const removeElement = () => {
    const newList = [...listElement]
    const newCheckbox = [...checkbox]
    const newRate = [...rate]

    newList.splice(actuallyElementIndex, 1)
    setListElement(newList)

    newCheckbox.splice(actuallyElementIndex, 1)
    setCheckbox(newCheckbox)

    newRate.splice(actuallyElementIndex, 1)
    setRate(newRate)
  }

  const handleButtonNo = () => {
    const newCheckbox = [...checkbox]
    newCheckbox[actuallyElementIndex] = false
    setCheckbox(newCheckbox)
  }

  return (
    checkbox[actuallyElementIndex] && (
      <>
        <Button
          size='small'
          variant='outlined'
          color='success'
          onClick={removeElement}
        >
          yes
        </Button>
        <Button
          size='small'
          variant='outlined'
          color='warning'
          onClick={handleButtonNo}
        >
          no
        </Button>
      </>
    )
  )
}

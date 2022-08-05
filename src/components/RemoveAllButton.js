import { Button } from '@mui/material'

export default ({
  listElement,
  checkbox,
  setCheckbox,
  setListElement,
  setRate,
  rate,
}) => {
  const handleButton = () => {
    const newList = listElement.filter(
      (element, index) => !checkbox[index]
    )
    const newCheckbox = checkbox.filter(
      (element) => element === false
    )
    const newRateArr = rate.filter(
      (element, index) => checkbox[index] === false
    )
    setListElement(newList)
    setRate(newRateArr)
    setCheckbox(newCheckbox)
  }
  return (
    <Button
      sx={{
        position: 'sticky',
        right: 0,
        top: '98px',
        display: 'flex',
        height: '123px',
        margin: '0 10px',
      }}
      onClick={handleButton}
      variant='contained'
    >
      Remove All
    </Button>
  )
}

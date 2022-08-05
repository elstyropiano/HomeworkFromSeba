import Checkbox from '@mui/material/Checkbox'
import DeleteIcon from '@mui/icons-material/Delete'

export default ({ actuallyElementIndex, checkbox, setCheckbox }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const handleCheckbox = () => {
    const checked = checkbox[actuallyElementIndex] ? false : true
    const newCheckbox = [...checkbox]
    newCheckbox[actuallyElementIndex] = checked
    setCheckbox(newCheckbox)
  }
  return (
    <Checkbox
      checked={checkbox[actuallyElementIndex]}
      checkedIcon={<DeleteIcon />}
      icon={<DeleteIcon />}
      onChange={handleCheckbox}
      size='large'
      {...label}
    />
  )
}

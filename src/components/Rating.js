import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

export default ({ rate, setRate, actuallyElementIndex }) => {
  const handleRating = () => {
    const newRate = [...rate]
    const rateValue = newRate[actuallyElementIndex] === 0 ? 1 : 0
    newRate[actuallyElementIndex] = rateValue
    setRate(newRate)
  }
  return (
    <Box
      sx={{
        flex: '1',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& > legend': { mt: 2 },
      }}
    >
      <Typography
        sx={{ color: '#000', fontSize: '20px' }}
        component='legend'
      >
        Rate me!
      </Typography>
      <Rating
        sx={{ fontSize: '40px' }}
        name='simple-controlled'
        value={rate[actuallyElementIndex]}
        onChange={handleRating}
        max={1}
      />
    </Box>
  )
}

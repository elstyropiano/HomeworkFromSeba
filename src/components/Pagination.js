import { Button } from '@mui/material'

export default ({
  clickedCollection,
  setClickedCollection,
  setListElement,
  clickedButton,
  setCheckbox,
  setRate,
}) => {
  const handleButton = async (e) => {
    const target = e.target.value === '0' ? 'prev' : 'next'
    const response = await fetch(clickedCollection.info[target])
    const data = await response.json()
    setClickedCollection(data)
    setListElement(data.results)
    setCheckbox(() =>
      data?.results.map(({ element, index }) => false)
    )
    setRate(() => data?.results.map(({ element, index }) => 0))
  }
  return (
    <>
      {clickedButton && (
        <div>
          <Button
            value='0'
            variant='contained'
            disabled={clickedCollection?.info?.prev === null}
            onClick={handleButton}
          >
            prev page
          </Button>
          <Button
            value='1'
            variant='contained'
            disabled={clickedCollection?.info?.next === null}
            onClick={handleButton}
          >
            next page
          </Button>
        </div>
      )}
    </>
  )
}

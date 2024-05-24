import Button from '@mui/material/Button'

const SolidButton = ({ buttonValue, onClick }) => {
  return (
    <Button variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: 'black',
        borderRadius: '5px',
        fontSize: '18px',
        cursor: 'pointer',
        '&:hover': {
          background: "black",
        }
      }}>{buttonValue}</Button>
  )
}

export default SolidButton

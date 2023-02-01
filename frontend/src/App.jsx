import { Box, Heading } from '@chakra-ui/react'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <Heading>Hello World!</Heading>
    </Box>
  )
}

export default App

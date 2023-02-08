import { Box } from '@chakra-ui/react'
import React from 'react'
import Home from '../pages/Home'
import Sidebar from './Sidebar'

export default function AllRoutes() {
  return (
    <Box  >
      <Sidebar/>
      <Home/>
    </Box>
  )
}

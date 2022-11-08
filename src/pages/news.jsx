import { Box } from '@chakra-ui/react'
import React from 'react'

export const News = () => {
  return (
    <Box w="full" px="200px" py="60px" mb="120px">
        <iframe height="600" width="80%vw" src="//rss.bloople.net/?url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeeds%2F1898055.cms&detail=-1&showtitle=false&showempty=true&type=html">
        </iframe>
    </Box>)
}

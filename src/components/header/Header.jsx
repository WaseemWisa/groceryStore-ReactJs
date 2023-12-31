import React from 'react'
import HeaderTop from './HeaderTop'
import { Container } from '@mantine/core'
import HeaderBottom from './HeaderBottom'

function Header() {
  return (
    <header>
      <Container size={'lg'} sx={{paddingTop: '0.5rem'}}>
        <HeaderTop/>
        <HeaderBottom/>
      </Container>
    </header>
  )
}

export default Header
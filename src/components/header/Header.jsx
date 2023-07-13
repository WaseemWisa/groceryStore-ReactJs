import React from 'react'
import HeaderTop from './HeaderTop'
import { Container } from '@mantine/core'

function Header() {
  return (
    <header>
      <Container size={'lg'}>
        <HeaderTop/>
      </Container>
    </header>
  )
}

export default Header
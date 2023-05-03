import { Container, Grid } from '@nextui-org/react'
import { } from '@nextui-org/react'

import Pxlbg from '@/components/Pxlbg';
import Siteheader from '../components/Siteheader'
import Inputcard from '../components/Inputcard'
import Outputcard from '../components/Outputcard'

export default function Home() {
  return (
    <div className='fixed h-full w-full'>
      <Pxlbg />
      
      <Container className='pt-5 h-full items-center'>
        {/* NavBar */}
        <Siteheader />

        {/* Main Content*/}
        <Grid.Container gap={2} justify='center'>

          {/* Input */}
          <Grid xs={6} justify='center'>
            <Inputcard />
          </Grid>

          {/* Output */}
          <Grid xs={6} justify='center'>
            <Outputcard />
          </Grid>

        </Grid.Container>
      </Container>
    </div>
  )
}
import { Container, Grid } from '@nextui-org/react'
import { } from '@nextui-org/react'

import Pxlbg from '@/components/Pxlbg';
import Siteheader from '../components/Siteheader'
import Inputcard from '../components/Inputcard'
import Outputcard from '../components/Outputcard'
import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState({
    "totalPercentage": null,
    "individualPercentages": {
      "contentBias": null,
      "partisanBias": null,
      "falseBalance": null,
      "ventriloquism": null,
      "demographicBias": null,
      "undueWeight": null,
      "corporateBias": null
    },
    "html": "Sentence-wise Analysis will show up here."
  })

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
            <Inputcard setResult={setResult} />
          </Grid>

          {/* Output */}
          <Grid xs={6} justify='center'>
            <Outputcard result={result} />
          </Grid>

        </Grid.Container>
      </Container>
    </div>
  )
}
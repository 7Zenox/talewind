import { Container, Grid, Spacer } from '@nextui-org/react'
import { } from '@nextui-org/react'

import Pxlbg from '../components/pxlbg/Pxlbg'
import Siteheader from '../components/Siteheader'

export default function Home() {
    return (
        <div className='w-full h-full'>
            <Pxlbg />
            <Container className='pt-5'>
                {/* NavBar */}
                <Siteheader />
            </Container>
        </div>
    )
}
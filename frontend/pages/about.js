import { Container, Text, Spacer } from '@nextui-org/react'
import { } from '@nextui-org/react'

import Siteheader from '../components/Siteheader'

export default function Home() {
    return (
        <Container className='pt-5'>
            {/* NavBar */}
            <Siteheader />

            <div className='mx-60'>

                <Spacer y={3} />

                <Text b className="text-4xl flex justify-center" css={{ fontFamily: "monospace" }}> About Us </Text>

                <Spacer y={3} />
                <Text className='text-lg text-justify' css={{ fontFamily: "monospace", opacity: 0.8 }}>

                    Welcome to News Analyzer AI, an innovative artificial intelligence platform designed to help you evaluate and understand the biases present in media and news articles. Our mission is to empower readers to make informed decisions and engage in critical thinking by providing a comprehensive, objective assessment of the content they consume daily.
                    <br />
                    <br />
                    In todays world, information is at our fingertips, but not all of it is reliable or impartial. Our AI-driven project aims to detect and analyze biases in news articles, allowing users to gain a deeper understanding of the underlying perspectives and motivations driving the narrative. By leveraging advanced natural language processing and machine learning techniques, News Analyzer AI provides a valuable tool for individuals, researchers, and organizations seeking to make sense of the media landscape.

                </Text>
            </div>

        </Container>
    )
}
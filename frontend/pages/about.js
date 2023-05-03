import { Container, Text, Col, Row, Spacer } from '@nextui-org/react'
import { } from '@nextui-org/react'

import Pxlbg from '../components/Pxlbg'
import Siteheader from '../components/Siteheader'

export default function Home() {

    return (
        <div className='w-full h-auto mt-5'>
            {/* Background */}
            <Pxlbg />

            {/* NavBar */}
            <Siteheader />

            <Container className='w-3/4'>

                <Text b className="text-4xl flex justify-center py-20" css={{ fontFamily: "Poppins" }}>
                    About Us
                </Text>

                <Container fluid className='w-full text-justify opacity-80' css={{ fontFamily: "monospace" }}>
                    <Col className='mb-40'>
                        <Row justify responsive>
                            <Text className='text-lg' css={{ fontFamily: "monospace" }} >
                                Welcome to talewind - an aritifical intelligence tool for identifying and highlighting biases in journalistic writing. In a world where biased perspectives can distort the truth, our mission is to empower users with the tools they need to identify and mitigate these biases, fostering a more objective and balanced media landscape.
                            </Text>
                        </Row>

                        <br />

                        <Row justify responsive>
                            <Text b className="text-2xl flex justify-center py-5" css={{ fontFamily: "Poppins" }}>
                                Our Mission:
                            </Text>
                        </Row>

                        <Row justify='center'>
                            <Text i className='text-2xl' css={{ fontFamily: "monospace" }} >
                                A light talewind towards the truth
                            </Text>
                        </Row>

                        <br /> <br />

                        <Row justify responsive>
                            <Text className='text-lg' css={{ fontFamily: "monospace" }} >
                                At talewind, we believe in the power of words and the importance of accurate, unbiased information. Our motto encapsulates our dedication to uncovering hidden biases in the written word and helping to unveil biases.
                            </Text>
                        </Row>

                        <br />

                        <Row justify responsive>
                            <Text b className="text-2xl flex justify-center py-5" css={{ fontFamily: "Poppins" }}>
                                Our Values:
                            </Text>
                        </Row>

                        <Row justify responsive>
                            <Container>
                                <Row>
                                    <li>Transparency: We strive to maintain transparency in our AI algorithms and methodologies, ensuring that users have a clear understanding of how our system functions and derives its results. </li>
                                </Row> <br />
                                <Row>
                                    <li>Accuracy: Our team is committed to continuous improvement of our AI model, ensuring it stays up-to-date and provides the most accurate bias analysis possible. </li>
                                </Row> <br />
                                <Row>
                                    <li>Objectivity: We're dedicated to promoting the importance of objective journalism and supporting our users in their quest for fair, balanced reporting. </li>
                                </Row> <br />
                                <Row>
                                    <li>Collaboration: We believe that working together and fostering a collaborative environment is the key to success. Our team members come from diverse backgrounds, bringing unique perspectives and skills to the table. </li>
                                </Row> <br />
                                <Row>
                                    <li>Empowerment: We aim to empower writers, editors, and readers alike with the knowledge and tools necessary to critically evaluate the biases present in any piece of journalistic writing. </li>
                                </Row> <br />
                            </Container>
                        </Row>


                        <br />

                        <Row justify responsive>
                            <Text b className="text-2xl flex justify-center py-5" css={{ fontFamily: "Poppins" }}>
                                Our Innovative AI Project:
                            </Text>
                        </Row>

                        <Row justify responsive>
                            <Text className='text-lg' css={{ fontFamily: "monospace" }} >
                                talewind's AI model processes users' journalistic writing pieces and provides an in-depth analysis, identifying 7 types of biases. The analysis includes percentage values for each bias type and sentence-wise highlighting, enabling users to easily pinpoint and address the issues in their work.
                            </Text>
                        </Row>

                        <br />

                        <Row justify responsive>
                            <Text b className="text-2xl flex justify-center py-5" css={{ fontFamily: "Poppins" }}>
                                Our Team:
                            </Text>
                        </Row>

                        <Row justify responsive>
                            <Text className='text-lg' css={{ fontFamily: "monospace" }} >
                                The talewind team consists of experts in the fields of artificial intelligence and linguistics. We are passionate about creating a more balanced media environment and harnessing the power of AI to achieve this goal.
                                <br /> <br />
                                Together, we're working tirelessly to enhance and expand the capabilities of talewind, providing users with the most reliable and effective tools for bias identification and mitigation. Join us in our mission to illuminate truths and uncover biases, paving the way for a more objective and fair media landscape.
                            </Text>
                        </Row>
                    </Col>

                </Container>
            </Container >
        </div >
    )
}
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

                <Text b className="text-4xl flex justify-center pt-20" css={{ fontFamily: "Poppins" }}>
                    Privacy Policy
                </Text>

                <Text b className="text-sm flex justify-center pb-20 text-stone-400" css={{ fontFamily: "Consolas" }}>
                    Last Updated: 03-04-2023
                </Text>


                <Container fluid className='w-full text-justify opacity-80' css={{ fontFamily: "monospace" }}>
                    <Col className='mb-40'>

                        <Row justify responsive>
                            <Text className='text-lg' css={{ fontFamily: "monospace" }} >
                                At Talewind, your privacy is of the utmost importance to us. This Privacy Policy outlines how we collect, use, store, and protect the information you provide while using our services. By accessing or using the Talewind platform, you agree to this Privacy Policy.
                            </Text>
                        </Row>

                        <br />

                        <Row justify responsive>
                            <Text b className="text-2xl flex justify-center py-5" css={{ fontFamily: "Poppins" }}>
                                Information We Collect
                            </Text>
                        </Row>

                        <Row justify responsive>
                            <Container>
                                <Row>
                                    <li> Usage Data: We collect data about your usage of our platform, such as the frequency of use, pages visited, and features utilized. This helps us understand user preferences and improve our services accordingly. </li>
                                </Row> <br />
                                <Row>
                                    <li>Content Data: We collect and analyze the journalistic writing pieces you submit to our platform for the purpose of providing our bias analysis service. We may also use anonymized and aggregated versions of this data for improving our AI model and conducting research. </li>
                                </Row> <br />
                            </Container>
                        </Row>


                        <br />

                        <Row justify responsive>
                            <Text b className="text-2xl flex justify-center py-5" css={{ fontFamily: "Poppins" }}>
                                How We Use Your Information
                            </Text>
                        </Row>

                        <Row justify responsive>
                            <Container>
                                <Row>
                                    <li> To provide our services, including processing your submissions and generating bias analysis reports. </li>
                                </Row> <br />
                                <Row>
                                    <li> To improve and develop our platform, enabling us to offer better features and user experiences. </li>
                                </Row> <br />
                                <Row>
                                    <li> To analyze usage trends and user preferences, helping us enhance our marketing efforts and tailor our content and services to better meet your needs. </li>
                                </Row> <br />
                            </Container>
                        </Row>

                        <br />

                        <Row justify responsive>
                            <Text b className="text-2xl flex justify-center py-5" css={{ fontFamily: "Poppins" }}>
                                Data Sharing and Disclosure
                            </Text>
                        </Row>

                        <Row justify responsive>
                            <Text className='text-lg' css={{ fontFamily: "monospace" }} >
                                We value your privacy and will never sell or rent your personal information to third parties. However, we may disclose your information in the following circumstances:
                            </Text>
                        </Row>

                        <Row justify responsive>
                            <Container>
                                <Row>
                                    <li> When required by law, legal processes, or to protect our rights, property, or users. </li>
                                </Row> <br />
                                <Row>
                                    <li> To third-party service providers who assist us in operating our platform, conducting our business, or providing services on our behalf, provided that these parties agree to protect your information and use it only for the purposes for which it was disclosed. </li>
                                </Row> <br />
                            </Container>
                        </Row>

                        <Row justify responsive>
                            <Text b className="text-2xl flex justify-center py-5" css={{ fontFamily: "Poppins" }}>
                                Changes to This Privacy Policy
                            </Text>
                        </Row>

                        <Row justify responsive>
                            <Text className='text-lg' css={{ fontFamily: "monospace" }} >
                                We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or for other reasons. We will notify you of any significant changes by posting the updated policy on our platform with a revised &apos;Last updated&apos; date. Your continued use of the Talewind platform following any updates constitutes your acceptance of the updated Privacy Policy.
                            </Text>
                        </Row>

                        <br />


                        <Row justify responsive>
                            <Text b className="text-2xl flex justify-center py-5" css={{ fontFamily: "Poppins" }}>
                                Contact Us
                            </Text>
                        </Row>

                        <Row justify responsive>
                            <Text className='text-lg' css={{ fontFamily: "monospace" }} >
                                If you have any questions or concerns regarding this Privacy Policy or our privacy practices, please contact us at [email address].
                                <br /><br />
                                Thank you for trusting Talewind with your journalistic writing analysis needs. We remain committed to protecting your privacy and providing a secure user experience.                            </Text>
                        </Row>
                    </Col>

                </Container>
            </Container >
        </div >
    )
}
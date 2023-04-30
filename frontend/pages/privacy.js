import { Container, Text, Spacer } from '@nextui-org/react'
import { } from '@nextui-org/react'

import Siteheader from '../components/Siteheader'

export default function Home() {
    return (
        <Container className='pt-5'>
            {/* NavBar */}
            <Siteheader />

            <div className='mx-60 mb-40'>

                <Spacer y={3} />

                <Text b className="text-4xl flex justify-center" css={{ fontFamily: "monospace" }}> PRIVACY POLICY </Text>

                <Spacer y={3} />
                <Text className='text-lg text-justify' css={{ fontFamily: "monospace", opacity: 0.8 }}>

                    Your privacy is important to us at talewind. This Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to ensure your personal information remains secure. We collect information in two primary ways: information you provide to us (such as your name, email address, and the text of the news articles you submit) and information we collect automatically (such as cookies and usage data).
                    <br />
                    <br />
                    <Text b className='text-2xl'> We use your information to: </Text>
                    <br />
                    <br />

                    - Provide, maintain, and improve our services. <br />
                    - Analyze submitted media and news articles for bias detection. <br />
                    - Notify you of updates, promotions, or changes to our services. <br />
                    - Improve the quality and relevance of our services by tailoring them to your preferences. <br />
                    - Protect our users, services, and legal rights. <br />
                    - Information sharing and Disclosure <br />

                    <br />

                    We will not sell or rent your personal information to third parties. We may share your information with third-party service providers for the sole purpose of providing our services to you. We will only disclose your information to law enforcement or government agencies if required by law or if we believe disclosure is necessary to protect our rights, property, or the safety of our users.
                    <br />
                    <br />

                    <Text b className='text-2xl'> Data Security </Text>
                    <br />
                    We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee the absolute security of your information.
                    <br />
                    <br />

                    <Text b className='text-2xl'> Third-Party Websites and Services </Text>
                    <br />
                    Our website may contain links to third-party websites and services. We are not responsible for the privacy practices or the content of these websites and services. We encourage you to read the privacy policies of any third-party websites you visit.
                    <br />
                    <br />

                    <Text b className='text-2xl'> Changes to This Privacy Policy </Text>
                    <br />
                    We may update our Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on our website. By continuing to use our services, you acknowledge and agree to the updated Privacy Policy.
                    <br />
                    <br />

                    <Text b className='text-2xl'> Contact Us </Text>
                    <br />
                    If you have any questions or concerns regarding this Privacy Policy or our privacy practices, please contact us at [email protected]
                    <br />
                    <br />

                    By using talewind, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.
                </Text>
            </div>

        </Container>
    )
}
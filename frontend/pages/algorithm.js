import { Container, Text, Col, Row, Spacer, Card, Table, Image } from '@nextui-org/react'
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
                    Algorithm
                </Text>

                <Text b className="text-sm flex justify-center pb-20 text-stone-400" css={{ fontFamily: "Consolas" }}>
                    Last Updated: 03-04-2023
                </Text>

                <Container fluid className='w-full text-justify opacity-80' css={{ fontFamily: "monospace" }}>
                    <Col className='mb-40'>

                        <Row justify responsive>
                            <Text b className="text-2xl flex justify-center py-5" css={{ fontFamily: "Poppins" }}>
                                Objective
                            </Text>
                        </Row>

                        <Row justify responsive>
                            <Text className='text-lg' css={{ fontFamily: "monospace" }} >
                                Welcome to Talewind! This project aims to take text as input, and output a highlighted version of the text, similar to plagiarism-checkers. Instead, our project will highlight any biases that it sees in it. This is done on a sentence-by-sentence basis, and is rendered through displaCy&apos;s beautiful span visualizer. We currently support 7 varying types of media bias, listed as follows:
                            </Text>
                        </Row>

                        <br />

                        <Row justify responsive>
                            <Container gap={0}>
                                <Row gap={1}>
                                    <Col>
                                        <Card >
                                            <Card.Body className='justify-center'>
                                                <Text h6 size={15} className='flex justify-center'>
                                                    Content Bias
                                                </Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Text h6 size={15} className='flex justify-center'>
                                                    Partisan Bias
                                                </Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Spacer y={1} />
                                <Row gap={1}>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Text h6 size={15} className='flex justify-center'>
                                                    False Balance
                                                </Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Text h6 size={15} className='flex justify-center'>
                                                    Ventriloquism
                                                </Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Text h6 size={15} className='flex justify-center'>
                                                    Demographic Bias
                                                </Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                </Row>
                                <Spacer y={1} />
                                <Row gap={1}>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Text h6 size={15} className='flex justify-center'>
                                                    Undue Weight
                                                </Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Text h6 size={15} className='flex justify-center'>
                                                    Corporate Bias
                                                </Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>

                        <br /> <br />

                        <Row justify responsive>
                            <Row>
                                We hope to deliver a solution that will make news and academic reporting fairer and cleaner, with an easy-to-use front-end user interface for maximum accessibility. The whole project is currently deployed on Vercel, and as a small prototype we do not expect to handle large amounts of traffic.
                            </Row> <br />
                        </Row>

                        <br /> <br />

                        <Row justify responsive>
                            <Text b className="text-2xl flex justify-center py-5" css={{ fontFamily: "Poppins" }}>
                                Dataset Description
                            </Text>
                        </Row>

                        <Row justify responsive>
                            <Row>
                                The dataset for this project was impossible to find. As such, in order to finalize a small prototype of the project, we&apos;ve had to use synthetic data generated by GPT-3 and GPT-4. The prompt given to generate the dataset is given below:
                            </Row>
                        </Row>

                        <br />

                        <Row justify responsive>
                            <Row>
                                <code className='p-10'>&quot;Synthesize a dataset in plain text delimited by &apos;;&apos;. The dataset&apos;s header&apos;s are as follows:
                                    Sentence, Content Bias, Partisan Bias, False balance, Ventriloquism, Demographic bias, Undue Weight, Corporate
                                    <br /><br />
                                    Fill the data by creating sentences from news media, articles and journalist writing pieces and sentences written inside articles. Generate long and short sentences and significantly vary the length of the sentences. Then fill the data with 1 or 0 in the following columns based on if the sentence has that bias present or not. Keep variance high in data. Also include sentences which have no bias at all. Do not use code block to generate the data. Generate as much data as possible.&quot;
                                </code>
                            </Row> <br />
                        </Row>

                        <br />

                        <Row justify responsive>
                            <Row>
                                This generated approximately 16-20 rows per prompt, and had a lot of duplicated. Generating this dataset took over 24 hours of prompting, and we extend our deepest gratitude to OpenAI for its development of such a powerful tool. The final dataset contained ~1800 samples of texts in a vacuum. We realise that this is a relatively small dataset to classify a 7 labeled multi-label classification task, but as a proof of concept and a prototype, the performance has been deemed more than satisfactory. Improving the data collection for this project is definitely the first priority as a future prospect.
                            </Row>
                        </Row>

                        <br />

                        <Row justify responsive>
                            <Text b className="text-2xl flex justify-center py-5" css={{ fontFamily: "Poppins" }}>
                                Methodology
                            </Text>
                        </Row>

                        <Row justify responsive>
                            <Text className='text-lg' css={{ fontFamily: "monospace" }} >
                                The FFNN used in this model is relatively simple and a summary() dump can be found below.                            </Text>
                        </Row>

                        <br />

                        <Table lined headlined selectionMode='single'>
                            <Table.Header>
                                <Table.Column>Layer (type)</Table.Column>
                                <Table.Column>Output Shape</Table.Column>
                                <Table.Column>Param #</Table.Column>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row key="1">
                                    <Table.Cell>dense_4 (Dense)</Table.Cell>
                                    <Table.Cell>(None, 384)</Table.Cell>
                                    <Table.Cell>147840</Table.Cell>
                                </Table.Row>
                                <Table.Row key="2">
                                    <Table.Cell>dropout_2 (Dropout)</Table.Cell>
                                    <Table.Cell>(None, 384)</Table.Cell>
                                    <Table.Cell>0</Table.Cell>
                                </Table.Row>
                                <Table.Row key="3">
                                    <Table.Cell>dense_5 (Dense)</Table.Cell>
                                    <Table.Cell>(None, 128)</Table.Cell>
                                    <Table.Cell>49280</Table.Cell>
                                </Table.Row>
                                <Table.Row key="4">
                                    <Table.Cell>dropout_3 (Dropout)</Table.Cell>
                                    <Table.Cell>(None, 128)</Table.Cell>
                                    <Table.Cell>0</Table.Cell>
                                </Table.Row>
                                <Table.Row key="5">
                                    <Table.Cell>dense_7 (Dense)</Table.Cell>
                                    <Table.Cell>(None, 32)</Table.Cell>
                                    <Table.Cell>4128</Table.Cell>
                                </Table.Row>
                                <Table.Row key="6">
                                    <Table.Cell>dropout_7 (Dropout)</Table.Cell>
                                    <Table.Cell>(None, 384)</Table.Cell>
                                    <Table.Cell>231</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        <Table lined bordered='false'>
                            <Table.Header>
                                <Table.Column>Category:</Table.Column>
                                <Table.Column>Value</Table.Column>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row key="1">
                                    <Table.Cell>Total params:</Table.Cell>
                                    <Table.Cell>201,479</Table.Cell>
                                </Table.Row>
                                <Table.Row key="2">
                                    <Table.Cell>Trainable params:</Table.Cell>
                                    <Table.Cell>201,479</Table.Cell>
                                </Table.Row>
                                <Table.Row key="3">
                                    <Table.Cell>Non-trainable params:</Table.Cell>
                                    <Table.Cell>0</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>

                        <br />

                        <Row justify responsive>
                            <Row>
                                The loss function used was keras&apos; default binary crossentropy. and the model was trained for 50 epochs. We do not recommend training for that long on any model that could be recreated on a dataset this small, which is also why we incorporated two Dropout layer with a 20% rate. However as a prototype the model functions well. This output is then filtered using a threshold value (undisclosed for now), and the sentences are labelled based on this filtered output. These are then passed on to displacy to render as the html, which is then sent back as is to display for the sentence-wise analysis.
                            </Row> <br />

                        </Row>

                        <br />

                        <Row justify responsive>
                            <Text b className="text-2xl flex justify-center py-5" css={{ fontFamily: "Poppins" }}>
                                Results
                            </Text>
                        </Row>

                        <Row justify responsive>
                            <Text className='text-lg' css={{ fontFamily: "monospace" }} >
                                The Loss, Accuracy, Precision and Recall charts are shown below. The input data for these was the 384 dimensional embeddings for each sentence, as it is right now in production as well. As for how it works in the real world, We encourage you to try out our demo website. Click on &quot;Home&quot; to get started.
                            </Text>
                        </Row>

                        <br />

                        <Container gap={0}>
                            <Row gap={1}>
                                <Col>
                                    <Card className='bg-white'>
                                        <Card.Body>
                                            <Image src={"https://github.com/7Zenox/talewind/blob/main/assets/epoch_accuracy.svg?raw=true"}
                                                alt="Epoch Accuracy"
                                                width={320}
                                                height={180} />
                                        </Card.Body>
                                        <Card.Footer className='justify-center'>
                                            <Text className="text-md text-black">
                                                Epoch Accuracy
                                            </Text>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='bg-white'>
                                        <Card.Body>
                                            <Image src={"https://github.com/7Zenox/talewind/blob/main/assets/epoch_precision.svg?raw=true"}
                                                alt="Epoch Precision"
                                                width={320}
                                                height={180} />
                                        </Card.Body>
                                        <Card.Footer className='justify-center'>
                                            <Text className="text-md text-black">
                                                Epoch Precision
                                            </Text>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                            <Spacer y={1} />
                            <Row gap={1}>
                                <Col>
                                    <Card className='bg-white'>
                                        <Card.Body>
                                            <Image src={"https://github.com/7Zenox/talewind/blob/main/assets/epoch_recall.svg?raw=true"}
                                                alt="Epoch Recall"
                                                width={320}
                                                height={180} />
                                        </Card.Body>
                                        <Card.Footer className='justify-center'>
                                            <Text className="text-md text-black">
                                                Epoch Recall
                                            </Text>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='bg-white'>
                                        <Card.Body>
                                            <Image src={"https://github.com/7Zenox/talewind/blob/main/assets/epoch_loss.svg?raw=true"}
                                                alt="Epoch Loss"
                                                width={320}
                                                height={180} />
                                        </Card.Body>
                                        <Card.Footer className='justify-center'>
                                            <Text className="text-md text-black">
                                                Epoch Loss
                                            </Text>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>

                    </Col>
                </Container>
            </Container >
        </div >
    )
}
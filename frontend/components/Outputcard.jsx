import { Text, Card, Row, Grid, Progress, Pagination } from '@nextui-org/react'
import { useState } from 'react'

import Spacy from './Spacy'
import biasValues from './biasValues.json';

const {
    contentBias,
    corporateBias,
    demographicBias,
    falseBalance,
    partisanBias,
    undueWeight,
    ventriloquism
} = biasValues;

export default function Outputcard() {
    const [pageNum, setPageNum] = useState(1);

    return (
        <Card isblurred shadow style={{ padding: '20px' }} className='w-full h-full bg-transparent border-0' css={{ bgBlur: "#0f111466" }}>

            {pageNum == 1 ? (
                <>
                    <Card.Header>
                        <Text className='text-4xl' css={{ textGradient: "45deg, $blue600, $pink600", paddingBottom: '5px' }} style={{ fontFamily: "Century Gothic" }} > 49% of your text may be biased </Text>
                    </Card.Header>

                    <Card.Body>
                        <Grid.Container gap={2} className='w-full h-full'>
                            <Grid className='w-full'>
                                <Text size={17}>Content Bias</Text>
                                <Progress color='gradient' value={contentBias} indeterminated={contentBias === null || contentBias === undefined} />
                            </Grid>
                            <Grid className='w-1/2'>
                                <Text size={17}>Corporate Bias</Text>
                                <Progress color="gradient" value={corporateBias} indeterminated={corporateBias === null || corporateBias === undefined} />
                            </Grid>
                            <Grid className='w-1/2'>
                                <Text size={17}>Demographic Bias</Text>
                                <Progress color="gradient" value={demographicBias} indeterminated={demographicBias === null || demographicBias === undefined} />
                            </Grid>
                            <Grid className='w-1/2'>
                                <Text size={17}>False Balance</Text>
                                <Progress color="gradient" value={falseBalance} indeterminated={falseBalance === null || falseBalance === undefined} />
                            </Grid>
                            <Grid className='w-1/2'>
                                <Text size={17}>Partisan Bias</Text>
                                <Progress color="gradient" value={partisanBias} indeterminated={partisanBias === null || partisanBias === undefined} />
                            </Grid>
                            <Grid className='w-1/2'>
                                <Text size={17}>Undue Weight</Text>
                                <Progress color="gradient" value={undueWeight} indeterminated={undueWeight === null || undueWeight === undefined} />
                            </Grid>
                            <Grid className='w-1/2'>
                                <Text size={17}>Ventriloquism</Text>
                                <Progress color="gradient" value={ventriloquism} indeterminated={ventriloquism === null || ventriloquism === undefined} />
                            </Grid>
                        </Grid.Container>
                    </Card.Body>
                </>
            ) : (
                <>
                    <Card.Header>
                        <Text className='text-4xl' css={{ textGradient: "45deg, $blue600, $pink600" }} style={{ fontFamily: "Century Gothic" }} > Sentence-wise Analysis </Text>
                    </Card.Header>
                    <Card.Body css={{ p: 0 }} className='overflow-scroll h-10 p-5'>
                        <Spacy />
                    </Card.Body>
                </>
            )
            }

            <Card.Footer>
                <Row justify='center'>
                    <Pagination page={pageNum} onChange={(page) => setPageNum(page)} shadow loop color={'gradient'} total={2} />
                </Row>
            </Card.Footer>
        </Card>
    )
}
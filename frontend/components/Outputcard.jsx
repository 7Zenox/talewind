import { Text, Card, Row, Grid, Progress, Pagination } from '@nextui-org/react';
import { useState } from 'react';

export default function Outputcard({ result }) {
    const [pageNum, setPageNum] = useState(1);

    return (
        <Card isblurred shadow style={{ padding: '20px' }} className='w-full h-full bg-transparent border-0' css={{ bgBlur: "#0f111466" }}>

            {pageNum == 1 ? (
                <>
                    <Card.Header>
                        <Text className='text-4xl' css={{ textGradient: "45deg, $blue600, $pink600", paddingBottom: '5px' }} style={{ fontFamily: "Century Gothic" }} > {result.totalPercentage == null ? "Write something and analyse" : result.totalPercentage + "% of your text may be biased"} </Text>
                    </Card.Header>

                    <Card.Body>
                        <Grid.Container gap={2} className='w-full h-full'>
                            <Grid className='w-full'>
                                <Text size={17}>Content Bias</Text>
                                <Progress color='gradient' value={result.individualPercentages.contentBias} indeterminated={result.individualPercentages.contentBias === null || result.individualPercentages.contentBias === undefined} />
                            </Grid>
                            <Grid className='w-1/2'>
                                <Text size={17}>Corporate Bias</Text>
                                <Progress color="gradient" value={result.individualPercentages.corporateBias} indeterminated={result.individualPercentages.corporateBias === null || result.individualPercentages.corporateBias === undefined} />
                            </Grid>
                            <Grid className='w-1/2'>
                                <Text size={17}>Demographic Bias</Text>
                                <Progress color="gradient" value={result.individualPercentages.demographicBias} indeterminated={result.individualPercentages.demographicBias === null || result.individualPercentages.demographicBias === undefined} />
                            </Grid>
                            <Grid className='w-1/2'>
                                <Text size={17}>False Balance</Text>
                                <Progress color="gradient" value={result.individualPercentages.falseBalance} indeterminated={result.individualPercentages.falseBalance === null || result.individualPercentages.falseBalance === undefined} />
                            </Grid>
                            <Grid className='w-1/2'>
                                <Text size={17}>Partisan Bias</Text>
                                <Progress color="gradient" value={result.individualPercentages.partisanBias} indeterminated={result.individualPercentages.partisanBias === null || result.individualPercentages.partisanBias === undefined} />
                            </Grid>
                            <Grid className='w-1/2'>
                                <Text size={17}>Undue Weight</Text>
                                <Progress color="gradient" value={result.individualPercentages.undueWeight} indeterminated={result.individualPercentages.undueWeight === null || result.individualPercentages.undueWeight === undefined} />
                            </Grid>
                            <Grid className='w-1/2'>
                                <Text size={17}>Ventriloquism</Text>
                                <Progress color="gradient" value={result.individualPercentages.ventriloquism} indeterminated={result.individualPercentages.ventriloquism === null || result.individualPercentages.ventriloquism === undefined} />
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
                        <div className='text-justify text-sm' dangerouslySetInnerHTML={{ __html: result.html }} />
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
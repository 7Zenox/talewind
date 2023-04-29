import { Container, Text, Card, Row, Spacer, Grid, Progress, Pagination } from '@nextui-org/react'
import { useEffect, useState } from 'react'


export default function Outputcard() {
    const [pageNum, setPageNum] = useState(1);

    return (
        <Card shadow style={{ padding: '20px' }} className='w-full h-full bg-transparent border-0'>

            {pageNum == 1 ? (

                <Card.Body>
                    <Text className='text-4xl' css={{ textGradient: "45deg, $blue600, $pink600" }} style={{ fontFamily: "Century Gothic" }} > Your text is 49% left aligned </Text>
                    <Spacer y={2} />

                    <Grid.Container xs={12} gap={0} className='justify-left'>
                        <Text className='text-lg' style={{ fontFamily: "Century Gothic" }}> The given text contains: </Text>
                        <Progress color="gradient" value={55} shadow />

                        <Text className='text-lg' style={{ fontFamily: "Century Gothic" }}> The given text contains: </Text>
                        <Progress color="gradient" value={35} shadow />

                        <Text className='text-lg' style={{ fontFamily: "Century Gothic" }}> The given text contains: </Text>
                        <Progress color="gradient" value={45} shadow />

                        <Text className='text-lg' style={{ fontFamily: "Century Gothic" }}> The given text contains: </Text>
                        <Progress color="gradient" value={85} shadow />

                        <Text className='text-lg' style={{ fontFamily: "Century Gothic" }}> The given text contains: </Text>
                        <Progress color="gradient" value={75} shadow />
                    </Grid.Container>
                </Card.Body>
            ) : (
                <Card.Body>

                </Card.Body>
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
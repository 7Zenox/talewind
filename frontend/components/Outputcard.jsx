import { Text, Card, Row, Spacer, Grid, Progress, Pagination } from '@nextui-org/react'
import { useState } from 'react'

import Radar from './Radar'
import Spacy from './Spacy'
// import dynamic from 'next/dynamic'

// const PlotlyGraph = dynamic(
//     () =>
//         import(
//             './Radar'
//         ),
//     {
//         ssr: false,
//         loading: () => <>Loading...</>,
//     },
// );

export default function Outputcard() {
    const [pageNum, setPageNum] = useState(1);


    return (
        <Card shadow style={{ padding: '20px' }} className='w-full h-full bg-transparent border-0'>

            {pageNum == 1 ? (
                <>
                    <Card.Header>
                        <Text className='text-4xl' css={{ textGradient: "45deg, $blue600, $pink600" }} style={{ fontFamily: "Century Gothic" }} > Your text is 49% left aligned </Text>
                        <Spacer y={2} />
                    </Card.Header>

                    <Card.Body>
                        {/* <Radar /> */}
                    </Card.Body>
                </>
            ) : (
                <>
                    <Card.Header>
                        <Text className='text-4xl' css={{ textGradient: "45deg, $blue600, $pink600" }} style={{ fontFamily: "Century Gothic" }} > Sentence-wise Analysis </Text>
                    </Card.Header>
                    <Card.Body css={{ p: 0 }} className='overflow-scroll h-10'>
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
import { Card, Textarea, Row, Button } from '@nextui-org/react'
import * as IconlyPack from 'react-iconly'

import Tdbutton from "./tdbutton/Tdbutton";

export default function Inputcard() {
    return (
        <Card shadow className='w-full h-full overflow-visible'>
            <Card.Body css={{ p: 0 }}>
                <Textarea
                    Placeholder="Insert your text here"
                    rows={20}
                    style={{ height: 'auto%', padding: '30px', marginBottom: '70px' }} />
            </Card.Body>

            <Card.Footer className="flex absolute bottom-0 overflow-visible">
                <Row justify='flex-end'>
                    <Tdbutton />
                </Row>
            </Card.Footer>
        </Card>
    )
}
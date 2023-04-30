import { Card, Textarea, Row, Button } from '@nextui-org/react'
import * as IconlyPack from 'react-iconly'

export default function Inputcard() {
    return (
        <Card shadow css={{ w: "100%", h: "100%" }}>
            <Card.Body css={{ p: 0 }}>
                <Textarea
                    Placeholder="Insert your text here"
                    rows={23}
                    style={{ backgroundColor: 'transparent', height: 'auto%', padding: '20px', }} />
            </Card.Body>

            <Card.Footer css={{ position: "absolute", bottom: 0, zIndex: 1 }}>
                <Row justify="flex-end">
                    <Button color="gradient" auto ghost fill="Gradient" css={{ bgBlur: "#0f111466" }}>
                        <IconlyPack.ChevronRight set="broken" gradientColor="white" />
                    </Button>
                </Row>
            </Card.Footer>

        </Card>
    )
}
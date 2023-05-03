import { Card, Textarea, Row } from '@nextui-org/react'
import Tdbutton from "./tdbutton/Tdbutton";
import { useState } from 'react';
import axios from 'axios';

export default function Inputcard() {
    const [textAreaValue, setTextAreaValue] = useState("");

    const handleButtonClick = async () => {
        try {
            const response = await axios.post('YOUR_API_ENDPOINT', {
                text: textAreaValue,
            });

            if (response.status === 200) {
                console.log('Data successfully sent');
            } else {
                console.error('Error sending data');
            }
        } catch (error) {
            console.error('Error sending data', error);
        }
    }

    return (
        <Card shadow className='w-full h-full overflow-visible'>
            <Card.Body css={{ p: 0 }}>
                <Textarea
                    placeholder="Insert your text here"
                    rows={20}
                    style={{ height: 'auto%', padding: '30px', marginBottom: '70px' }}
                    value={textAreaValue}
                    onChange={(e) => setTextAreaValue(e.target.value)} />
            </Card.Body>

            <Card.Footer className="flex absolute bottom-0 overflow-visible">
                <Row justify='flex-end'>
                    <Tdbutton onClick={handleButtonClick} />
                </Row>
            </Card.Footer>
        </Card>
    )
}

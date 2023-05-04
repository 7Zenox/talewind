import { Navbar, Text, Spacer } from '@nextui-org/react'
import Switcher from './Switcher';

import Typewriter from 'typewriter-effect'

export default function SiteHeader() {
    return (
        <>
            <Navbar isCompact disableShadow variant='sticky'>
                <Navbar.Content>
                    <Navbar.Link href="/">Home</Navbar.Link>
                    <Navbar.Link href="/about">About</Navbar.Link>
                    <Navbar.Link href="/privacy">Privacy</Navbar.Link>
                </Navbar.Content>

                <Navbar.Content className='pr-20 pl-5'>
                    <Text b className="text-4xl" css={{ fontFamily: "NakoneStencilItalic" }}> talewind </Text>
                </Navbar.Content>

                <Navbar.Content>
                    <Navbar.Link href="/algorithm">Algorithm</Navbar.Link>
                    <Switcher />
                </Navbar.Content>
            </Navbar >

            {/* Debias Text */}
            <div style={{ fontFamily: "Century Gothic" }} className='flex justify-center text-xl font-bold opacity-30' >
                <Typewriter className="text-2xl"
                    onInit={(typewriter) => {
                        typewriter.start();
                        typewriter
                            .typeString("Debias your text")
                            .pauseFor(5000)
                            .deleteChars(4);
                        var i = 0;
                        while (i < 50) {
                            typewriter
                                .typeString("articles")
                                .pauseFor(5000)
                                .deleteChars(8)
                                .typeString("media")
                                .pauseFor(5000)
                                .deleteChars(5);
                            i++;
                        }
                        typewriter
                            .typeString("text")
                    }}
                />
            </div>

            <Spacer y={0.5} />
        </>
    )
}
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Design width={40} height={40} /> Artist
</Title>
<Description>
A clumsy warrior, trying to fight,
A burning spirit,
<p>
Songwriter, Developer, trying to create ART.</p>
</Description>
<Description>
<strong>I Work as</strong>
<ul>
    <li>
        CTO, <a href='www.kaam24x7.com'>Kaam 24x7.com,</a>
        <p><a href='www.leadcellb2b.com'>LeadCell B2B,</a></p>
    </li>
    <li>
        Blogger, <a href='www.thetechwalk.com'>TheTechWalk.com</a>
    </li>
</ul>
</Description>


            </Main>
            <Main>
<Title>
    <Develope width={40} height={40} /> FullStack Developer
</Title>
<Description>
I dream huge and work like I got a rent to pay. All to make my dreams come to life! <p>Hustle Mode 24x7</p>
</Description>
<Description>
<strong>Skills</strong>
<p>
ReactJs, NextJs, Sass, Bootstrap, Javascript, Tailwind, NodeJs, Express, MongoDB etc.
</p>
</Description>


            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage

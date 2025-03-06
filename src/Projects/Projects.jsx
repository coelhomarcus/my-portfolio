import React from 'react'
import Text from '../Components/Text/Text';
import Head from '../Head/Head';
import NavButton from '../Components/NavButton/NavButton';
import Card from '../Components/Card/Card';

const Projects = () => {
   return (
      <div className='main'>
         <Head title="Projects" />
         <Text h1="Projects" p="My projects that are live" />
         <div className="options">
            <Text h2="Primary Projects" />
            <Text p="WIP" />
         </div>
         <Text h2="Experimental / Prototypes" />
         <div className='gridColumn'>
            <Card img="https://img.coelhomarcus.com/banner/bash.png" github="https://github.com/coelhomarcus/bunnybash" link="https://bash.coelhomarcus.com" title="BunnyBash" desc="A website that simulates a terminal" />
            <Card img="https://img.coelhomarcus.com/banner/catype.png" github="https://github.com/coelhomarcus/catype" link="https://catype.coelhomarcus.com" title="Catype" desc="Typing page prototype" />
            <Card img="https://img.coelhomarcus.com/banner/mailman.png" link="https://bakanull.itch.io/mailman" title="Mailman" desc="A prototype of a retro horror game" />
            <Card img="https://img.coelhomarcus.com/banner/choice.png" link="https://bakanull.itch.io/right-choice" title="Right Choice" desc="My first prototype of a retro horror game" />
         </div>
      </div>
   )
}

export default Projects
import React, { useState } from 'react'
import { projects } from '../../data/constants'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectSyles'
import ProjectCard from '../Cards/ProjectCard'

const Index = () => {
    const [toggle, setToggle] = useState('all')
  return (
    <Container id="projects">
        <Wrapper>
            <Title>Project</Title>
            <Desc>
                I have Worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
            </Desc>
            <ToggleButtonGroup>
                {toggle === 'all' ?
                    <ToggleButton active value= "all" onclick={() => setToggle('all')}>All</ToggleButton>
                    :
                    <ToggleButton active value= "all" onclick={() => setToggle('all')}>All</ToggleButton>
                }
                {<Divider/>}
                {toggle === 'web app' ?
                    <ToggleButton active value= "web app" onclick={()=>
                        setToggle('all')}>WEB APP's</ToggleButton>
                    :
                    <ToggleButton value = "web app" onclick={() => setToggle('web app')}>WEB APP's</ToggleButton>
                }
                {<Divider/>}
                {toggle === 'android app' ?
                    <ToggleButton active value= "android app" onclick={()=>
                        setToggle('android app')}>ANDROID APP's</ToggleButton>
                    :
                    <ToggleButton value = "android app" onclick={() => setToggle('android app')}>ANDROID APP's</ToggleButton>
                }
                {<Divider/>}
                {toggle === 'machine learning' ?
                    <ToggleButton active value= "machine learning" onclick={()=>
                        setToggle('all')}>MACHINE LEARNING</ToggleButton>
                    :
                    <ToggleButton value = "machine learning" onclick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
                }
            </ToggleButtonGroup>
            <CardContainer>
                {toggle ==='all' && projects
                .map((projects) => (
                    <ProjectCard project={projects}/>
                ))}
                {projects
                    .filter((item) => item.category === toggle)
                    .map((project) => (
                        <ProjectCard project = {project} />
                    ))
                }
            </CardContainer>
        </Wrapper>
    </Container>
  )
}

export default Index
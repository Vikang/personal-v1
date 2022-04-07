import React,{useState} from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Section = styled.section`
width: 100vw;
/* background-color: ${props => props.theme.body}; */
background-color: rgba(212,203,193,0.9);
position: fixed;
z-index: 20;
/* backdrop-filter: blur(4px); */
`
const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: flex-end;

width: 85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;
padding-bottom: 2rem;

.mobile{
  display: none;
}

@media (max-width: 64em) {
.desktop{
  display: none;
}
.mobile{
  display: inline-block;
}

}


`
const Menu = styled.ul`
position: absolute;
right: calc(3rem + 2vw);
display: flex;
justify-content: space-between;
align-items: center;
list-style:none;
background-color: rgba(212,203,193,0.9);
font-size: 23px;
font-weight: 200;
letter-spacing: 0.1em;

@media (max-width: 64em) {
/* 1024 px */



/* position: fixed; */
top: ${props => props.theme.navHeight};
/* left: 0; */
right: 0;
bottom: 0;
width: 50vw;
height: ${props => `calc(100vh - ${props.theme.navHeight})`};
z-index:50;
background-color: ${props => `rgba(${props.theme.bodyRgba},0.85)`};
backdrop-filter: blur(2px);

transform: ${props => props.click ? 'translateY(0)' : `translateY(1000%)`};
transition: all 0.3s ease;
flex-direction: column;
justify-content: center;

touch-action: none;


}

`

const MenuItem = styled(NavLink)`
margin: 0 1.3rem;
color: ${props => props.theme.text};
text-transform: uppercase;
text-decoration: none;
cursor: pointer;
transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

&:hover{
  color: #a87f6e;
}

@media (max-width: 64em) {
margin: 2rem 0;

&::after{
  display: none;
}

}
`
const HamburgerMenu = styled.span`
width:  ${props => props.click ? '2rem' : '1.5rem'};

height: 2px;
background: ${props => props.theme.text};

position: absolute;
top: 4rem;
right: calc(3rem + 2vw);
transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'  };

display: none;
justify-content: center;
align-items: center;

cursor: pointer;
transition: all 0.3s ease;

@media (max-width: 64em) {
/* 1024 px */
display: flex;

}

&::after, &::before{
  content: ' ';
  width:  ${props => props.click ? '1rem' : '1.5rem'};
  height: 2px;
  right: ${props => props.click ? '-2px' : '0'};
background: ${props => props.theme.text};
position: absolute;
transition: all 0.3s ease;

}

&::after{
  top: ${props => props.click ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0)'  };

}
&::before{
  bottom: ${props => props.click ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0)'  };
}


`


const Navigation = () => {

  const [click, setClick] = useState(false);

  return (

    <Section id="navigation">
      <NavBar>
        <HamburgerMenu  click={click}  onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>
        <Menu click={click}>
          <MenuItem to="/about" >About</MenuItem>
          <MenuItem to="/work"  >Work</MenuItem>
          <MenuItem to="/skills"  >Skills</MenuItem>
          <MenuItem to="/experience"  >Experience</MenuItem>
          <MenuItem target="_blank" to={{pathname:"mailto:victoriawang98@gmail.com"}} >Say Hi...</MenuItem>
        </Menu>
      </NavBar>
    </Section>
  )
}

export default Navigation
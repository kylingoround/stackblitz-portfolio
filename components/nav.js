import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  margin: 2px;
  &:hover { color: red; };
  color: ${(isCurrent) => isCurrent ? 'pink' : 'blue'};
  &.active {font-weight: 900}
`

const NavLink = props =>
<StyledLink
  {...props}
  getProps={({isCurrent}) => {
    console.log(isCurrent)
  }}
>
  {console.log(props)}
  {props.children}
</StyledLink>

const Nav = () =>
  <div>
    <NavLink to='/'>Work</NavLink>
    <NavLink to='/lab'>Lab</NavLink>
    <NavLink to='/about'>About</NavLink>
  </div>

export default Nav
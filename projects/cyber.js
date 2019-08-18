import React, {Component} from 'react'
import ReactMarkdown from 'react-markdown'

import Nav from '../components/nav'

import CyberMarkdown from '../markdowns/cyber.md'

const input = '# This is a header\n\nAnd this is a paragraph'

const Cyber = () =>
<div>
  <Nav/>
  <div>Cyber Project Page</div>
  <ReactMarkdown source={CyberMarkdown} />
</div>

export default Cyber;
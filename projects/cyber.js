import React, {Component} from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

import Nav from '../components/nav'

const Banner = styled.img``
const PageTitle = styled.div``
const H1 = styled.div`` // section title
const H2 = styled.div`` // subtitle
const Text = styled.div`` // body text

const WideImg = styled.img``
const Img = styled.img``
const NarrowImg = styled.img``

const Content = () =>
<>
<Banner src='https://paper.dropbox.com/ep/redirect/image?url=https%3A%2F%2Fpaper-attachments.dropbox.com%2Fs_9FCB84EFBC580CB5605114E61EA103B6902650A4F0886287613E54B90E99A86C_1566180044311_image.png&hmac=%2FD%2FHU0EbHDi7o%2B3ZDlDC5S%2BGXuz%2FxLBfZLsqKtbbAd0%3D'/>

<div>Building Transparent and Trustable A.I. Dashboard for Cybersecurity Operators</div>
</>

const Cyber = () =>
<div>
  <Nav/>
  <Content/>
</div>

export default Cyber;
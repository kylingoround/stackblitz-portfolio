import React, {Component} from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

import Nav from '../components/nav'

const Banner = styled.img`
  max-height:200px;
`
const PageTitle = styled.div``
const H1 = styled.div`` // section title
const H2 = styled.div`` // subtitle
const Text = styled.div`` // body text

const WideImg = styled.img``
const Img = styled.img``
const NarrowImg = styled.img``

const Content = () =>
<>
<Banner src='https://uc612a504ce1cd22da5c4b2ea87b.previews.dropboxusercontent.com/p/thumb/AAh2p7va_u3bQGwAriN0fJJqVFyRVUTGOZD560A8YGfDf3ShGcZf-v6lnOSlGvnKXJ-dRmGGp_ukIHfiahtxnSWWSNTg9N13rAbIqh6JQ4sjPcFOt3JAqSDzE4OKz33mEqwC9PsVW5TYX9jTxNWju0XwxI7tloFF6kh7qwIbP0CSaECwurLqQS4bQHyJBx_Cr6p2hH0oubgUcF7iCmFuiy0oJb7Yf68HOINn4RsXHNLhlVPVdVBjElfAYTxM59VcOK2mqre-fwf5R5cDg1-iYgD7UmbORrcSAaX-bK6yYWSUj7bQ2dkhgfJcqNjfPRER9kL6Fft27-FrCooiz8T58idZGeqSwRXtU0UPUW-DTXclRKwVf7SBETf4Fq-W7ITYFEtZhxfTJSKNqVuNNLGaSMAv/p.png?fv_content=true&size_mode=5'/>
<div>Building Transparent and Trustable A.I. Dashboard for Cybersecurity Operators</div>
</>

const Cyber = () =>
<div>
  <Nav/>
  <Content/>
</div>

export default Cyber;
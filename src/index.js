import React from 'react'
import { render } from 'react-dom'
import App from './containers/app'
import './styles/index.less'
import './styles/media.less'

const target = document.querySelector('#root')

render(
    <App />,
    target
)
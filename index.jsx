import React from 'react'
import ReactDOM from 'react-dom'
import {css} from '@emotion/core'

function Test() {
  var c1 = css`color: hotpink;`
  var c2 = css`background-color: lightgray;`
  var c3 = [c1, c2] 

  // return <div css={c3}>OLA</div> // this works fine

	return <div css={[c1, c2]}>OLA</div> // this one doesn't work
}

ReactDOM.render(
  <Test/>,
  document.getElementById('root')
)
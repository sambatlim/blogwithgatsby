import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Welcome to <Styled.a href="https://sambat-tech.netlify.app/">Sambat</Styled.a>
    {` `}
    Blog.
    <br />
    I blog about web development and design.
  </Fragment>
)

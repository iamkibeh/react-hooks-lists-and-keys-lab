import React from 'react'

function NavBar() {
  const links = ['home', 'about', 'projects']
  const myLinks = links.map((link, ind) => {
    let myRef = '#' + link
    return (
      <a href={myRef} key={ind}>
        {link}
      </a>
    )
  })
  return <nav>{myLinks}</nav>
}

export default NavBar

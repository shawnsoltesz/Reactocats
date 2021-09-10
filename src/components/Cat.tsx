import React from 'react'

export function Cat(props) {
  return (
    <section className="octocat">
      <ul className="cats">
        <li className="octodex-cat">
          <a className="cat" href={props.image}>
            <img src={props.source} alt={props.name} />
          </a>
          <div className="image-footer">
            <div className="number-name">
              <p className="number">#153: &nbsp;</p>
              <a className="name" href={props.image}>
                {props.name}
              </a>
            </div>
            <div className="artist-image">
              <a className="artist" href={props.artistProfile}>
                <img
                  className="image"
                  src={props.artistImage}
                  alt={props.artistImageAlt}
                />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}

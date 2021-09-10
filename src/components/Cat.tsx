import React from 'react'

export function Cat(props: {
  image: string
  source: string
  name: string
  number: number
  artistProfile: string
  artistImage: string
  artistName: string
}) {
  return (
    <li className="octodex-cat">
      <a className="cat" href={props.image}>
        <img src={props.source} alt={props.name} />
      </a>
      <div className="image-footer">
        <div className="number-name">
          <p className="number">#{props.number}: &nbsp;</p>
          <a className="name" href={props.image}>
            {props.name}
          </a>
        </div>
        <div className="artist-image">
          <a className="artist" href={props.artistProfile}>
            <img
              className="image"
              src={props.artistImage}
              alt={props.artistName}
            />
          </a>
        </div>
      </div>
    </li>
  )
}

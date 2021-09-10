import React from 'react'

export function Cat() {
  return (
    <section className="octocat">
      <ul className="cats">
        <li className="octodex-cat">
          <a className="cat" href="https://octodex.github.com//nuxtocat/">
            <img
              src="https://octodex.github.com/images/NUX_Octodex.gif"
              alt="NUXtocat"
            />
          </a>
          <div className="image-footer">
            <div className="number-name">
              <p className="number">#153: &nbsp;</p>
              <a className="name" href="https://octodex.github.com//nuxtocat/">
                NUXtocat
              </a>
            </div>
            <div className="artist-image">
              <a className="artist" href="https://github.com/cameronfoxly">
                <img
                  className="image"
                  src="https://avatars.githubusercontent.com/u/19292210?v=4"
                  alt="Cameron Foxly"
                />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}

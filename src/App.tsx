import React from 'react'
import { Cat } from './components/Cat'
export function App() {
  return (
    <main>
      <section className="header">
        <ul className="left">
          <li>
            <a className="A" href="#">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                width="45"
                height="45"
                alt="GithubLogo"
              />
            </a>
          </li>
          <li>
            <a className="B" href="https://octodex.github.com/">
              Octodex
            </a>
          </li>
          <li>
            <a className="C" href="https://octodex.github.com/">
              Home
            </a>
          </li>
          <li>
            <a className="D" href="https://octodex.github.com/faq/">
              FAQ
            </a>
          </li>
          <li>
            <a className="E" href="https://octodex.github.com/atom.xml">
              RSS
            </a>
          </li>
        </ul>

        <ul className="right">
          <li>
            <a className="F" href="https://twitter.com/githubdesign">
              Follow us on Twitter
            </a>
          </li>
          <li>
            <a className="G" href="https://github.com/">
              Back to GitHub.com
            </a>
          </li>
        </ul>
      </section>

      <ul className="cats">
        <Cat />

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
        <li className="octodex-cat">
          <a className="cat" href="https://octodex.github.com//umbrellatocat/">
            <img
              src="https://octodex.github.com//images/puddle_jumper_octodex.jpg"
              alt="Umbrellatocat"
            />
          </a>

          <div className="image-footer">
            <div className="number-name">
              <p className="number">#140: &nbsp;</p>

              <a
                className="name"
                href="https://octodex.github.com//umbrellatocat/"
              >
                Umbrellatocat
              </a>
            </div>
            <div className="artist-image">
              <a className="artist" href="https://github.com/rubyjazzy">
                <img
                  className="image"
                  src="https://github.com/rubyjazzy.png"
                  alt="Ruby Jazz"
                />
              </a>
            </div>
          </div>
        </li>
        <li className="octodex-cat">
          <a className="cat" href="https://octodex.github.com//hulatocat/">
            <img
              src="https://octodex.github.com//images/hula_loop_octodex03.gif"
              alt="Hulatocat"
            />
          </a>

          <div className="image-footer">
            <div className="number-name">
              <p className="number">#137: &nbsp;</p>

              <a className="name" href="https://octodex.github.com//hulatocat/">
                Hulatocat
              </a>
            </div>
            <div className="artist-image">
              <a className="artist" href="https://github.com/heyhayhay">
                <img
                  className="image"
                  src="https://github.com/heyhayhay.png"
                  alt="[Haley Carroll]"
                />
              </a>
            </div>
          </div>
        </li>
        <li className="octodex-cat">
          <a className="cat" href="https://octodex.github.com//catstello/">
            <img
              src="https://octodex.github.com//images/catstello.png"
              alt="Catstello"
            />
          </a>

          <div className="image-footer">
            <div className="number-name">
              <p className="number">#126: &nbsp;</p>

              <a className="name" href="https://octodex.github.com//catstello/">
                Catstello
              </a>
            </div>
            <div className="artist-image">
              <a className="artist" href="https://github.com/tonyjaramillo">
                <img
                  className="image"
                  src="https://github.com/tonyjaramillo.png"
                  alt="Tony Jaramillo"
                />
              </a>
            </div>
          </div>
        </li>
        <li className="octodex-cat">
          <a className="cat" href="https://octodex.github.com//octoliberty/">
            <img
              src="https://octodex.github.com//images/octoliberty.png"
              alt="OctoLiberty"
            />
          </a>

          <div className="image-footer">
            <div className="number-name">
              <p className="number">#102: &nbsp;</p>

              <a
                className="name"
                href="https://octodex.github.com//octoliberty/"
              >
                OctoLiberty
              </a>
            </div>
            <div className="artist-image">
              <a className="artist" href="https://github.com/tonyjaramillo">
                <img
                  className="image"
                  src="https://github.com/tonyjaramillo.png"
                  alt="Tony Jaramillo"
                />
              </a>
            </div>
          </div>
        </li>
        <li className="octodex-cat">
          <a
            className="cat"
            href="https://octodex.github.com//daftpunktocat-guy/"
          >
            <img
              src="https://octodex.github.com//images/daftpunktocat-guy.gif"
              alt="Daftpunktocat-Guy"
            />
          </a>

          <div className="image-footer">
            <div className="number-name">
              <p className="number">#99: &nbsp;</p>

              <a
                className="name"
                href="https://octodex.github.com//daftpunktocat-guy/"
              >
                Daftpunktocat-Guy
              </a>
            </div>
            <div className="artist-image">
              <a className="artist" href="https://github.com/jeejkang">
                <img
                  className="image"
                  src="https://github.com/jeejkang.png"
                  alt="James Kang"
                />
              </a>
            </div>
          </div>
        </li>
        <li className="octodex-cat">
          <a className="cat" href="https://octodex.github.com//Mardigrastocat/">
            <img
              src="https://octodex.github.com//images/Mardigrastocat.png"
              alt="Mardigrastocat"
            />
          </a>

          <div className="image-footer">
            <div className="number-name">
              <p className="number">#96: &nbsp;</p>

              <a
                className="name"
                href="https://octodex.github.com//Mardigrastocat/"
              >
                Mardigrastocat
              </a>
            </div>
            <div className="artist-image">
              <a className="artist" href="https://github.com/jeejkang">
                <img
                  className="image"
                  src="https://github.com/jeejkang.png"
                  alt="James Kang"
                />
              </a>
            </div>
          </div>
        </li>
        <li className="octodex-cat">
          <a className="cat" href="https://octodex.github.com//murakamicat/">
            <img
              src="https://octodex.github.com//images/murakamicat.png"
              alt="Murakamicat"
            />
          </a>

          <div className="image-footer">
            <div className="number-name">
              <p className="number">#81: &nbsp;</p>

              <a
                className="name"
                href="https://octodex.github.com//murakamicat/"
              >
                Murakamicat
              </a>
            </div>
            <div className="artist-image">
              <a className="artist" href="https://github.com/billyroh">
                <img
                  className="image"
                  src="https://github.com/billyroh.png"
                  alt="Billy Roh"
                />
              </a>
            </div>
          </div>
        </li>
        <li className="octodex-cat">
          <a className="cat" href="https://octodex.github.com//octofez/">
            <img
              src="https://octodex.github.com//images/octofez.png"
              alt="Octofez"
            />
          </a>

          <div className="image-footer">
            <div className="number-name">
              <p className="number">#77: &nbsp;</p>

              <a className="name" href="https://octodex.github.com//octofez/">
                Octofez
              </a>
            </div>
            <div className="artist-image">
              <a className="artist" href="https://github.com/nickh">
                <img
                  className="image"
                  src="https://github.com/nickh.png"
                  alt="Nick Hengeveld"
                />
              </a>
            </div>
          </div>
        </li>
        <li className="octodex-cat">
          <a className="cat" href="https://octodex.github.com//codercat/">
            <img
              src="https://octodex.github.com//images/codercat.jpg"
              alt="Codercat"
            />
          </a>

          <div className="image-footer">
            <div className="number-name">
              <p className="number">#70: &nbsp;</p>

              <a className="name" href="https://octodex.github.com//codercat/">
                Codercat
              </a>
            </div>
            <div className="artist-image">
              <a className="artist" href="https://github.com/cameronmcefee">
                <img
                  className="image"
                  src="https://github.com/cameronmcefee.png"
                  alt="Cameron McEfee"
                />
              </a>
            </div>
          </div>
        </li>
        <li className="octodex-cat">
          <a
            className="cat"
            href="https://octodex.github.com//octocat-de-los-muertos/"
          >
            <img
              src="https://octodex.github.com//images/octocat-de-los-muertos.jpg"
              alt="Octocat De Los Muertos"
            />
          </a>

          <div className="image-footer">
            <div className="number-name">
              <p className="number">#55: &nbsp;</p>

              <a
                className="name"
                href="https://octodex.github.com//octocat-de-los-muertos/"
              >
                Octocat De Los Muertos
              </a>
            </div>
            <div className="artist-image">
              <a className="artist" href="https://github.com/cameronmcefee">
                <img
                  className="image"
                  src="https://github.com/cameronmcefee.png"
                  alt="Cameron McEfee"
                />
              </a>
            </div>
          </div>
        </li>
        <li className="octodex-cat">
          <a
            className="cat"
            href="https://octodex.github.com//total-eclipse-of-the-octocat/"
          >
            <img
              src="https://octodex.github.com//images/total-eclipse-of-the-octocat.jpg"
              alt="Total Eclipse of the Octocat"
            />
          </a>

          <div className="image-footer">
            <div className="number-name">
              <p className="number">#29: &nbsp;</p>

              <a
                className="name"
                href="https://octodex.github.com//total-eclipse-of-the-octocat/"
              >
                Total Eclipse of the Octocat
              </a>
            </div>
            <div className="artist-image">
              <a className="artist" href="https://github.com/cameronmcefee">
                <img
                  className="image"
                  src="https://github.com/cameronmcefee.png"
                  alt="Cameron McEfee"
                />
              </a>
            </div>
          </div>
        </li>
        <li className="octodex-cat">
          <a className="cat" href="https://octodex.github.com//octonaut/">
            <img
              src="https://octodex.github.com//images/octonaut.jpg"
              alt="Octonaut"
            />
          </a>

          <div className="image-footer">
            <div className="number-name">
              <p className="number">#15: &nbsp;</p>

              <a className="name" href="https://octodex.github.com//octonaut/">
                Octonaut
              </a>
            </div>
            <div className="artist-image">
              <a className="artist" href="https://github.com/cameronmcefee">
                <img
                  className="image"
                  src="https://github.com/cameronmcefee.png"
                  alt="Cameron McEfee"
                />
              </a>
            </div>
          </div>
        </li>
        <li className="octodex-cat">
          <a className="cat" href="https://octodex.github.com//repo/">
            <img src="https://octodex.github.com//images/repo.png" alt="Repo" />
          </a>

          <div className="image-footer">
            <div className="number-name">
              <p className="number">#8: &nbsp;</p>

              <a className="name" href="https://octodex.github.com//repo/">
                Repo
              </a>
            </div>
            <div className="artist-image">
              <a className="artist" href="https://github.com/cameronmcefee">
                <img
                  className="image"
                  src="https://github.com/cameronmcefee.png"
                  alt="Cameron McEfee"
                />
              </a>
            </div>
          </div>
        </li>
        <li className="octodex-cat">
          <a className="cat" href="https://octodex.github.com//benevocats">
            <img
              src="https://octodex.github.com//images/benevocats.png"
              alt="Benevocats"
            />
          </a>

          <div className="image-footer">
            <div className="number-name">
              <p className="number">#6: &nbsp;</p>

              <a className="name" href="[link to solo cat image on Github]">
                Benevocats
              </a>
            </div>
            <div className="artist-image">
              <a className="artist" href="https://github.com/cameronmcefee">
                <img
                  className="image"
                  src="https://github.com/cameronmcefee.png"
                  alt="Cameron McEfee"
                />
              </a>
            </div>
          </div>
        </li>
        <li className="octodex-cat">
          <a className="cat" href="https://octodex.github.com//original/">
            <img
              src="https://octodex.github.com//images/original.png"
              alt="Original"
            />
          </a>

          <div className="image-footer">
            <div className="number-name">
              <p className="number">#1: &nbsp;</p>

              <a className="name" href="https://octodex.github.com//original/">
                Original
              </a>
            </div>
            <div className="artist-image">
              <a className="artist" href="http://www.idokungfoo.com">
                <img
                  className="image"
                  src="images/idokungfoo-avatar.jpeg"
                  alt="Simon"
                />
              </a>
            </div>
          </div>
        </li>
      </ul>

      <footer>
        <ul>
          <li>© 2013 – 2021 GitHub, Inc. All rights reserved.</li>
        </ul>
        <br />
        <br />
      </footer>
    </main>
  )
}

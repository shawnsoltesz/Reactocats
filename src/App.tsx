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
        <Cat
          image="https://octodex.github.com//nuxtocat/"
          source="https://octodex.github.com/images/NUX_Octodex.gif"
          name="NUXtocat"
          number={153}
          artistProfile="https://github.com/cameronfoxly"
          artistImage="https://avatars.githubusercontent.com/u/19292210?v=4"
          artistName="Cameron Foxly"
        />

        <Cat
          image="https://octodex.github.com//umbrellatocat/"
          source="https://octodex.github.com//images/puddle_jumper_octodex.jpg"
          name="Umbrellatocat"
          number={140}
          artistProfile="https://github.com/rubyjazzy"
          artistImage="https://github.com/rubyjazzy.png"
          artistName="Ruby Jazz"
        />

        <Cat
          image="https://octodex.github.com//hulatocat/"
          source="https://octodex.github.com//images/hula_loop_octodex03.gif"
          name="Hulatocat"
          number={137}
          artistProfile="https://github.com/heyhayhay"
          artistImage="https://avatars.githubusercontent.com/u/20049049?v=4"
          artistName="Haley Carroll"
        />

        <Cat
          image="https://octodex.github.com//catstello/"
          source="https://octodex.github.com//images/catstello.png"
          name="Catstello"
          number={126}
          artistProfile="https://github.com/tonyjaramillo"
          artistImage="https://github.com/tonyjaramillo.png"
          artistName="Tony Jaramillo"
        />

        <Cat
          image="https://octodex.github.com//octoliberty/"
          source="https://octodex.github.com//images/octoliberty.png"
          name="OctoLiberty"
          number={102}
          artistProfile="https://github.com/tonyjaramillo"
          artistImage="https://github.com/tonyjaramillo.png"
          artistName="Tony Jaramillo"
        />

        <Cat
          image="https://octodex.github.com//daftpunktocat-guy/"
          source="https://octodex.github.com//images/daftpunktocat-guy.gif"
          name="Daftpunktocat-Guy"
          number={99}
          artistProfile="https://github.com/jeejkang"
          artistImage="https://github.com/jeejkang.png"
          artistName="James Kang"
        />

        <Cat
          image="https://octodex.github.com//Mardigrastocat/"
          source="https://octodex.github.com//images/Mardigrastocat.png"
          name="Mardigrastocat"
          number={96}
          artistProfile="https://github.com/jeejkang"
          artistImage="https://github.com/jeejkang.png"
          artistName="James Kang"
        />

        <Cat
          image="https://octodex.github.com//murakamicat/"
          source="https://octodex.github.com//images/murakamicat.png"
          name="Murakamicat"
          number={81}
          artistProfile="https://github.com/billyroh"
          artistImage="https://github.com/billyroh.png"
          artistName="Billy Roh"
        />
        <Cat
          image="https://octodex.github.com//octofez/"
          source="https://octodex.github.com//images/octofez.png"
          name="Octofez"
          number={77}
          artistProfile="https://github.com/nickh"
          artistImage="https://github.com/nickh.png"
          artistName="Nick Hengeveld"
        />

        <Cat
          image="https://octodex.github.com//codercat/"
          source="https://octodex.github.com//images/codercat.jpg"
          name="Codercat"
          number={70}
          artistProfile="https://github.com/cameronmcefee"
          artistImage="https://github.com/cameronmcefee.png"
          artistName="Cameron McEfee"
        />

        <Cat
          image="https://octodex.github.com//octocat-de-los-muertos/"
          source="https://octodex.github.com//images/octocat-de-los-muertos.jpg"
          name="Octocat De Los Muertos"
          number={55}
          artistProfile="https://github.com/cameronmcefee"
          artistImage="https://github.com/cameronmcefee.png"
          artistName="Cameron McEfee"
        />

        <Cat
          image="https://octodex.github.com//total-eclipse-of-the-octocat/"
          source="https://octodex.github.com//images/total-eclipse-of-the-octocat.jpg"
          name="Total Eclipse of the Octocat"
          number={29}
          artistProfile="https://github.com/cameronmcefee"
          artistImage="https://github.com/cameronmcefee.png"
          artistName="Cameron McEfee"
        />

        <Cat
          image="https://octodex.github.com//octonaut/"
          source="https://octodex.github.com//images/octonaut.jpg"
          name="Octonaut"
          number={15}
          artistProfile="https://github.com/cameronmcefee"
          artistImage="https://github.com/cameronmcefee.png"
          artistName="Cameron McEfee"
        />

        <Cat
          image="https://octodex.github.com//repo/"
          source="https://octodex.github.com//images/repo.png"
          name="Repo"
          number={8}
          artistProfile="https://github.com/cameronmcefee"
          artistImage="https://github.com/cameronmcefee.png"
          artistName="Cameron McEfee"
        />

        <Cat
          image="https://octodex.github.com//benevocats"
          source="https://octodex.github.com//images/benevocats.png"
          name="Benevocats"
          number={6}
          artistProfile="https://github.com/cameronmcefee"
          artistImage="https://github.com/cameronmcefee.png"
          artistName="Cameron McEfee"
        />
        <Cat
          image="https://octodex.github.com//original/"
          source="https://octodex.github.com//images/original.png"
          name="Original"
          number={1}
          artistProfile="http://www.idokungfoo.com"
          artistImage="https://static.wixstatic.com/media/e6031a_afa89239d42c4d3eabee0755d4e56625~mv2.png/v1/fill/w_554,h_560,al_c,lg_1,q_85/e6031a_afa89239d42c4d3eabee0755d4e56625~mv2.webp"
          artistName="Simon"
        />
      </ul>
      <footer>
        <ul>
          <li>© 2013 – 2021 GitHub, Inc. All rights reserved.</li>
        </ul>
      </footer>
    </main>
  )
}

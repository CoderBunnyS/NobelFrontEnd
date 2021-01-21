import React, { Component } from 'react'

export default class Para extends Component {
    render() {
        return (
            <div>
                <img
          className="img-responsive"
          src="https://scx2.b-cdn.net/gfx/news/hires/2015/561381b103db1.jpeg"
          alt="logo"
        />
        <div class="aboutPara">
          <p>
            When the Swedish businessman Alfred Nobel passed away in 1896, he
            left behind what was then one of the world&rsquo;s largest private
            fortunes. In his last will Nobel declared that the whole of his
            remaining fortune of 31, 5 million Swedish crowns was to be invested
            in safe securities and should constitute a fund{" "}
            <em>
              "the interest on which shall be annually distributed in the form
              of prizes to those who, during the preceding year, shall have
              conferred the greatest benefit on mankind"
            </em>
          </p>
          <h3>Will</h3>
          <p>
            The will specified in which fields the prizes should be awarded
            &ndash; physics, chemistry, medicine or physiology, literature and
            peace &ndash; and which criteria the respective prize committees
            should apply when choosing their prize recipients. According to the
            will the Nobel Peace Prize was to be awarded{" "}
            <em>
              &ldquo;to the person who shall have done the most or the best work
              for fraternity between the nations and the abolition or reduction
              of standing armies and the formation and spreading of peace
              congresses.&rdquo;
            </em>
          </p>
        </div>
            </div>
        )
    }
}

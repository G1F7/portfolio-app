import Head from "next/head";
import React from "react";
import Circle from "../components/Circle";
/*This page renders the about page which tells a visitor a bit more about myself*/

const AboutMe = () => {
  return (
    <>
      <Head>
        <title>Gift Lehobye | About </title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <section className="about" id="about">
        <h1 className="section-heading">
          about <span>me</span>
        </h1>
        <div className="content">
          <p>
          Gift Austin Lehobye is an Information Technology
          delegate that believes in motivation and has passion,
          and growth in IT, and seeks a company that carries
          both collaboration and a positive work environment,
          where knowledge and the value of hardwork is valued
          in an organization.
          </p>
          <div className="education">
            <h3 className="section-subHeading">EDUCATIONAL HISTORY</h3>
            <br />
            <ul>
              <li>Hyperion Dev Fullstack Web Development Bootcamp</li>
              <li>iCollege Institution (Tech support)</li>
            </ul>
          </div>
          <a
            href="/img/gift lehobye-resume.pdf"
            className="btn cta btn"
            download="Gift-Lehobye-Resume"
            target="_blank"
          >
            download cv
            <i className="bi bi-arrow-down-circle-fill" />
          </a>
        </div>

        <style jsx>{`
          li {
            margin: -10px;
          }

          .about .list-items {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            justify-content: center;
            align-items: center;
          }

          .about {
            text-align: center;
            margin-bottom: 5rem;
          }
          .about .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
          }

          .about .content p {
            padding: 10px;
            line-height: 30px;
            font-family: "Open Sans", sans-serif;
            font-size: 16px;
            font-weight: 500;
            max-width: 800px;
            text-align: center;
          }

          .about .content ul {
            line-height: 40px;
          }

          section li::before {
            content: "";
            display: inline-block;
            background-image: url(./img/dot.png);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 0.5em;
            height: 0.5em;
            margin-right: 0.3rem;
          }
        `}</style>
      </section>
    </>
  );
};

export default AboutMe;
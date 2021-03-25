/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import 'custom/components/teamMembers/Eliza_Arzanukaeva/styles/main.scss';

const pageTitle = 'Eliza Arzanukaeva';

function PageElizaArzanukaeva(props) {
  useEffect(() => {
    props.changeSiteTitle(pageTitle);

    const pageBackgroundColor = 'floralwhite';
    document
      .getElementsByClassName('mainContainer')[0]
      .setAttribute('style', `background-color: ${pageBackgroundColor}`);
    document.body.style.backgroundColor = pageBackgroundColor;
  }, []);
  return (
    <div className="page_elizaArzanukaeva">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header_inner">
            <div className="header_logo">
              <a href="/">Elis.s</a>
            </div>
            <nav className="nav">
              <a className="nav_link" href="/" data-scroll="#header">
                Home
              </a>
              <a className="nav_link" href="/" data-scroll="#features">
                Features
              </a>
              <a className="nav_link" href="/" data-scroll="#works">
                Works
              </a>
              <a className="nav_link" href="/" data-scroll="#team">
                Our Team
              </a>
              <a className="nav_link" href="/" data-scroll="#reviews">
                Reviews
              </a>
              <a className="nav_link" href="/" data-scroll="#download">
                Download
              </a>
            </nav>
            <div className="header_lang">
              <a className="nav_link" href="/">
                en
              </a>
            </div>
            <div className="burger">
              <span className="burger_item"> Menu</span>
            </div>
          </div>
        </div>
      </header>
      <div className="intro">
        <div className="container">
          <div className="intro_inner">
            <h1 className="intro_title">
              {' '}
              Favorite One Page Multi Purpose Template
            </h1>
            <h2 className="intro_subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Eius
              consequatur aut odio exercitationem error?Asperiores eum hic atque
              quod voluptatum?
            </h2>
            <a className="btn btn--red" href="/">
              Find Out More
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="features">
          <div className="features_item">
            <img className="features_icon" src="/img/logo/1.png" alt="" />
            <h4 className="features_title">Easily Customised</h4>
            <div className="features_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              minus dolor nisi tempore natus odio maiores ullam magnam
              excepturi, aspernatur necessitatibus harum dolores, placeat
              explicabo! Consequatur numquam hic deserunt dolores.
            </div>
          </div>
          <div className="features_item">
            <img className="features_icon" src="/img/logo/2.png" alt="" />
            <h4 className="features_title">Responsive Ready</h4>
            <div className="features_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              minus dolor nisi tempore natus odio maiores ullam magnam
              excepturi, aspernatur necessitatibus harum dolores, placeat
              explicabo! Consequatur numquam hic deserunt dolores.
            </div>
          </div>
          <div className="features_item">
            <img className="features_icon" src="/img/logo/3.png" alt="" />
            <h4 className="features_title">Modern Design</h4>
            <div className="features_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              minus dolor nisi tempore natus odio maiores ullam magnam
              excepturi, aspernatur necessitatibus harum dolores, placeat
              explicabo! Consequatur numquam hic deserunt dolores.
            </div>
          </div>
          <div className="features_item">
            <img className="features_icon" src="/img/logo/4.png" alt="" />
            <h4 className="features_title">Clean Code</h4>
            <div className="features_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              minus dolor nisi tempore natus odio maiores ullam magnam
              excepturi, aspernatur necessitatibus harum dolores, placeat
              explicabo! Consequatur numquam hic deserunt dolores.
            </div>
          </div>
          <div className="features_item">
            <img className="features_icon" src="/img/logo/5.png" alt="" />
            <h4 className="features_title">Ready to Ship</h4>
            <div className="features_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              minus dolor nisi tempore natus odio maiores ullam magnam
              excepturi, aspernatur necessitatibus harum dolores, placeat
              explicabo! Consequatur numquam hic deserunt dolores.
            </div>
          </div>
          <div className="features_item">
            <img className="features_icon" src="/img/logo/6.png" alt="logo" />
            <h4 className="features_title">Download for free</h4>
            <div className="features_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              minus dolor nisi tempore natus odio maiores ullam magnam
              excepturi, aspernatur necessitatibus harum dolores, placeat
              explicabo! Consequatur numquam hic deserunt dolores.
            </div>
          </div>
        </div>
      </div>
      <div className="works">
        <div className="works_item">
          <img className="works_photo" src="/img/works/1w.jpg" alt="" />
          <div className="works_content">
            <div className="works_title">Project Name</div>
            <div className="works_text">xxhgghfhfg</div>
          </div>
        </div>
        <div className="works_item">
          <img className="works_photo" src="/img/works/2w.jpg" alt="" />
          <div className="works_content">
            <div className="works_title">Project Name</div>
            <div className="works_text">xxhgghfhfg</div>
          </div>
        </div>
        <div className="works_item">
          <img className="works_photo" src="/img/works/3w.jpg" alt="" />
          <div className="works_content">
            <div className="works_title">Project Name</div>
            <div className="works_text">xxhgghfhfg</div>
          </div>
        </div>
        <div className="works_item">
          <img className="works_photo" src="/img/works/4w.jpg" alt="" />
          <div className="works_content">
            <div className="works_title">Project Name</div>
            <div className="works_text">xxhgghfhfg</div>
          </div>
        </div>
        <div className="works_item">
          <img className="works_photo" src="/img/works/5w.jpg" alt="" />
          <div className="works_content">
            <div className="works_title">Project Name</div>
            <div className="works_text">xxhgghfhfg</div>
          </div>
        </div>
        <div className="works_item">
          <img className="works_photo" src="/img/works/6w.jpg" alt="" />
          <div className="works_content">
            <div className="works_title">Project Name</div>
            <div className="works_text">xxhgghfhfg</div>
          </div>
        </div>
        <div className="works_item">
          <img className="works_photo" src="/img/works/7w.jpg" alt="" />
          <div className="works_content">
            <div className="works_title">Project Name</div>
            <div className="works_text">xxhgghfhfg</div>
          </div>
        </div>
        <div className="works_item">
          <img className="works_photo" src="/img/works/8w.jpg" alt="" />
          <div className="works_content">
            <div className="works_title">Project Name</div>
            <div className="works_text">xxhgghfhfg</div>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="container">
          <div className="team_inner">
            <div className="team_item">
              <img className="team_photo" src="/img/team/1.jpg" alt="" />
              <div className="team_name">Fruth</div>
              <div className="team_prof">Founder, CEO</div>
              <div className="team_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Commodi deleniti vitae, laudantium ullam possimus
                  necessitatibus{' '}
                </p>{' '}
                <p>
                  architecto consequatur dolorum est blanditiis, aspernatur
                  porro reiciendis nostrum dolor. Quibusdam, accusantium. Id,
                  tenetur atque?
                </p>
              </div>
            </div>
            <div className="team_item">
              <img className="team_photo" src="/img/team/2.jpg" alt="" />
              <div className="team_name">Mruth</div>
              <div className="team_prof">Founder, CEO</div>
              <div className="team_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Commodi deleniti vitae, laudantium ullam possimus
                  necessitatibus{' '}
                </p>{' '}
                <p>
                  architecto consequatur dolorum est blanditiis, aspernatur
                  porro reiciendis nostrum dolor. Quibusdam, accusantium. Id,
                  tenetur atque?
                </p>
              </div>
            </div>
            <div className="team_item">
              <img className="team_photo" src="/img/team/3.jpg" alt="" />
              <div className="team_name">Bruth</div>
              <div className="team_prof">Founder, CEO</div>
              <div className="team_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Commodi deleniti vitae, laudantium ullam possimus
                  necessitatibus{' '}
                </p>{' '}
                <p>
                  architecto consequatur dolorum est blanditiis, aspernatur
                  porro reiciendis nostrum dolor. Quibusdam, accusantium. Id,
                  tenetur atque?
                </p>
              </div>
            </div>
            <div className="team_item">
              <img className="team_photo" src="/img/team/4.jpg" alt="" />
              <div className="team_name">Ruth</div>
              <div className="team_prof">Founder, CEO</div>
              <div className="team_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Commodi deleniti vitae, laudantium ullam possimus
                  necessitatibus{' '}
                </p>{' '}
                <p>
                  architecto consequatur dolorum est blanditiis, aspernatur
                  porro reiciendis nostrum dolor. Quibusdam, accusantium. Id,
                  tenetur atque?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews">
        <div className="container">
          <div className="reviews_item">
            <div className="reviews_photo">
              <img className="reviews_img" src="/img/reviews/1.jpg" alt="" />
            </div>
            <div className="reviews_content">
              <div className="reviews_text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                atque repellat.
              </div>
              <div className="reviews_author">
                Susan Sims, Interaction Designer at XYZ
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="download">
        <div className="container">
          <h3 className="download_title">
            Are You Ready to Start?Download Now For Free!
          </h3>
          <div className="download_text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <a className="btn btn--red  btn--long" href="/">
            Download Here
          </a>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="footer_inner">
            <div className="footer_block">
              <h4 className="footer_title">Location</h4>
              <address className="footer_adress">
                <div>3941 Melrose Place.</div>
                <div>Beverly Hills, CA 364738</div>
              </address>
            </div>
            <div className="footer_block">
              <h4 className="footer_title">Share with Love</h4>
              </div>
            </div>
            <div className="footer_block">
              <h4 className="footer_title">About ActiveBox</h4>
              <div className="footer_text">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit.Itaque molestias eligendi maxime et{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="copyright_text">
                <div>Copyright 2021 ActiveBox.All Rights Reserved </div>
                <div>
                  Made with Y <span> by Tralala</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
}

export default PageElizaArzanukaeva;

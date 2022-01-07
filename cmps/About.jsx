export function About() {
  return (
    <React.Fragment>
      <div className="about">
        <img src="./assets/img/yuval.jpg" alt="" />
        <div className="about-content">
          <h3>Yuval Shai</h3>
          <p>
            27 years old from Ramat Yishai, Israel. Always looking for a new challenge. All about learning new
            things. Studying web development in Coding-Academy.
          </p>
        </div>
        <div className="social">
        <a target="_blank" href="https://github.com/yuvalshai95" className="fab fa-github"></a>
          <a target="_blank" href="https://www.facebook.com/yuva.shai2/" className="fab fa-facebook-f"></a>
          <a target="_blank" href="https://www.linkedin.com/in/yuval-shai/" className="fab fa-linkedin"></a>
        </div>
      </div>
      <div className="about">
        <img src="./assets/img/daniel.jpeg" alt="" />
        <div className="about-content">
          <h3>Daniel Shaked</h3>
          <p>23 Years old from Jerusalem, Israel. Always looking for a new challenge.
            All about learning new things, and new technologies.
            Studying web development, Full-Stack, in Coding-Academy Boot-Camp</p>
        </div>
        <div className="social">
          <a target="_blank" href="https://github.com/DanielShaked" className="fab fa-github"></a>
          <a target="_blank" href="https://www.facebook.com/daniel.shkad" className="fab fa-facebook-f"></a>
          <a target="_blank" href="https://www.linkedin.com/in/daniel-shaked-bba564203/" className="fab fa-linkedin"></a>
        </div>
      </div>
    </React.Fragment>
  );
}

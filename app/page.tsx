import homePageStyles from "./page.module.css";

export default function Page() {
  return (
    <main className={homePageStyles.container}>
      <section className={homePageStyles.hero}>
        <div className={homePageStyles.heroHeading}>
          <h1>
            Hey, I&apos;m <span>Avni</span>
          </h1>
          <p>
            AI / ML <span>Engineer</span>
          </p>
          <span className={homePageStyles.cursorAccent} aria-hidden="true">
            ◆
          </span>
        </div>
        <div className={homePageStyles.calloutCard}>
          <svg
            className={homePageStyles.calloutIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path d="M3 12l9-9 9 9" strokeWidth="1.2" />
          </svg>

          <p>
            Final-year B.Tech student specializing in AI &amp; ML, building
            full-stack web applications with React.js, Next.js, and Node.js
            alongside practical machine learning and Generative AI systems.
          </p>
          <a
            className={homePageStyles.followButton}
            href="mailto:avnireeta@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Get in touch
          </a>
        </div>

        <article className={homePageStyles.introPanel}>
          <div className={homePageStyles.introHeader}>
            <span className={homePageStyles.eyebrow}>A little context</span>
            <span className={homePageStyles.statusDot}>
              Open to opportunities
            </span>
          </div>
          <div className={homePageStyles.introGrid}>
            <div>
              <h2>Building useful intelligence for the real world.</h2>
              <p className={homePageStyles.introLead}>
                I enjoy the space where thoughtful interfaces meet practical AI.
              </p>
            </div>
            <ul className={homePageStyles.pointList}>
              <li>
                <span>01</span> I build full-stack products with React, Next.js,
                and Node.js.
              </li>
              <li>
                <span>02</span> I design grounded ML and Generative AI systems,
                from RAG to agents.
              </li>
              <li>
                <span>03</span> I care about clear UX, reliable outputs, and
                shipping work people can use.
              </li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}

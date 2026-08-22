import styles from "./HeroVisual.module.css";

/**
 * Temporary brand-film placeholder.
 * Swap the inner composition for a muted, looping 16:9 video later:
 *
 * <video
 *   className="absolute inset-0 h-full w-full object-cover"
 *   poster="/hero/poster.jpg"
 *   muted
 *   autoPlay
 *   loop
 *   playsInline
 *   preload="metadata"
 * >
 *   <source src="/hero/sitepro-desktop.webm" type="video/webm" />
 *   <source src="/hero/sitepro-desktop.mp4" type="video/mp4" />
 * </video>
 */
export function HeroVisual() {
  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={styles.grid} />
      <div className={styles.glow} />
      <p className={styles.caption}>Idea → design → build → launch</p>

      <div className={styles.browser}>
        <div className={styles.chrome}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.url}>sitepromy.com</span>
        </div>
        <div className={styles.body}>
          <div className={styles.artboard}>
            <div className={styles.navline}>
              <span className={styles.wordmark} />
              <span className={styles.navbits}>
                <span />
                <span />
                <span />
              </span>
              <span className={styles.ctaChip} />
            </div>
            <div className={styles.heroCopy}>
              <span className={`${styles.line} ${styles.lg}`} />
              <span className={`${styles.line} ${styles.md}`} />
              <span className={`${styles.line} ${styles.sm}`} />
              <div className={styles.buttons}>
                <span className={styles.btn} />
                <span className={`${styles.btn} ${styles.ghost}`} />
              </div>
            </div>
            <div className={styles.preview}>
              <span className={`${styles.block} ${styles.a}`} />
              <span className={`${styles.block} ${styles.b}`} />
              <span className={`${styles.block} ${styles.c}`} />
            </div>
            <div className={styles.footerBar} />
          </div>
        </div>
      </div>

      <aside className={styles.idea}>
        <p className={styles.kicker}>Idea</p>
        <p className={styles.ideaTitle}>Business brief</p>
        <div className={styles.ideaBody}>
          <span />
          <span />
          <span />
        </div>
      </aside>

      <aside className={styles.code}>
        <div className={styles.codeTop}>
          <i />
          <i />
          <i />
        </div>
        <pre className={styles.pre}>
          {`const site = {
  `}
          <em>ready</em>
          {`: true,
  mobile: "first"
}`}
        </pre>
      </aside>

      <aside className={styles.phone}>
        <div className={styles.notch} />
        <div className={styles.screen}>
          <span className={styles.screenBar} />
          <span className={styles.screenCard} />
          <span className={styles.screenBar} />
        </div>
      </aside>

      <div className={styles.progress}>
        {["Idea", "Design", "Build", "Launch"].map((label) => (
          <div className={styles.step} key={label}>
            <span className={styles.stepLabel}>{label}</span>
            <div className={styles.track}>
              <div className={styles.fill} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

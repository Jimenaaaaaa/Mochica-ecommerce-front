import styles from "./about.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.about_content}>
        <img src="/favicon.png" alt="Ceramic" />
        <p>
          We are an online gallery dedicated to innovative, handcrafted
          ceramics.
        </p>
        <p>
          Using natural, high-quality materials and minimalism, we design
          contemporary ceramics for display, gifting, and everyday use. Each
          unique piece is handcrafted by emerging ceramic artists, using
          techniques like raku firing, wood firing, handbuilding, and wheel
          throwing.
        </p>
        <p>
          As an ecommerce site, we offer a curated collection of innovative
          ceramics without the constraints of a physical store. However, we
          maintain deep connections within the ceramic arts community and with
          our artists.
        </p>
        <p>
          We believe ceramics can spark joy, engage the senses, and enable
          meaningful sharing between people. Our ceramics reimagine
          possibilities and suit any style or need.
        </p>
      </div>
    </div>
  );
}

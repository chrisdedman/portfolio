import { component$ } from "@builder.io/qwik";
import { CdrLogo } from "../icons/icon";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/portfolio" title="qwik">
            <CdrLogo height={50} width={143} />
          </a>
        </div>
        <ul>
          <li>
            <a
              href="https://twitter.com/DedmanRollet" target="_blank">
              x/ Twitter
            </a>
          </li>

          <li>
            <a href="https://github.com/chrisdedman" target="_blank">
              GitHub</a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/chris-dedman-rollet/" target="_blank">
              LinkedIn</a>
          </li>

        </ul>
      </div>
    </header>
  );
});

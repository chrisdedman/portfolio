import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import styles from "./footer.module.css";
import moment from "moment";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div class="container">
        <a class={styles.anchor}>
          <span>Made by Chris Dedman</span>
          <span class={styles.spacer}>|</span>
          <span>{moment(serverTime.value.date).format('MMMM DD, YYYY, h:mm:ss A z')}</span>
        </a>
      </div>
    </footer>
  );
});

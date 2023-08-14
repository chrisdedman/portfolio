import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Infobox from "~/components/starter/infobox/infobox";

export default component$(() => {
  return (
    <>
      <div class="container container-flex">
        <Infobox>
          <div q:slot="title" class="icon icon-apps">
            Interest
          </div>
          <>
            <li>Software Engineering</li>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Embedded System</li>
          </>
          </Infobox>

          <Infobox>
          <div q:slot="title" class="icon icon-language">
            Languages
          </div>
          <>
            <li>Python</li>
            <li>C++</li>
            <li>Java</li>
          </>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-learning">
            Currently Learning
          </div>
          <>
            <li>Golang</li>
            <li>Performance Load Testing</li>
            <li>Elixir</li>
          </>
        </Infobox>
      </div>

      <div class="container container-flex">
        <Infobox>
          <div q:slot="title" class="icon icon-project">
            Projects
          </div>
          <>
            <li><a href="https://github.com/chrisdedman/Near_Earth_Object" target="_blank">Near Earth Object Tracking</a></li>
            <li><a href="https://github.com/chrisdedman/air_quality" target="_blank">Air Quality Py</a></li>
            <li><a href="https://github.com/chrisdedman/work_management" target="_blank">Work Management App</a></li>
            <li><a href="https://github.com/chrisdedman/weather_station" target="_blank">Go Weather station</a></li>
          </>
        </Infobox>
        <Infobox>
          <div q:slot="title" class="icon icon-community">
            Open-Source Contribution
          </div>
          <>
          <ul>
            <li>Grace ~ Discord Bot
              <ul>
                <li><a href="https://github.com/Code-Society-Lab/grace/pull/51" target="_blank">Weather Feature</a></li>
                <li><a href="https://github.com/Code-Society-Lab/grace/pull/81" target="_blank">Translator Feature</a></li>
                <li><a href="https://github.com/Code-Society-Lab/grace/pull/88" target="_blank">Update Documentation</a></li>
                <li><a href="https://github.com/Code-Society-Lab/grace/pull/89" target="_blank">Code Generator Feature (OpenAI)</a></li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>Cursif ~ Note-taking Application
              <ul>
                <li><a href="https://github.com/Code-Society-Lab/cursif-backend/pull/5" target="_blank">Create & Manage Macros (Backend)</a></li>
              </ul>
            </li>
          </ul>
          </>
        </Infobox>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Chris Dedman Portfolio",
  meta: [
    {
      name: "description",
      content: "Software Engineering Portfolio",
    },
  ],
};

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Home from "~/tpl/home";

export default component$(() => {
  return (
    <Home />
  );
});

export const head: DocumentHead = {
  title: "@well1791's content",
  meta: [
    {
      name: "description",
      content: "whatever.",
    },
  ],
};

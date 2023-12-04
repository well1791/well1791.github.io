import { component$, Slot } from "@builder.io/qwik";

import Header from '~/org/header'
import Footer from '~/org/footer'
import * as st from './layout.css'

export default component$(() => {
  return (
    <>
      <Header />
      <main class={st.container}>
        <Slot />
      </main>
      <Footer />
    </>
  );
});

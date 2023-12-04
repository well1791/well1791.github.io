import { component$, useContext } from '@builder.io/qwik'

import * as st from './header.css'
import { ThemeContext } from '~/root'

export default component$(() => {
  const theme = useContext(ThemeContext)
  return (
    <header class={st.container}>
      <button
        class={st.btn}
        onClick$={() => {
          theme.value = theme.value === 'dark' ? 'light' : 'dark'
        }}
      >{theme.value}</button>
    </header>
  )
})

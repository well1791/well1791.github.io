import {
  type Signal,
  component$,
  useSignal,
  useContextProvider,
  createContextId,
} from '@builder.io/qwik';
import {
  useDocumentHead,
  useLocation,
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import "./css/global.css";
import { theme, type Theme } from "./css/theme.css"

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}

      {head.scripts.map((s) => (
        <script key={s.key} {...s.props} dangerouslySetInnerHTML={s.script} />
      ))}
    </>
  );
});

export const ThemeContext = createContextId<Signal<string>>(
  'root.theme-context'
);

export default component$(() => {
  const currentTheme = useSignal<Theme>('light');
  useContextProvider(ThemeContext, currentTheme);

  console.log('YYYYYYYYYYYYYYYYYYYYYYYYYYYYYY')
  console.log(currentTheme.value)

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en" class={theme[currentTheme.value]}>
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});

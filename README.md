# Qwik City App ⚡️

---

## Project Structure

This project is using Qwik with [QwikCity](https://qwik.builder.io/qwikcity/overview/). QwikCity is just an extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   ├── atom/
    │   ├── molecule/
    │   ├── organism/
    │   ├── template/
    │   └── ...
    └── routes/
        ├── index.tsx
        ├── blog/post-title.mdx
        └── ...
```

- `src/routes`: See the [routing docs](https://qwik.builder.io/qwikcity/routing/overview/).

- `src/components`: Recommended directory for components.

- `public`: See the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory).

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
bun start
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
bun preview
```

## Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
bun build
```

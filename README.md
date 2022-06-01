# My resume
## Tech stack

- typescript :shrug:
- [https://redwoodjs.com/](redwoodjs)
- [https://stitches.dev/](stitches)
- [https://polished.js.org/](polished)
- [https://date-fns.org/](date-fns)
- [https://jotai.org/](jotai)

### Setup

To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Server functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.

### Deploy

For now the solution is pretty much this

```terminal
yarn rw build web && \
rm -rf docs && \
mv web/dist docs && \
git add . && \
git commit -m "Update site" && \
git push --set-upstream origin "$(git-branch-current 2>/dev/null)"
```

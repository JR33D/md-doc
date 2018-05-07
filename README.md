# MdDoc

The end goal of this project is to create a Markdown to html documentation system built on angular and nest.

## Clone and build

After cloning the repository make sure to run an `npm install` command to get all of the needed third party packages. once you go to serve the server, it will automatically build the `client/src` using the ng build command, and saving the bundled files under `./dist/` which is then hosted as static content from `server/src/app.controller.ts`.

## Project Serve

Run `npm run start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files ending in types `"ts,html,css,md"`, under the `client/src` or `server/src` folders.

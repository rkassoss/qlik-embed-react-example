# qlik-embed-react-example

This react app is a little demo app on how to use the new `qlik-embed` libraries

The `qlik-embed` libraries are under development so the code here can break when updates to the npm dependencies are made.

## Prerequisets

You need to have access to a QCS tenant and you need to setup an OAuth Client.

- Allow origins should include <https://localhost:5173>
- Redirect URLs need to include <https://localhost:5173/oauth-callback.html>

## Get started

1. Install project `npm install`
2. Modify some config in `App.tsx`
   1. Change the host in the `hostConfig` variable to a QCS tenant you have access to
   2. Change the clientId to your OAuth clientId
   3. Set the App ID to an app you have access to
   4. Set a Sheet ID (optional)
3. Start the dev server `npm run dev`
4. Open <https://localhost:5173>

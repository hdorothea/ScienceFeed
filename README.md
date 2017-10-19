This is supposed to be a minimal web app containing many of the concepts and considerations going into a production webapp. 

Namely:

* Performance considerations and seo (server side rendering , preload, async, defer, bundle size analysis, bundle splitting)
* Offline and shaky connection tolerance (PWA, service worker etc.)
* Component reusability considerations (fully reusable components, development using react-storybook, components as styling units using styled components)
* Code organization considerations  (modularized redux with redux ducks)
* State management considerations (redux, redux-thunk)
* Client-side routing (react-router)
* Testing 

This app was written to allow me to play around with concepts I have been reading about, without being bogged down by the specific details of a bigger and functionalitywise more interesting app.

Things to possibly add to the above list: 
Helmet, time travel debugging, sentry, maybe e2e testing with cypress
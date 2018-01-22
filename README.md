An app to accumulate popular science news from different sources.

#### Technical considerations for this app:

* Performance considerations and seo (server side rendering , preload, async, defer, bundle size analysis, bundle splitting)
* Offline and shaky connection tolerance (PWA, service worker etc.)
* Component reusability considerations (fully reusable components, development using react-storybook, components as styling units using inline-styles and Radium)
* Code organization considerations  (modularized redux with [redux ducks](https://github.com/erikras/ducks-modular-redux))
* State management considerations (redux, redux-thunk)
* Client-side routing (react-router)
* Testing 

Things to possibly add to the above list: 
Helmet, time travel debugging, sentry, maybe e2e testing with cypress
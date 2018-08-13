// @flow

// Validates module.hot.accept in ClientApp.jsx
// To use more of module properties, we need to annotate more below here
declare var module: {
	hot: {
		accept(path: string, callback: () => void): void // declaring an object called module with hot as an attribute inside in which accepts path and callback (callback returns void) and the accept function inside hot itself returns void.
	}
};

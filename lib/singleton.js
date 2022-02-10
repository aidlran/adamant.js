/**
 * An element of which there is only one or none of at one time.
 * @typedef Singleton
 * @typedef SingletonFunctions
 * @property {function: void} show Shows this element, creating fresh DOM if needed.
 * @property {function: void} hide Remove the element from the DOM, but don't destroy it yet.
 * @property {function: void} destroy Remove the element from the DOM and destroy it.
 */

/**
 * A construction function for a Singleton.
 * @callback SingletonConstructor
 * @param {SingletonFunctions} functions Passes in the functions for this singleton to be used in the constructor.
 * @param {SingletonOptions} options Passes in the options for this singleton to be changed by the constructor.
 * @return {HTMLElement} Must return an element that the Singleton pattern will manage.
 */

/**
 * Options for a Singleton.
 * @typedef SingletonOptions
 * @property {HTMLElement} [parent] The parent element for the Singleton element. Defaults to `document.body`.
 * @property {function(element: HTMLElement)} [showCallback] A callback that is fired when the Singleton is shown. The managed element is passed in.
 * @property {function(element: HTMLElement)} [hideCallback] A callback that is fired when the Singleton is hidden. The managed element is passed in.
 * @property {function()} [destroyCallback] A callback that is fired when the Singleton is destroyed.
 */

/**
 * An element of which there is only one of at a time.
 * @param {SingletonConstructor} constructor
 * @param {SingletonOptions} [options]
 * @return Singleton
 */
export default function(constructor, options = {}) {

	options.parent = options.parent ?? document.body;

	let e;

	const functions = {
		show: () => {
			options.parent.append(get());
			if (options.showCallback) options.showCallback(e);
		},
		hide: () => {
			close();
			if (options.hideCallback) options.hideCallback(e);
		},
		destroy: () => {
			close();
			e = undefined;
			if (options.destroyCallback) options.destroyCallback();
		}
	};

	return functions;

	function get() {
		if (!e) e = constructor(functions, options);
		return e;
	}

	function close() {
		if (e) e.remove();
	}
};

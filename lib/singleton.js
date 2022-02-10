/**
 * @typedef Singleton An element of which there is only one of at a time.
 * @property {function: void} show Shows this element, creating fresh DOM if needed.
 * @property {function: void} hide Remove the element from the DOM, but don't destroy it yet.
 * @property {function: void} destroy Remove the element from the DOM and destroy it.
 */

/**
 *
 * @param {function: HTMLElement} constructor
 * @param {HTMLElement} [parent]
 * @return Singleton
 */
export default function(constructor, parent = document.body) {

	let e;

	return {
		show: () => parent.append(get()),
		hide: close,
		destroy: () => {
			close();
			e = undefined;
		}
	};

	function get() {
		if (!e) e = constructor();
		return e;
	}

	function close() {
		if (e) e.remove();
	}
};

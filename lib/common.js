/**
 * Advanced element creation.
 * @param {string} tagName Element tag name.
 * @param {Object} [properties] Element properties.
 * @param {function(element: HTMLElementTagNameMap[string])} [callback] Callback to do stuff with the element.
 * @return {HTMLElementTagNameMap[string]} The element.
 */
export function createElement(tagName, properties, callback) {
	const element = Object.assign(document.createElement(tagName), properties ?? {});
	if (callback) callback(element);
	return element;
}

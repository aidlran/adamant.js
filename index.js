import Events from './lib/events.js';
import ViewStack from './lib/view-stack.js';
import Singleton from './lib/singleton.js';

/**
 * Advanced element creation.
 * @param {string} tagName Element tag name.
 * @param {Object} [properties] Element properties.
 * @param {function(element: HTMLElementTagNameMap[tagName])} [callback] Callback to do stuff with the element.
 * @return {HTMLElementTagNameMap[tagName]} The element.
 */
export function createElement(tagName, properties, callback) {
	const element = Object.assign(document.createElement(tagName), properties ?? {});
	if (callback) callback(element);
	return element;
}

export {
	Events,
	ViewStack,
	Singleton
};

export default {
	createElement,
	Events,
	ViewStack,
	Singleton
};

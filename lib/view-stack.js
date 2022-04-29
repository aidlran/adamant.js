/**
 * A data structure allowing for persistent navigation between views in single-page apps.
 * All stack manipulation methods (`push`, `pop` & `clear`) return the ViewStack for method daisy-chaining.
 * @typedef ViewStack
 * @property {function(...elements:HTMLElement):ViewStack} push Push element(s) onto the top of the view stack.
 * @property {function:ViewStack} pop Pop the element at the top of the stack (most recently added.)
 * @property {function:ViewStack} clear Clear the stack.
 * @property {function:number} stackSize Get the current stack size.
 */

/**
 * Construct a `ViewStack`. Elements that are pushed onto the stack are appended
 * to the `HTMLElement` parameter given here in the constructor.
 * @param {HTMLElement} containerElement
 * @returns ViewStack
 * @constructor
 */
export default containerElement => {

	const methods = {};

	let viewStack = [];

	methods.push = (...elements) => {
		viewStack.push(...elements);
		if (viewStack.length > 1)
			viewStack[viewStack.length - 2].remove();
		containerElement.append(elements[elements.length -1])
		return methods;
	};

	methods.pop = () => {
		if (viewStack.length > 0)
			viewStack.pop().remove();
		if (viewStack.length > 0)
			containerElement.appendChild(viewStack[viewStack.length - 1]);
		return methods;
	};

	methods.clear = () => {
		if (viewStack.length > 0)
			viewStack.pop().remove();
		viewStack = [];
		return methods;
	};

	methods.stackSize = () => viewStack.length;

	return methods;
};

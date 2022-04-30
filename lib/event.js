/**
 * A class that registers functions to execute when `fire` is invoked.
 * Functions return the `EventHandler` structure for daisy-chaining functions.
 * @typedef EventHandler
 * @property {function(...fn:function):EventHandler} registerFunction Register function(s).
 * @property {function:EventHandler} clearFunctions Unregister all functions.
 * @property {function(callback:function(fn:function)=):EventHandler} fire Fire the event. If a callback is provided, it is invoked once for each registered function (which is passed to the callback's first parameter) Otherwise, each registered function is called without parameters. Functions are called in the order that they were registered.
 */

/**
 * Construct an `EventHandler`.
 * @returns EventHandler
 * @constructor
 */
export default () => {

	let functions = [];

	const EVENT = {};

	EVENT.registerFunction = (...fn) => {
		functions.push(...fn);
		return EVENT;
	};

	EVENT.clearFunctions = () => {
		functions = [];
		return EVENT;
	};

	EVENT.fire = callback => {
		functions.forEach(callback ? callback : fn => fn());
		return EVENT;
	};

	return EVENT;
};

const events = {};

/**
 * Append a function to be executed when the given event is fired.
 * If the event has already been fired, the function will be executed immediately.
 * @param {string} eventName
 * @param {function} fn
 * @return void
 */
export const appendFunction = (eventName, fn) => {
	switch (typeof events[eventName]) {
		case 'boolean':
			fn();
			return;
		case 'undefined':
			events[eventName] = [];
	}
	events[eventName].push(fn);
};

/**
 * Fire the given event, executing all appended functions.
 * @param {string} eventName
 */
export const fire = (eventName) => {
	if (typeof events[eventName] === 'object') {
		events[eventName].forEach(fn => fn());
		events[eventName] = false;
	}
};

export default {
	appendFunction,
	fire
};

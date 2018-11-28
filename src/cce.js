/**
 * Simple element cursor plugin v1.1.2
 * 
 * Copyright (c) 2018 Levi Cole <me@thelevicole.com>
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
(function($) {
	'use strict';

	$.fn.cursorElement = function(options) {
		const $cursor = this;

		options = $.extend(true, {
			offsetX: 0,
			offsetY: 0,
			preserveCursor: false
		}, options);

		// Set default element styles
		$cursor.css({
			'position': 'fixed',
			'pointer-events': 'none',
			'z-index': 99999
		});

		// Hide default browser cursor
		if (!options.preserveCursor) {
			$('head').append( $('<style>', {
				text: '*, *:before, *:after { cursor: none; }'
			}) );
		}

		// Define global variables
		let mouse_x = 0,
			mouse_y = 0;

		let window_x = $(window).width(),
			window_y = $(window).height();

		let id		= '',
			node	= '';

		let visible	= true;

		// Update global variables on document events
		$(document).on('ready mousemove resize', function(event) {
			const $target = $(event.target);

			window_x	= $(window).width();
			window_y	= $(window).height();
			
			mouse_x		= event.clientX;
			mouse_y		= event.clientY;

			id			= $target.attr('id') || $target.closest('[id]').attr('id') || '';
			node		= $target.prop('nodeName').toLowerCase();
		});

		// Hide element if cursor leaves the document
		$(document).on('mouseleave mouseenter', function() {
			visible = event.type === 'mouseenter'; // Show when the mouse re-enters the page
		});

		// Hide element if cursor enters an iframe
		$('iframe').on('mouseenter mouseleave', function(event) {
			visible = event.type === 'mouseleave'; // Show when mouse leaves an iFrame
		});

		// Add click event to element
		$(document).on('mousedown mouseup', function(event) {
			let event_name = '';

			if (event.type === 'mousedown') {
				event_name = 'click';
			}

			$cursor.attr('data-event', event_name);
		});

		/**
		 * Tell the browser that we wish to perform an animation
		 * @see https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
		 */
		window.requestAnimationFrame(function animation() {

			// Convert cursor position into percentage
			const x_percent = (mouse_x + options.offsetX) / window_x * 100;
			const y_percent = (mouse_y + options.offsetY) / window_y * 100;

			if (visible) {
				$cursor.show();
			} else {
				$cursor.hide();
			}

			$cursor.css({
				top: y_percent + '%',
				left: x_percent + '%'
			});

			$cursor.attr('data-id', id);
			$cursor.attr('data-el', node);
			
			window.requestAnimationFrame(animation);

		});
	};
	
})(jQuery || window.jQuery);
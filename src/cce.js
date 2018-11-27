/**
 * Simple element cursor plugin v0.0.3
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

		$cursor.css({
			'position': 'fixed',
			'pointer-events': 'none',
			'z-index': 99999
		});

		if (!options.preserve_cursor) {
			$('head').append( $('<style>', {
				text: '*, *:before, *:after { cursor: none; }'
			}) );
		}

		let mouse_x = 0,
			mouse_y = 0;

		let window_x = $(window).width(),
			window_y = $(window).height();

		let id		= '',
			node	= '';

		const move = () => {
			// Convert cursor position into percentage
			const x_percent = (mouse_x + options.offset_x) / window_x * 100;
			const y_percent = (mouse_y + options.offset_y) / window_y * 100;

			$cursor.show().css({
				top: y_percent + '%',
				left: x_percent + '%'
			});

			$cursor.attr('data-id', id);
			$cursor.attr('data-el', node);
		};

		$(window).on('resize', function(event) {
			window_x = $(window).width();
			window_y = $(window).height();

			move();
		});

		$(document).on('ready mousemove resize', function(event) {
			const $target = $(event.target);

			mouse_x = event.clientX;
			mouse_y = event.clientY;

			id		= $target.attr('id') || $target.closest('[id]').attr('id') || '';
			node	= $target.prop('nodeName').toLowerCase();

			move();
		});

		$(document).on('mouseleave', function() {
			$cursor.hide();
		});

		$('iframe').on('mouseenter', function() {
			$cursor.hide();
		});

		$(document).on('mousedown mouseup', function(event) {
			let event_name = '';

			if (event.type === 'mousedown') {
				event_name = 'click';
			}

			$cursor.attr('data-event', event_name);
		});
	};
	
})(jQuery || window.jQuery);
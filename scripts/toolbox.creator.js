(function(Toolbox, $, undefined) {
	'use strict';

	Toolbox.Creator = (function() {
		function _Creator() {
			var _this = this;

			this.scan = function () {
				//var inputstring = "/([1-9]\\d*)?d([1-9]\\d*)\\s*([+-−]\\s*\\d+)?/i";
				var inputstring = "/mouse0270/i";
				var flags = inputstring.replace(/.*\/([gimy]*)$/, '$1');
				var pattern = inputstring.replace(new RegExp('^/(.*?)/' + flags + '$'), '$1');
				var regex = new RegExp(pattern, flags);

				$('body').unmark({
					className: 'tb-creator',
					done: function() {
						$('body').markRegExp(regex, {
							element: 'span',
							className: 'tb-creator',
							exclude: [
								'a.view-rules *',
								'div.tb-modal *',
								'.user-interactions-profile-nickname'
							],
							each: function(item) {
								var $item = $(item);

								if ($item.closest('.j-comment.comment.comment-normal').length >= 1) {
									$item.closest('.j-comment.comment.comment-normal').addClass('user-role-tb-creator');
									$item.closest('.j-comment.comment.comment-normal').find('.p-comment-statitem.forum-title').text('D&D Toolbox Creator')
								}
								//_this.bind($(item));
							}
						});
					}
				});

				Toolbox.Monsters.scan();
			};

			this.init = function () {
				_this.scan();
				return this;
			};

			return this.init();
		};
		return new _Creator();
	}());

}(window.Toolbox = window.Toolbox || {}, jQuery));
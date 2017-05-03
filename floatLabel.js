(function ($) {
    $.fn.floatLabels = function (options) {

        // Settings
        var self = this;
        var settings = $.extend({}, options);


        // Event Handlers
        function registerEventHandlers() {
            // self.on('input keyup change focus', 'input, textarea', function () {
            //     actions.swapLabels(this);
            // });
            self.on('focusin', 'input, textarea', function () {
                actions.addFocus(this);
            });

            self.on('focusout', 'input, textarea', function () {
                actions.removeFocus(this);
            })
        }


        // Actions
        var actions = {
            initialize: function() {
                self.each(function () {
                    var $this = $(this);
                    var $label = $this.children('label');
                    var $field = $this.find('input,textarea').first();

                    // var $selectFields = $this.find('');

                    if ($this.children().first().is('label')) {
                        $this.children().first().remove();
                        $this.append($label);
                    }

                    var placeholderText = ($field.attr('placeholder') && $field.attr('placeholder') != $label.text()) ? $field.attr('placeholder') : $label.text();

                    $label.data('placeholder-text', placeholderText);
                    $label.data('original-text', $label.text());

                    if ($field.val() == '') {
                        $field.addClass('empty')
                    }
                });
            },

            swapLabels: function (field) {
                console.log('swapLabels Called');
                var $field = $(field);
                var $label = $(field).siblings('label').first();
                var isEmpty = Boolean($field.val());
                if (isEmpty) {
                    $field.removeClass('empty');
                    $label.text($label.data('original-text'));
                }
                else {
                    $field.addClass('empty');
                    $label.text($label.data('placeholder-text'));
                }
            },

            addFocus: function (field) {
                console.log('addFocus Called');
                var $field = $(field);
                var $label = $(field).siblings('label').first();
                // var isEmpty = Boolean($field.val());
                $field.removeClass('empty');
                $label.text($label.data('original-text'));
            },

            removeFocus: function (field) {
                console.log('removeFocus Called');
                var $field = $(field);
                var $label = $(field).siblings('label').first();
                var isEmpty = Boolean($field.val());
                if(isEmpty){
                    $field.removeClass('empty');
                    $label.text($label.data('placeholder-text'));
                }else{
                     $field.addClass('empty');
                    $label.text($label.data('original-text'));
                }
            }
        };


        // Initialization
        function init() {
            registerEventHandlers();

            actions.initialize();
            self.each(function () {
                actions.swapLabels($(this).find('input,textarea').first());
            });
        }
        init();

        return this;
    };
})(jQuery);
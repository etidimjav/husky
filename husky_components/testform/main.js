/*
 * This file is part of the Sulu CMS.
 *
 * (c) MASSIVE ART WebServices GmbH
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 *
 * Name: testform
 * Options:
 *
 * Provided Events:
 *
 */

define([], function() {

    var defaults = {
    };

    return {

        initialize: function() {
            this.sandbox.logger.log('initialize', this);
            this.sandbox.logger.log(arguments);

            // extend default options
            this.options = this.sandbox.util.extend({}, defaults, this.options);

            this.render();
        },

        render: function() {
            require(['text!demos/aurajs/validation/template.html'], function(Template) {
                this.html(Template);
                this.sandbox.form.create('#form');

                this.bindDomEvents();
            }.bind(this));
        },

        bindDomEvents: function() {
            $('#check').on('click', function() {
                this.sandbox.form.validate('#form');
            }.bind(this));
            $('#set').on('click', function() {
                this.sandbox.form.setData('#form', this.data());
            }.bind(this));
            $('#get').on('click', function() {
                this.sandbox.logger.log('data', this.sandbox.form.getData('#form'));
            }.bind(this));
        },

        data: function() {
            return {
                firstName: 'Johannes',
                lastName: 'Wachter',
                birthDay: '2013-09-18T08:05:00+0200',
                wage: 1500,
                phones: [
                    {
                        type: {
                            id: 5,
                            name: "Privat"
                        },
                        phone: "+43 676 3596681"
                    },
                    {
                        type: {
                            id: 5,
                            name: "Mobil"
                        },
                        phone: "+43 664 4119649"
                    }
                ]
            };
        },

        template: function() {
            return [
                '<form id="form">',
                '<label>Name *</label>',
                '<input type="text" class="form-element" data-validate="true" data-required="true" />',
                '<div id="check" class="btn pointer">Check</div>',
                '</form>'
            ].join('');
        }

    }
});

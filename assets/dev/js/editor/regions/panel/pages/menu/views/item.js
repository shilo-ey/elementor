module.exports = Marionette.ItemView.extend( {
	template: '#tmpl-elementor-panel-menu-item',

	className: function() {
		return 'elementor-panel-menu-item elementor-panel-menu-item-' + this.model.get( 'name' );
	},

	triggers: {
		click: 'click',
	},
} );

/**
 * Custom js script loaded on Views edit screen (admin)
 *
 * @package   GravityView Advanced Filter extension
 * @license   GPL2+
 * @author    Katz Web Services, Inc.
 * @link      http://gravityview.co
 * @copyright Copyright 2014, Katz Web Services, Inc.
 *
 * @since 1.0.3
 */


(function( $ ) {

var gvAdvancedFilters = {

	init: function() {

		$('body').on( 'gravityview_form_change', gvAdvancedFilters.formChange );

		$('#entry_filters').removeClass('hide-if-js').gfFilterUI( gvAdvFilterVar.gformFieldFilters, gvAdvFilterVar.gformInitFilter, true );

	},

	formChange: function() {
		$('#entry_filters_warning').show();
		$('#entry_filters').html('');
	},


};



$(document).ready( function() {

	gvAdvancedFilters.init();

});


}(jQuery));

$(document).ready( function() {

	//Selector parent element required
	equalizeHeight('.view-practices .item-list > ul');

	function equalizeHeight(element) {
		//Get children of parent element
		var childElements = $(element).children();
		//Get greatest height of all child elements
		var maxHeight = 0;
		for (var i = 0; i < childElements.length; i++) {
			if ( $(childElements[i]).height() > maxHeight ) {
				maxHeight = $(childElements[i]).height();
			};
		};
		//Assign heigh to all child elements
		for (var i = 0; i < childElements.length; i++) {
			$(childElements[i]).css('height', maxHeight);					
		};
	}

});
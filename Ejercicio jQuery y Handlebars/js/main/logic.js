/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Intelligent Sense
 * Use is subject to license terms.
 * Filename: logic.js
 */

$(document).ready(function() {
 	getAjaxRequest('http://intelligentsense.com/trainings/twitterUser.json', 'GET', 'json')
	.done(function(data) {
		executeHandlebar(data);
		disappearButtonHide();
		hideDivImformationRankin();
		createEventBtnRankinShow();
		createEventBtnRankinHide();
	})
});

/** Return the request obtained by AJAX. */
function getAjaxRequest(pUrl, pType, pDataType) {
	return $.ajax({
		url: pUrl,
		type: pType,
		dataType: pDataType,
	});
};

/** Add the template of the handlebars to HTML */
function executeHandlebar(data) {
	var template = Handlebars.templates['frame'];

	document.getElementById('main').innerHTML += template(data);
};

/** Hide the hide button  */
function disappearButtonHide(pBtnHide) {
	$('.btn-Hide').hide();
};

/** Hide the div that contain the user information */
function hideDivImformationRankin() {
	$('.content-table-rankin').hide();
};

/** Create an event for the show button */
function createEventBtnRankinShow() {
	$('.btn-Show').click(function() {
		var parent = getParent(this, 'div');
		var sibling = getIdSiblings(parent, 'div');

		$(this).hide();
		$(this).next().show();

		setToggleDivInformation(sibling);
	});
};

/** Create an event for the hide button */
function createEventBtnRankinHide() {
	$('.btn-Hide').click(function() {
		var idBtnAux = getIdSiblings($(this), 'button');
		var parent = getParent(this, 'div');
		var sibling = getIdSiblings(parent, 'div');

		$(this).hide();
		$('#'+idBtnAux).show();
		
		setToggleDivInformation(sibling);
	});
};

/** Return the a tag's parent. */
function getParent(pThisElement, pTag) {
	return $(pThisElement).parent(pTag);
};

/** Return the id of the first sibling of a tag. */
function getIdSiblings(pThisElement, pTag) {
	return pThisElement.siblings(pTag)[0].id;
};

/** Show and hide the div of the user imformatio. */
function setToggleDivInformation(pSibling) {
	$('#'+pSibling).animate({width:'toggle'},1000);
};
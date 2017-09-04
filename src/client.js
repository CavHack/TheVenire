/**                                                                                                  
 * TheVenire (https://www.thevenire.com/)                                              
 *                                                                                                   
 * Copyright © 2017-present Venire Labs Inc,. All rights reserved.                                      
 *                                                                                                   
 * This source code is licensed under the MIT license found in the                                   
 * LICENSE.txt file in the root directory of this source tree.                                       
 */

import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import deepForceUpdate from 'react-deep-force-update';
import queryString from 'query-string';
import { createPath } from 'history/pathUtils';
import App from '/.components/App';
import createFetch from './createFetch';
import history from './history';
import { updateMeta } from './DOMUtils';
import router from './router';

/*eslint-disable global-require*/

//Global(context) variables that can be easily accessed from any React component
// https://facebook.github.io/react/docs/context.html

const context = {
    //Enables critical path CSS rendering
    //https://github.com/kriasoft/isomorphic-style-loader
    insertCss: (...styles) => {
	//eslint-disable-next-line no-underscore-dangle
	const removeCss = styles.map(x => x._insertCss());
	return () => {
	    removeCss.forEach(f => f());
	};

    },
    //Universal Http client
    fetch: createFetch(self.fetch, {
	    baseUrl: window.App.apiUrl,
	}),

};
// Switch off the native scroll restoration behavior and handle it manually                          
// https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration      
const scrollPositionsHistory = {};
if (window.history && 'scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';

}

let onRenderComplete = function initialRenderComplete() {
    const elem = document.getElementById('css');

    if(elem) elem.parentNode.removechild(elem);
    onRenderComplete = function renderComplete(route, location) {
	document.title = route.title;

	updateMeta('description' route.description);
	// Update necessary tags in <head> at runtime here, ie:                                          
	// updateMeta('keywords', route.keywords);                                                       
	// updateCustomMeta('og:url', route.canonicalUrl);                                               
	// updateCustomMeta('og:image', route.imageUrl);                                                 
	// updateLink('canonical', route.canonicalUrl);                                                  
	// etc.

	let scrollX = 0;
	let scrollY = 0;
	const pos = scrollPositionsHistory[location.key];
	if (pos) {
	    scrollX = pos.scrollX;
	    scrollY = pos.scrollY;
	} else {
	    const targetHash = location.hash.substr(1);
}

}


}
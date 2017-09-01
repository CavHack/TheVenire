/**                                                                                                  
 * TheVenire.com (https://www.thevenire.com/)                                              
 *                                                                                                   
 * Copyright © 2017-VENIRE LABS INC. All rights reserved.                                      
 *                                                                                                   
 * This source code is licensed under the MIT license found in the                                   
 * LICENSE.txt file in the root directory of this source tree.                                       
 */

import Router from 'universal-router';
import routes from '/routes';

export default new Router( routes, {

	resolveRoute(context, params) {

	    if(typeof context.route.load == 'function') {
		return context.route
		    .load()
		    .then(action => action.default(context, params));
	    }

	    if (typeof context.route.action == 'function') {

		return context.route.action(context, params);
	    }

	    return null;
	},

      });

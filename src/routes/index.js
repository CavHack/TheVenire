/**                                                                                                  
 * TheVenire (https://www.thevenire.com/)                                              
 *                                                                                                   
 * Copyright © 2017-Venire Labs Inc, All rights reserved.                                      
 *                                                                                                   
 * This source code is licensed under the MIT license found in the                                   
 * LICENSE.txt file in the root directory of this source tree.                                       
 */

/* eslint-disable global-require*/

//The top-level (parent) node

const routes = {

    path: '/',

    //Evaluate in partial order
    children: [

{
    path: '/',
    load: () => import(/* webpackChunkName: 'home' */ './home'),
 
},
{

    path: '/contact',
    load: () => import(/* webpackChunkName: 'contact'*/ './contact'),

},
{
    path: '/login',
    load: () => import(/* webpackChunkName: 'login'*/ './login'),
},
{
    path: '/register',
    load: () => import(/* webpackChunkName: 'register'*/ './login'),

	},
{

    path: '/admin',
    load: () => import(/* webpackChunkName: 'admin' */ './admin'),
	}

],

	async action( { next } ) {

	//Execute each child route until one of them return the result
	const route = await next();

	//Provide default values for title, description, etc
	route.title = '${route.title || 'Untitled Page'} - www.thevenire.com';
	route.description = route.description || '';

	return route;

	},



	};

//Error page default
if (__DEV__) {

    routes.children.unshift({
	    path: '/error',
		action: require('./error').default,

		});
}

export default routes;
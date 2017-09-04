/**                                                                                                                    
 * The Venire  (https://www.thevenire.com/)                                                                            
 *                                                                                                                     
 * Copyright © 2017-present Venire Labs Inc,. All rights reserved.                                                     
 *                                                                                                                     
 * This source code is licensed under the MIT license found in the                                                     
 * LICENSE.txt file in the root directory of this source tree.                                                         
 */

/*  @flow  */

type fetch = (url: string, options: ?any ) => Promise<any>;

type Options = {
    baseUrl: string,
    cookie?: string,

    
};

/**                                                                                                  
 * Creates a wrapper function around the HTML5 Fetch API that provides                               
 * default arguments to fetch(...) and is intended to reduce the amount                              
 * of boilerplate code in the application.                                                           
 * https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch                                  
 */

function createFetch(fetch: Fetch, { baseUrl, cookie }: Options) {
    //Note: Tweak the default options to suite your application needs
    const defaults = {

	method: 'POST', // this handles the GraphQL propagation of content
	mode: baseUrl ? 'cors' : 'same-origin', 
	credentials: baseUrl ? 'include' : 'same-origin',
	headers: {

	    Accept: 'application/json',
	    'Content-Type' : 'application/json',
	    ...(cookie ? { Cookie: cookie } : null),
	},

    };

    return (url: string, options: any) =>
	url.startsWith('/graphql') || url.startsWith('/api')
	? fetch (`${baseUrl}${url}`, {
		...defaults,
		...options,
		headers: {
		    ...defaults.headers,
		    ...(options && options.headers),
		},
	    })
	: fetch (url, options);


}

export default createFetch;
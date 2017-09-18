/**                                                                                                  
 * The Venire (https://www.thevenire.com/)                                                            
 *                                                                                                   
 * Copyright © 2017-Present TheVenire Venire Labs Inc,. All rights reserved.                         \
                                                                                                      
 *                                                                                                   
 * This source code is licensed under the MIT license found in the                                   
 * LICENSE.txt file in the root directory of this source tree.                                       
 */

import webpack from 'webpack';
import webpackConfig from './webpack.config';

/**                                                                                                  
 * Creates application bundles from the source files.                                                
 */

function bundle() {
    return new Promise((resolve, reject) => {

	    webpack(webpackConfig).run((resolve, reject) => {
		    
		    if (err) {
			return reject(err);
		    }

		    console.info(stats.toString(webpackConfig[0].stats));
		    return resolve();

		});


	});

}

export default bundle;
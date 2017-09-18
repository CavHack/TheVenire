/* Copyright © 2017-Present TheVenire Venire Labs Inc,. All rights reserved.                                                                                                               
 *                                                                                                   
 * This source code is licensed under the MIT license found in the                                   
 * LICENSE.txt file in the root directory of this source tree.                                       
 */


import { cleanDir } from './lib/fs';

/**                                                                                                  
 * Cleans up the output (build) directory.                                                           
 */
function clean() {
    return Promise.all([
			cleanDir('build/*', {
				nosort: true,
				    dot: true,
				    ignore: ['build/.git'],


				    }),


			]);


}

export default clean;
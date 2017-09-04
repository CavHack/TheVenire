/**                                                                                                  
 * The Venire (https://www.thevenire.com/)                                              
 *                                                                                                   
 * Copyright © 2017-present Venire Labs Inc,. All rights reserved.                                      
 *                                                                                                   
 * This source code is licensed under the MIT license found in the                                   
 * LICENSE.txt file in the root directory of this source tree.                                       
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
    static propTypes = { 
	news: PropTypes.arrayOf(
				PropTypes.shape({

					title: PropTypes.string.isRequired,
					link: PropTypes.string.isRequired,
					content: PropTypes.string,
				    }),
				).isRequired,

    };

    render() {

	return (
		<div className={s.root}>
		<div className={s.container}>

)
    }

}






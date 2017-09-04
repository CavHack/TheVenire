/**                                                                                                  
 * TheVenire (https://www.thevenire.com/)                                              
 *                                                                                                   
 * Copyright © 2017-present Venire Labs Inc.  All rights reserved.                                      
 *                                                                                                   
 * This source code is licensed under the MIT license found in the                                   
 * LICENSE.txt file in the root directory of this source tree.                                       
 */

import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressJwt, {UnauthorizedError as Jwt401Error } from 'express-jwt';
import expressGraphQL from 'express-graphql';
import  jwt from 'jsonwebtoken';
import fetch from 'node-fetch';
import React from 'react';
import ReactDOM from 'react-dom/server';
import PrettyError from 'pretty-error';
import App from './components/App';
import Html from './components/Html';
import { ErrorPageWithoutStyle } from './routes/error/ErrorPage';
import errorPageStyle from './routes/error/ErrorPage.css';
import createFetch from './createFetch';







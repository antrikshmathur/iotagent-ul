/*
 * Copyright 2016 Telefonica Investigación y Desarrollo, S.A.U
 *
 * This file is part of iotagent-ul
 *
 * iotagent-ul is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * iotagent-ul is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with iotagent-ul.
 * If not, seehttp://www.gnu.org/licenses/.
 *
 * For those usages not covered by the GNU Affero General Public License
 * please contact with::[iot_support@tid.es]
 */

'use strict';

module.exports = {
    ParseError: function(errorMsg) {
        this.name = 'PARSE_ERROR';
        this.message = 'There was a syntax error in the Ultralight request: ' + errorMsg;
        this.code = 400;
    },
    ConfigurationError: function(errorMsg) {
        this.name = 'CONFIGURATION_ERROR';
        this.message = 'There was an error in the configuration file, starting the agent: ' + errorMsg;
        this.code = 501;
    },
    GroupNotFound: function(service, subservice) {
        this.name = 'GROUP_NOT_FOUND';
        this.message = 'Group not found for service [' + service + '] and subservice [' + subservice + ']';
        this.code = 404;
    },
    MandatoryParamsNotFound: function(paramList) {
        this.name = 'MANDATORY_PARAMS_NOT_FOUND';
        this.message = 'Some of the mandatory params weren\'t found in the request: ' + JSON.stringify(paramList);
        this.code = 400;
    }
};
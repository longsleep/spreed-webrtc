/*
 * Spreed WebRTC.
 * Copyright (C) 2013-2014 struktur AG
 *
 * This file is part of Spreed WebRTC.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

"use strict";
define(["jquery", "angular"], function($, angular) {

	// spreedWebRtc
	return ["$window", function($window) {

		var controller = ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {

			$scope.defaults = {
				displayName: null,
				buddyPicture: null,
				message: null,
				settings: {
					videoQuality: "high",
					sendStereo: false,
					maxFrameRate: 20,
					defaultRoom: "",
					language: "",
					audioRenderToAssociatedSkin: true,
					videoCpuOveruseDetection: true,
					experimental: {
						enabled: false,
						audioEchoCancellation2: true,
						audioAutoGainControl2: true,
						audioNoiseSuppression2: true,
						audioTypingNoiseDetection: true,
						videoLeakyBucket: true,
						videoNoiseReduction: false
					}
				}
			};
			$scope.master = angular.copy($scope.defaults);

			$scope.update = function(user) {
				$scope.master = angular.copy(user);
				$scope.$broadcast("updated");
			};

			$scope.reset = function() {
				$scope.user = angular.copy($scope.master);
			};
			$scope.reset(); // Call once for bootstrap.

			// Disable drag and drop.
			$($window).on("dragover dragenter drop", function(event) {
				event.preventDefault();
			});

		}];

		return {
			restrict: 'A',
			controller: controller
		};

	}];

});

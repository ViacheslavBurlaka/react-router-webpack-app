import angular from 'angular';
import { angular2react } from 'angular2react';
import './Profile.scss';

const profileTemplate = `
    <div ng-controller="ProfileController">
      <h1>
         {{profile.name.first | uppercase}} {{profile.name.last | uppercase}}
      </h1>
      <div class="Profile">
        <div class="Profile__col">
          <img ng-src="{{profile.picture.large}}" />
        </div>
        <div class="Profile__col">
            <div class="Profile__row">
              <span>ID:</span> <span ng-bind="profile.id.name"/> <span ng-bind="profile.id.value"/>
            </div>
          <div class="Profile__row">
            <span>Gender:</span>
            <span ng-bind="profile.gender"/>
          </div>
          <div class="Profile__row">
            <span>Email:</span>
            <span ng-bind="profile.email"/>
          </div>
          <div class="Profile__row">
            <span>Nationality:</span>
            <span ng-bind="profile.nat"/>
          </div>
          <div class="Profile__row">
            <span>Address:</span>
            <span ng-bind="profile.location.street.name"/>,
            <span ng-bind="profile.location.street.number"/>,
            <span ng-bind="profile.location.city"/>,
            <span ng-bind="profile.location.state"/>,
            <span ng-bind="profile.location.country"/>,
            <span ng-bind="profile.location.postcode"/>
          </div>
          <div class="Profile__row">
            <span>Birth:</span>
            <span ng-bind="profile.dob.date | date:'MM/dd/yyyy'"/>
          </div>
          <div class="Profile__row">
            <span>Registered:</span>
            <span ng-bind="profile.registered.date | date:'MM/dd/yyyy'"/>
          </div>
          <div class="Profile__row">
            <span>Age:</span>
            <span ng-bind="profile.dob.age"/>
          </div>
          <div class="Profile__row">
            <span>Phone:</span>
            <span ng-bind="profile.phone"/>

          </div>
          <div class="Profile__row">
            <a class="Btn" ng-href="/persons/">
              Go back
            </a>
          </div>
        </div>
      </div>
    </div>

  `;

const ProfileComponent = {
  bindings: {
    profile: '<',
  },
  template: profileTemplate,
};

// Define the `Profile` module
let $injector;
angular
  .module('Profile', [])
  .component('profileComponent', ProfileComponent)
  .controller('ProfileController', function ProfileController($scope) {
    $scope.profile = $scope.$ctrl.profile;
  })
  .run([
    '$injector',
    function (_$injector) {
      $injector = _$injector;
    },
  ]);

angular.bootstrap(document.createElement('div'), ['Profile']);

/**
 * Convert angular module to react
 * After that we can use it as React component
 */
const AngularProfile = angular2react('profileComponent', ProfileComponent, $injector);

export default AngularProfile;

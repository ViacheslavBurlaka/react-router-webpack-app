import angular from 'angular';
import { angular2react } from 'angular2react';
import './../components/Profile/Profile.scss';

const profileTemplate = `
    <div ng-controller="ProfileController">
      <h1>
         {{profile.name.first}} {{profile.name.last}}
      </h1>
      <div class="Profile">
        <div class="Profile__col">
          <img src={{profile.picture.large}} alt={{profile.name.first}} />
        </div>
        <div class="Profile__col">
            <div class="Profile__row">
              <span>ID:</span> {{profile.id.name}}, {{profile.id.value}}
            </div>
          <div class="Profile__row">
            <span>Gender:</span> {{profile.gender}}
          </div>
          <div class="Profile__row">
            <span>Email:</span> {{profile.email}}
          </div>
          <div class="Profile__row">
            <span>Nationality:</span> {{profile.nat}}
          </div>
          <div class="Profile__row">
            <span>Address:</span> {{profile.location.street.name}}, {{profile.location.street.number}}
            {{profile.location.city}}, {{profile.location.state}}, {{profile.location.country}}, {{profile.location.postcode}}
          </div>
          <div class="Profile__row">
            <span>Birth:</span> {{profile.dob.date}}
          </div>
          <div class="Profile__row">
            <span>Registered:</span> {{profile.registered.date}}
          </div>
          <div class="Profile__row">
            <span>Age:</span> {{profile.dob.age}}
          </div>
          <div class="Profile__row">
            <span>Phone:</span> {{profile.phone}}
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

'use strict';

/**
 * @ngdoc function
 * @name monsterManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the monsterManagerApp
 */
angular.module('monsterManagerApp')
  .controller('MainCtrl', function( $scope,$cookies,$location,$window, currentScenario, monster ) {
    this.monster=monster;
    window.controller=$scope;
    $scope.monster = monster;
    $scope.quickPreviewIndex='all';
    $scope.activeMonster='';
    $scope.activePanel=-1;

    var csData = $scope.currentScenario=currentScenario.load();

    $scope.scenarioLevel=function(){
      return currentScenario.getLevel();
    };

    $scope.isBoss=function(name){
      return !!monster.details[name].boss;
    };

    $scope.getTimes=function(n){
      return new Array(n);
    };

    $scope.setScenario=function(lvl){
      currentScenario.data.level = currentScenario.getLevel()+lvl;
      currentScenario.save();
      $location.url('/play');
    };

    $scope.normalizeMonsterName = function(name){
      return (name||'').replace(/-/g,' ');
    };

    $scope.activeMonsterUpdated=function(m){
      $scope.quickPreviewIndex='all';
      $scope.activePanel=m;
    };
  });

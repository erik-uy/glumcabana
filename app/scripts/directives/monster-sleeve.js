'use strict';

/**
 * @ngdoc directive
 * @name monsterManagerApp.directive:monsterSleeve
 * @description
 * # monsterSleeve
 */
angular.module('monsterManagerApp')
  .directive('monsterSleeve', function ($window, $filter, currentScenario, monster) {
    return {
      templateUrl: '/partials/monster-sleeve.html',
      restrict: 'E',
      scope: {
          monsterName: '=',
          scenarioLevel:'=',
          monsterInstances: '=?',
          quickPreviewIndex:'=?',
          viewMode:'=?',
          isGroupSelected:'=?'
      },
      link: function postLink(scope, element, attrs) {
        scope.monster=monster.details[scope.monsterName];
        scope.monsterLevelModifier=0;
        scope.getMonsterEffectiveLevel=function(){
          return scope.monsterLevelModifier + scope.scenarioLevel;
        };

        
        scope.resetMonsterGroup=function(){
          scope.instances = scope.monsterInstances = {};
          for(var i=1; i<(scope.monster.boss?3:11); i++){
            scope.resetInstance(i);
          };
        };
        scope.resetInstance=function(i){
          scope.instances[i]={
            id:i,
            damageTaken:0,
            state:0,
            spawnType:0,
            muddle:0,
            stun:0,
            wound:0,
            disarm:0,
            poison:0,
            invisible:0,
            strengthen:0,
            immobilize:0
          };
        };
        scope.resetMonsterGroup();

        scope.isDesktop = function(){
          return $window.innerWidth>700;
        };

        scope.incrementMonsterLevelModifier=function(){
          scope.monster.monsterLevelModifier = ++scope.monsterLevelModifier;
        };
        scope.decrementMonsterLevelModifier=function(){
          scope.monster.monsterLevelModifier = --scope.monsterLevelModifier;
        };

        scope.incrementDamage=function(instance){
          if (instance.state===0) return;
          instance.damageTaken++;
        };
        scope.decrementDamage=function(instance){
          if (instance.state===0) return;
          if (instance.damageTaken>0){
            --instance.damageTaken;
          }
        };

        scope.cycleState=function(instance){
          instance.state = (instance.state==null) ? 0 : (instance.state +1) % (scope.monster.boss?2 : 3 );
          // if (instance.state===0){
          //   instance.damageTaken=0;
          //   instance.muddle=0;
          //   instance.stunn=0;
          //   instance.wound=0;
          //   instance.disarm=0;
          //   instance.poison=0;
          //   instance.invisible=0;
          //   instance.strengthen=0;
          //   instance.immobilize=0;
          // }
        };

        scope.cycleSpawnType=function(instance){
          instance.spawnType = instance.spawnType==null? 0 : ++instance.spawnType % (scope.monster.boss?2:3);
        };

        var stateNames=['Dead','Normal', 'Elite'];
        scope.getStateName = function(id){
          return stateNames[id];
        };

        var spawnTypes=['Revealed','Summoned', 'Spawned'];
        scope.getSpawnType = function(id){
          return spawnTypes[id];
        };
        scope.getIcon = function(template){
          return '<icon tmpl="\'%stun%\'" type="\'status-effects\'"></icon>';
        };

        function notDeadAndFiltered(instance){
          return scope.viewMode?true:instance.state>0;
        }

        scope.getInstances=function(){
          var r=Object.values(  scope.instances );
          return r;
        }

        scope.instanceSort=function(){
          console.log(arguments)
        }

        scope.orderBySortLogic=function(){
          return scope.viewMode?'id': ['-state','id'];
        }

        scope.isMonsterGroupDead = function(){
          return Object.values(scope.instances).filter(function(i){return i.state>0;}).length<1;
        }

        scope.shouldInstanceBeVisible=function(instance){
          var r=( scope.viewMode && (
                scope.quickPreviewIndex==instance.id ||
                scope.quickPreviewIndex==='all'
            ))||
            (!scope.viewMode && (
              scope.quickPreviewIndex==instance.id ||
              (scope.quickPreviewIndex==='all' && instance.state>0)||
              (scope.quickPreviewIndex==='all' && scope.isMonsterGroupDead())
            ))
          ;
          return r;
        }
      }
    };
  });

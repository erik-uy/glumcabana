'use strict';

/**
 * @ngdoc service
 * @name monsterManagerApp.currentScenario
 * @description
 * # currentScenario
 * Service in the monsterManagerApp.
 */
angular.module('monsterManagerApp')
  .service('currentScenario', function ($cookies) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    window.$cookies=$cookies;
    return {
      data:{
        players:{0:1},
        selectedMonsters:[]
      },
      load:function(){
        var tmpCurrentScenario={};
        try{
          tmpCurrentScenario = JSON.parse(decodeURIComponent($cookies.get('data')));
        }catch(e){
          tmpCurrentScenario = {
            players:{0:1},
            selectedMonsters:[]
          };
        }
        window.currentScenario = tmpCurrentScenario;
        return this.data=tmpCurrentScenario;
      },
      save:function(){
        $cookies.put('data',encodeURIComponent(JSON.stringify(this.data)));
      },
      reset:function(){
        $cookies.remove('data');
      },
      getLevel:function(){
        var players=this.data.players;
        var total=0;
        var count=0;
        angular.forEach(players, function(value,key){
          if ( !!players[key] && players[key]>0){
            count++;
            total+=players[key];
          }
        });

        return Math.ceil((total/count)/2);
      }
    }
  });

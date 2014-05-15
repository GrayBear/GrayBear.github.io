fight.controller('fightController', ['$scope', function ($scope) {
    
    var fights = [];

    fights.push({ about: 'arrays of objects', description: 'whats the quickest way to define an array of objects', url: 'http://jsperf.com/arraycreationorpusher', result: '@15/05/2014 : Chrome : frequencies.push({}), IPhone: var frequencies = [{},{}]', conclusion: 'If your only targeting IPhone create it if not push it to the array' });

    fights.push({ about: 'Looping through arrays', description: 'whats the quickest way of looping through an array', url: 'http://jsperf.com/spinningloopswhatsfaster/2', result: '@15/05/2014 : chrome makes for the best option', conclusion: 'For is the winner' })


    fights.push({ about: 'incrementing numbers', description: 'Whats the best way to increment i', url: 'http://jsperf.com/howtogoupi', result: '@15/05/2014 : suprisingly i++ is slower, but the ops/sec involved are HUGE, so why get hung up on this one.', conclusion: 'i=i+1' })

    $scope.fights = fights;

}]);
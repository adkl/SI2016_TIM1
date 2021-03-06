(function () {
    'use strict';

    app.factory('advertService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

        var servicebase = ngAuthSettings.apiServiceBaseUri;

        var advertServiceFactory = {};

        var _getAdverts = function () {
            return $http.get(servicebase + '/advert/all')
                .then(function (results) {
                    return results;
                });
        };
        advertServiceFactory.getAdverts = _getAdverts;

        var _getAdvertsByCategory = function (categoryId) {
            var config={params:{categoryId:categoryId}};
            return $http.get(servicebase + '/advert/category', config)
                .then(function (results) {
                    return results;
                });
        };
        advertServiceFactory.getAdvertsByCategory = _getAdvertsByCategory;

        var _getAdvertsByOwner = function (ownerId) {
            return $http.get(servicebase + '/advert/owner/'+ownerId)
                .then(function (results) {
                    return results;
                });
        };
        advertServiceFactory.getAdvertsByOwner = _getAdvertsByOwner;

        var _getAdvertsWithReport = function () {
            return $http.get(servicebase + '/advert/with_report')
                        .then(function (results) {
                            return results;
                        });
        };
        advertServiceFactory.getAdvertsWithReport = _getAdvertsWithReport;

        var _getAdvertReports = function (id) {
            return $http.get(servicebase + '/advert/with_report/' + id + '/details')
                        .then(function (results) {
                            return results;
                        });
        };
        advertServiceFactory.getAllReports = _getAdvertReports;

        var _getOneReport = function (id) {
            return $http.get(servicebase + '/advert/with_report/details/' + id )
                        .then(function (results) {
                            return results;
                        });
        };
        advertServiceFactory.findOneReport = _getOneReport;

        var _getAdvertDetails = function (id) {
            return $http.get(servicebase + '/advert/details/' + id)
                .then(function (results) {
                    return results;
                });
        };
        advertServiceFactory.getAdvertDetails = _getAdvertDetails;

        var _deleteReport = function (id) {

            return $http.get(servicebase + '/advert/with_report/'+id+'/details/delete')
                        .then(function(results) {
                            return results;
                        });
        };

        advertServiceFactory.deleteReport=_deleteReport;

        // register
        var _registerAdvert = function (advert) {
            return $http.post(servicebase+'/advert/create', advert)
                .then(function (results) {
                    return results;
                });
        };
        advertServiceFactory.registerAdvert = _registerAdvert;

        // update
        var _updateAdvert = function (advert) {
            return $http.post(servicebase+'/advert/update', advert)
                .then(function (results) {
                    return results;
                });
        };
        advertServiceFactory.updateAdvert = _updateAdvert;

        //delete
        var _deleteAdvert = function (id) {
            return $http.delete(servicebase+'/advert/delete/' + id)
                .then(function (results) {
                    return results;
                });
        };
        advertServiceFactory.deleteAdvert = _deleteAdvert;

        var _changePriority = function (id) {
            return $http.post(servicebase + '/advert/set_priority?id=' + id)
                .then(function (results) {
                    return results;
                });
        };
        advertServiceFactory.changePriority = _changePriority;


        var _getSubscrins = function (id) {

            return $http.get(servicebase + '/advert/'+id+'/subscriptions')
                        .then(function(results) {
                            return results;
                        });
        };

        advertServiceFactory.getSubscriptionsForAdvert=_getSubscrins;

        var _getSubscrinsDetails = function (id, s_id) {

            return $http.get(servicebase + '/advert/'+id+'/subscriptions/'+s_id)
                        .then(function(results) {
                            return results;
                        });
        };

        advertServiceFactory.getSubscriptionDetails=_getSubscrinsDetails;

        var _deleteSubs = function (id, s_id) {

            return $http.get(servicebase + '/advert/'+id+'/subscriptions/'+s_id+'/delete')
                        .then(function(results) {
                            return results;
                        });
        };

        advertServiceFactory.deleteSubscription=_deleteSubs;

        var _postSubscription = function (newSubscription) {

              return $http.post(servicebase + '/advert/subscribe', newSubscription)
                          .then(function (results) {
                              return results;
                          });
        }
        advertServiceFactory.subscribe = _postSubscription;

        var _getTitleOwner = function () {
              return $http.get(servicebase + '/advert/subscribe')
                          .then(function(results) {
                              return results;
                          });
        };
        advertServiceFactory.getTitleOwner = _getTitleOwner;

        var _postReport = function (newReport) {

              return $http.post(servicebase + '/advert/report', newReport)
                          .then(function (results) {
                              return results;
                          });
        }
        advertServiceFactory.report = _postReport;

        var _checkInAdvert = function(info){
          var info1 = {
            personId: 1,
            advertId: 2,
            message: "ovo sam poslao"
          };

          var info2 = {
            firstName: "Ime test5555",
            lastName: "Prezime test1",
            mail: "test1@gmail.com",
            phone: "0000000",
            advertId: 1,
            message: "djesi brate huehuehue"
          }

          return $http.post(servicebase + '/advert/check_in', info)
                      .then(function(res){
                        console.log(res);
                        return res;
                      });
        }
        advertServiceFactory.checkIn = _checkInAdvert;

         var createInappropriateAdvertReport = function(info){
            var info1 = {
                username: "user2",
                advertId: 1,
                message: "ovo je poruka",
                isGuest: false,
            };
            console.log(info);
            return $http.post(servicebase + '/advert/inappropriateAdvertReport', info).then(function(res){
                console.log(res);
            });
        }
        advertServiceFactory.createInappropriateAdvertReport = createInappropriateAdvertReport;


        return advertServiceFactory;
    }]);

}());

/**
 * Created by SAKH on 12-07-2017.
 */
var appCache = window.applicationCache;

switch(appCache.status){
    case appCache.UPDATEREADY:  // UPDATEREADY == 4
        location.reload();
}
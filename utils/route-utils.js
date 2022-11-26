import {google_map_api_key} from '../environement'

export const getRouteFromGoogle = async (originPosition, destinationPosition, wayPoints = [], travelMode ="DRIVING") => {
    const latOrigin = originPosition.latitude.toFixed(6);
    const longOrigin = originPosition.longitude.toFixed(6);
    const latDestination = destinationPosition.latitude.toFixed(6)
    const longDestination = destinationPosition.longitude.toFixed(6)

    const google_directions_url = "https://maps.googleapis.com/maps/api/directions/json?origin="
    const api_key = google_map_api_key
    console.log("🚀 ~ file: route-utils.js ~ line 11 ~ getRouteFromGoogle ~ api_key", api_key)
    let finalGoogleUrl = `${google_directions_url}${latOrigin.toString()},${longOrigin.toString()}&destination=${latDestination.toString()},${longDestination.toString()}&key=${api_key}&mode=${travelMode}`
    
    if(wayPoints.length > 0){
        let wayPointsString =""

        for (let index = 0; index < wayPoints.length; index++) {
            if(index === 0) {
                wayPointsString +="via:" + wayPoints[index].latitude + "%2C" + wayPoints[index].longitude;
            }
            else {
                wayPointsString +="&7Cvia:" + wayPoints[index].latitude + "%2C" + wayPoints[index].longitude;
            }
            finalGoogleUrl += `&waypoints=${wayPointsString}`
        }
    }

    return await fetch(finalGoogleUrl, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const convertRoutePathToLatLng = (routePath) => {
    return routePath.map((routeItem) => {
        return {
            latitude: routeItem[0],
            longitude: routeItem[1]
        }
    })
}
# Geolocation Tests

A number of tests to measure the performance of the HTML5 geolocation API.

These tests were created to provide data for the geolocation library,
[geoid](https://github.com/loganfranken/geoid).

To perform these tests on your own device, visit the
[GitHub page](http://loganfranken.github.io/GeolocationTests).

Each test displays the latitude, longitude, accuracy, and amount of time it
took to retrieve the information (in milliseconds).

## Tests

### getCurrentPosition

[Open Test](http://loganfranken.github.io/GeolocationTests/get-current-position.html)

A single call to `getCurrentPosition` with `enableHighAccuracy`
set to `true` and `maximumAge` set to `0`.

### watchPosition

[Open Test](http://loganfranken.github.io/GeolocationTests/watch-position.html)

A call to `watchPosition` with `enableHighAccuracy`
set to `true` and `maximumAge` set to `0`.

### watchPosition with getCurrentPosition

[Open Test](http://loganfranken.github.io/GeolocationTests/watch-position-with-get-current-position.html)

A call to `getCurrentPosition` with `enableHighAccuracy` set to `false` and
`maximumAge` set to `Infinity`, **followed by** a call to `watchPosition`
with `enableHighAccuracy` set to `true` and `maximumAge` set to `0`.

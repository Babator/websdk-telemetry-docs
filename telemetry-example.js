if (Babator && Babator.isLoaded) {
  Babator.telemetry.on('start', function (event, data) {
    console.log('[Video Start] Data: ' + JSON.stringify(data, null, 2));
  });
  
  Babator.telemetry.on('autoStart', function (event, data) {
    console.log('[Video Auto Start] Data: ' + JSON.stringify(data, null, 2));
  });
  
  Babator.telemetry.on('autoFirst', function (event, data) {
    console.log('[Video Auto First] Data: ' + JSON.stringify(data, null, 2));
  });
  
  Babator.telemetry.on('recommendationClick', function (event, data) {
    console.log('[Video Recommendation Clicked] Data: ' + JSON.stringify(data, null, 2));
  });
  
  Babator.telemetry.on('autoPlay', function (event, data) {
    console.log('[Video Auto Play] Data: ' + JSON.stringify(data, null, 2));
  });
}

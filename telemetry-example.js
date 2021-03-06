;(function () {
  function onBabatorReady(callback) {
    if (window.Babator && window.Babator.isReady) {
      callback();
    } else {
      window.addEventListener('babator-ready', function babatorReadyListener() {
        window.removeEventListener('babator-ready', babatorReadyListener);
        callback();
      });
    }
  }

  onBabatorReady(function () {
    Babator.telemetry.on('start', function (event, data) {
      console.log('[Video Start] Data: ' + JSON.stringify(data, null, 2));
    });

    Babator.telemetry.on('request', function (event, data) {
      console.log('[Video Request] Data: ' + JSON.stringify(data, null, 2));
    });
  });
})();

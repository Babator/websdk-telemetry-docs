# Babator Telemetry API
Exposes an API to be used by clients for custom telemetry reporting.
See `telemetry-example.js` for full example of how to register to Babator's telemetry events.

## Usage

### Get Available Telemetry Events
`Babator.telemetry.availableEvents;`

### Listen for a specific event
`Babator.telemetry.on('start', function (event, data) {
	console.log('[Video Start] Data: ' + JSON.stringify(data, null, 2));
});`

### Listen for all events
`Babator.telemetry.on('*', function (event, data) {
	console.log('[Event: ' + event, '] Data: ' + JSON.stringify(data, null, 2));
});`

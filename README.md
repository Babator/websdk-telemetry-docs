# Babator Telemetry API
Exposes an API to be used by clients for custom telemetry reporting.
See `telemetry-example.js` for full example of how to register to Babator's telemetry events.

## Usage

### Get Available Telemetry Events
```javascript
Babator.telemetry.availableEvents;
```

### Listen for a Specific Event
```javascript
Babator.telemetry.on('event-tag', function (event, data) {
  console.log('Data: ' + JSON.stringify(data, null, 2));
});
```

### Listen for All Events
```javascript
Babator.telemetry.on('*', function (event, data) {
  console.log('[Event: ' + event, '] Data: ' + JSON.stringify(data, null, 2));
});
```

## Telemetry Events
* [Start](#start)
* [Auto Start](#auto-start)
* [Auto First](#auto-first)
* [Recommendation Click](#recommendation-click)
* [Auto Play](#auto-play)

### Start
**_Event Tag: 'start'_**  
Fired when a video starts.  
Example:
```javascript 
Babator.telemetry.on('start', function (event, data) { ... });
```

#### Data: 
```javascript
{
  // Full URL of the video.
  videoUrl: String,
  // Custom video ID from metadata, if present; otherwise, same as videoUrl.   
  videoId: String,
  // True, if video started as result of Babator services; otherwise, false.
  byBabator: Boolean,
  // True, if video is played in In-Read mode; otherwise, false.
  inRead: Boolean
}
```

### Auto Start
**_Event Tag: 'autoStart'_**  
Fired when a video is started automatically by Babator. Replaces *Start* event.  
Example:
```javascript 
Babator.telemetry.on('autoStart', function (event, data) { ... });
```

#### Data: 
```javascript
{
  // Full URL of the video.
  videoUrl: String,
  // Custom video ID from metadata, if present; otherwise, same as videoUrl.   
  videoId: String
}
```

### Auto First
**_Event Tag: 'autoFirst'_**  
Fired when an In-Read video is started automatically by Babator. Replaces *Start* event.  
Example:
```javascript 
Babator.telemetry.on('autoFirst', function (event, data) { ... });
```

#### Data: 
```javascript
{
  // Full URL of the video.
  videoUrl: String,
  // Custom video ID from metadata, if present; otherwise, same as videoUrl.   
  videoId: String
}
```

### Auto Play
**_Event Tag: 'autoPlay'_**  
Fired when the next video is started automatically by Babator.  
Example:
```javascript 
Babator.telemetry.on('autoPlay', function (event, data) { ... });
```

#### Data: 
```javascript
{
  // Full URL of the video to be played next.
  videoUrl: String,
  // Custom video ID of the video to be played next.
  videoId: String
}
```

### Recommendation Click
**_Event Tag: 'recommendationClick'_**  
Fired when the user clicks on a Babator video recommendation.  
Example:
```javascript 
Babator.telemetry.on('recommendationClick', function (event, data) { ... });
```

#### Data: 
```javascript
{
  // Full URL of the video selected by the user.
  videoUrl: String,
  // Custom video ID of the video selected by the user.
  videoId: String
}
```

### Remove All Event Listeners
```javascript
Babator.telemetry.reset();
```

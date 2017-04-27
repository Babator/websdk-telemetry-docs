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

### Remove All Event Listeners
```javascript
Babator.telemetry.reset();
```

## Telemetry Events
* [Request](#request)
* [Video Load](#video-load)
* [Start](#start)
* [Ad Start](#ad-start)
* [Ad Complete](#ad-complete)
* [Content Start](#content-start)
* [Video Pause](#video-pause)
* [Video View 25% Checkpoint](#video-view-25-checkpoint)
* [Video View 50% Checkpoint](#video-view-50-checkpoint)
* [Video View 75% Checkpoint](#video-view-75-checkpoint)
* [Video Complete](#video-complete)


### Request
**_Event Tags: 'request', 'videoRequest'_**

Fired when the next video is requested from Babator recommendations.

#### Data:
```javascript
{
  // True, when video started by Babator; otherwise, false.
  isAutoPlay: Boolean,
  // True, if video started as result of Babator services; otherwise, false.
  byBabator: Boolean,
  // Full URL of the video to be played next.
  videoUrl: String,
  // Custom video ID of the video to be played next.
  videoId: String,
  // True, if video is played in In-Read mode; otherwise, false.
  inRead: Boolean,
  // Type of the player
  playerType: String,
  // Sequential number of the video being played. Starts at 1.
  videoNumber: Number
}
```

### Video Load
**_Event Tags: 'playerLoad', 'videoPlayerLoad'_**

Fired when a video is loaded.

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
  inRead: Boolean,
  // Type of the player
  playerType: String,
  // Sequential number of the video being played. Starts at 1.
  videoNumber: Number
}
```

### Start
**_Event Tags: 'start', 'videoStart'_**

Fired when a video starts, before pre-roll.

#### Data:
```javascript
{
  // True, when video started by Babator; otherwise, false.
  isAutoStart: Boolean,
  // Full URL of the video.
  videoUrl: String,
  // Custom video ID from metadata, if present; otherwise, same as videoUrl.
  videoId: String,
  // True, if video started as result of Babator services; otherwise, false.
  byBabator: Boolean,
  // True, if video is played in In-Read mode; otherwise, false.
  inRead: Boolean,
  // Type of the player
  playerType: String,
  // Sequential number of the video being played. Starts at 1.
  videoNumber: Number
}
```

### Ad Start
**_Event Tags: 'videoAdStart'_**

Fired when an Ad starts playing.

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
  inRead: Boolean,
  // Type of the player
  playerType: String,
  // Sequential number of the video being played. Starts at 1.
  videoNumber: Number
}
```

### Ad Complete
**_Event Tags: 'videoAdComplete'_**

Fired when an Ad completes.
Does not fire when an Ad is skipped.

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
  inRead: Boolean,
  // Type of the player
  playerType: String,
  // Sequential number of the video being played. Starts at 1.
  videoNumber: Number
}
```

### Content Start
**_Event Tags: 'videoContentPlay'_**

Fired when video content is started, after pre-roll.

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
  inRead: Boolean,
  // Type of the player
  playerType: String,
  // Sequential number of the video being played. Starts at 1.
  videoNumber: Number
}
```

### Video Pause
**_Event Tags: 'videoPause'_**

Fired when the video is paused.

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
  inRead: Boolean,
  // Type of the player
  playerType: String,
  // Sequential number of the video being played. Starts at 1.
  videoNumber: Number
}
```

### Video View 25% Checkpoint
**_Event Tags: 'videoViewCheckpoint'_**

Fired after the first quarter is done playing or the user has seeked pass the end of the first quarter.
Fires once per video even if user seeks back.

#### Data:
```N/A```

### Video View 50% Checkpoint
**_Event Tags: 'videoViewCheckpoint'_**

Fired after the second quarter is done playing or the user has seeked pass the end of the second quarter.
Fires once per video even if user seeks back.

#### Data:
```N/A```

### Video View 75% Checkpoint
**_Event Tags: 'videoViewCheckpoint'_**

Fired after the third quarter is done playing or the user has seeked pass the end of the third quarter.
Fires once per video even if user seeks back.

#### Data:
```N/A```

### Video Complete
**_Event Tags: 'videoComplete'_**

Fired when the video reaches the end.

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
  inRead: Boolean,
  // Type of the player
  playerType: String,
  // Sequential number of the video being played. Starts at 1.
  videoNumber: Number
}
```
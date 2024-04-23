### Basic Workflow

This flowchart includes steps for user authentication, starting a new scan, viewing past scans, and using the camera for taking pictures.

```mermaid
flowchart TB
    start([Start]) --> login{Is User Logged In?}
    login -- No --> auth[Display Login Page]
    auth --> authAPI[Authenticate via API]
    authAPI --> login

    login -- Yes --> home[Display Home Page]
    home --> select{User Selects Option}

    select --> newScan[Start New Scan]
    newScan --> configForm[Display Configuration Form]
    configForm --> setConfig[Set Scan Configuration]
    setConfig --> saveConfig[Save Configuration Locally]
    saveConfig --> scan[Go to Scan Page]
    scan --> performScan[Perform Scan Using Camera]
    performScan --> storeScan[Store Scan Results]
    storeScan --> viewScan[View Scan Results]
    viewScan --> home

    select --> viewPast[View Past Scans]
    viewPast --> listScans[Display List of Scans]
    listScans --> selectScan[Select a Scan]
    selectScan --> viewDetails[View Scan Details]
    viewDetails --> home

    select --> takePhoto[Take a Photo]
    takePhoto --> cameraAPI[Activate Camera]
    cameraAPI --> capture[Capture Photo]
    capture --> storePhoto[Store Photo]
    storePhoto --> viewPhoto[View Captured Photo]
    viewPhoto --> home

    home --> logout[Logout]
    logout --> start
```

This flowchart provides a visual representation of the typical user interactions within the app, making it easier to understand the user journey and identify any additional features or steps that might be necessary.

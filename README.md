# SimplyPapers Browser Extension (mainly Chrome)
WebExtension API based browser extension to simply access papers via our LMU/TUM institutional accounts.

Click the Extension icon and select through which institution you want to access the paper you're currently viewing (e.g. on ACM, IEE, ...). The extension will redirect to the paper through the institutional login. Actually logging in is only necessary the first time. (until you delete your cookies ;)

> The extension does NOT log you in, it merely redirects. I.e. your passwords are not read by the extension.

## Example Usage
![gif of useage](doc/paperAccessPreview.gif)

## Setup
1. Download the current release from the github releases page of this repo and unzip it. Or simply clone the repo.
2. Install it
    
    __For Chome:__ follow [this guide](https://ui.vision/howto/install-chrome-extension-from-file) to install the extension via `load unpacked`

    __For Firefox:__ Sadly you can't install local extensions permanently without [some hassle](https://stackoverflow.com/questions/62237202/firefox-add-ons-how-to-install-my-own-local-add-on-extension-permanently-in-f). To install it temporarily (i.e. until you close Firefoy again): 
        
        - got to `about:debugging#/runtime/this-firefox`
        - `load temporary add-on`
        - Select the `manifest.json` in this repo
3. Happy paper accessing ;)

## Roadmap
Currently the urls for lmu and tum are hardcoded. It would be nice to make them user configurable -> i.e. add a dialog to add new ones and dynamically generate the buttons in the popup from these. But we all have to write our thesis, I guess...
# Plugin Development

## Overview

MonkeyPaste plugins use a simple client/server style request and response convention for all plugin interaction. Where MonkeyPaste is the *client* and the plugin acts as a *server*. Plugins for MonkeyPaste's concerns are *stateless* in nature which keeps the interface as simple and lightweight as possible.

## Getting Started

:::note
This assumes you are on Windows (10 or higher) and have an instance of [Visual Studio](https://visualstudio.microsoft.com/vs/community/) already installed. But plugins can also be created on Mac or Linux with [VS Code](https://code.visualstudio.com/download) and [OmniSharp](http://www.omnisharp.net/) for free.
:::

Add the MonkeyPaste.Common.Plugin dll from nuget or the cli:
```
dotnet add package MonkeyPaste.Common.Plugin
```


:::info 
Javascript and python plugin wrappers are currently in an alpha-stage of development. Check back at the [repo](https://github.com/monkeypaste) for more updates!
:::

### Minimal Example

#### Code

```csharp
using MonkeyPaste.Common.Plugin;

namespace MinimalExample {
    public class MinimalExample : MpIAnalyzeComponent {
        public MpAnalyzerPluginResponseFormat Analyze(MpAnalyzerPluginRequestFormat req) {
            return new MpAnalyzerPluginResponseFormat() {
                dataObjectLookup = new Dictionary<string, object>() {
                    {"Text", "Hello World!" }
                }
            };
        }
    }
}
```

#### Manifest.json
Every plugin must have a `manifest.json` file included in its bundle. At a minimum it provides basic meta and package information. But will also include rules for the types of content and parameters it can handle.

While testing, this is a minimal `manifest.json`:

```jsx title="../MinimalExample/manifest.json" 
{
  "title": "Minimal Example",
  "guid": "aa4ceef6-e050-4ed5-b308-7c99942436c3",
}
```
 Required Fields:

| Field | Detail| Test | Publish|
| --- | --- | --- | ---|
| title | Any name is fine but it must have one |✅|✅|
| guid | An RFC 4122 compliant 128-bit GUID (UUID) with only letters, numbers and hyphens |✅|✅|
| version | The default is 1.0.0 but setting blank is not valid. A major, minor, patch format is required. |❌|✅|
| packageUrl | Only needed when publishing. A url to a zip compressed file (.zip) of this projects build output |❌|✅|

:::tip Guid Generator
To get a nice `guid` or if you receive an `InvalidPlugin` error due to the `guid` value you provide,  use [www.guidgenerator.com](https://www.guidgenerator.com/online-guid-generator.aspx) with only 'Hyphens' checked (I think its default). The tool is free and what I use so it should validate fine then.
:::

#### Folder Structure

```
MinimalExample/
    MinimalExample.dll
    manifest.json
    icon.png
```
The only requirements are that the `manifest.json` and plugin assembly (whichever references a `MpIPluginComponentBase` ie. `MpIAnalyzeComponent` or `MpIAnalyzeComponentAsync`) **must be in the root folder** and the **root folder name must match the plugin assembly name**.

#### Testing
Your plugin will be loaded automatically on startup once the plugin folder (`MinimalExample/`) is in MonkeyPaste's root plugin folder found (likely at `C:\Users\<username>\AppData\Local\MonkeyPaste\Plugins`) by clicking the 📁 button in the Plugin Browser, adding your plugin folder there and then restarting the application.

You will get toast notifications of any issues initializing the plugin and some will allow you to fix and retry the errors in realtime. 

Beyond loading, debugging can be handled using `errorMessage` or `userNotifications` properties in the `MpAnalyzerPluginResponseFormat` that will be displayed as toast messages.

:::warning Avoid Repurposing paramid
The only information stored about a parameter is its `paramId` and its **current value** as a `string`. All other aspects are dervied from its `MpParameterFormat`.

For example if you test your plugin using a parameter that's a `MpParameterControlType.TextBox` with `paramId="favorite-restaurant"` and then later on try to test a `MpParameterControlType.MultiSelectList` using that same `paramId="favorite-restaurant"` you may encounter unpredicatable results. 

The plugin cache (a subfolder in the plugin root directory called `.cache`) does its best to compare your `manifest.json` with what was used during last execution to deal with these kinds of changes but there are many unpredicatable circumstances that can **botch up your plugin**.

If your plugin becomes **botched up** you can uninstall it in the *Plugin Browser* then all its parameter data will be cleared and you can re-use the `paramId` safely.

Its just important to try to remember this circumstance and when in doubt, use the interface to formally uninstall it to clear data mismatches. 
:::
##### Debugging 
You can enable step-tracing and debugging for your plugin by including symbol files (.pdb) in your plugin folder and then adding this line to your `manifest.json`:
```jsx title="../MinimalExample/manifest.json"
...
"debugMode": "Debug"
...
```

:::danger Breakpoints & the lag of death
If you experience input (mouse or keyboard) lag while step-tracing use the `DebugLocalInputOnly` option instead of `Debug` where shown above (some application functionality will be limited).

:::info 
This is a **threading issue** between *Visual Studio* and the low-level global input listeners within MonkeyPaste on *Windows* **only**. 

`DebugLocalInputOnly` will disable global input and prevent *the lag of death*.
:::
:::

##### Attaching your Debugger
After you set `debugMode` in your `manifest.json` you should see something similar to below after starting up MonkeyPaste:

<p><img class="figure narrow" src={require('/img/plugin_development_attach_debugger.png').default} /></p>

Then in your plugin project (assuming you're using Visual Studio) select *Debug->Attach to Process...*.
<p><img class="figure narrow" src={require('/img/plugin_development_attach_debugger_vs2022_menu1.png').default} /></p>

In the *Attach to process* menu type 'MonkeyPaste' in the search box, select it and click *Attach* at the bottom.
<p><img class="figure narrow" src={require('/img/plugin_development_attach_debugger_vs2022_menu2.png').default} /></p>

Now anytime code from your plugin is invoked your breakpoints will be hit.

:::info More Info 
If you encounter any problems attaching your debugger, you can check out the [Visual Studio docs](https://learn.microsoft.com/en-us/visualstudio/debugger/attach-to-running-processes-with-the-visual-studio-debugger?view=vs-2022#BKMK_Attach_to_a_running_process) about attaching processes.
:::

:::info VS Code Support
You can debug your plugins with VS Code too, the process is a little more involved though. You can check out the [VS Code docs](https://code.visualstudio.com/docs/csharp/debugging) on configuring VS Code for C# and the steps to *attach to process* there.
:::

#### Publishing
##### Packaging
Your release needs to be a zip file where the contents is your plugins container **folder** *not* the **contents** of the folder. The name can be whatever you want but keeping it relatively unique is probably a good idea.

The .zip file should look something like this:
```title="v1.0.0.zip"
v1.0.0.zip/
    MinimalExample/
        ...(all other deps)
        MinimalExample.dll
        manifest.json
```


Make sure **all** your plugins dependencies are included doing something similar to:
```
dotnet publish -c Release
```

##### Releasing
You need to provide a publicly visible `packageUrl` to allow it to be distributed.


Then for the time being you just need fork https://github.com/monkeypaste/ledger and issue a pull request on it after adding your `manifest.json` to the array in `ledger.json`. This is tentative though and may change so check back here for any updates about releasing.

## Inspiration
These are plugins I've made and they all should be available from the *Plugin Browser* to use right away. Or you can clone one of them to help get you started.


|Project Repo|
|---|
|[ChatGpt](https://github.com/monkeypaste/ChatGpt)|
|[ComputerVision](https://github.com/monkeypaste/ComputerVision)|
|[FileConverter](https://github.com/monkeypaste/FileConverter)|
|[ImageAnnotator](https://github.com/monkeypaste/ImageAnnotator)|
|[QrCoder](https://github.com/monkeypaste/QrCoder)|
|[TextToSpeech](https://github.com/monkeypaste/TextToSpeech)|
|[TextTranslator](https://github.com/monkeypaste/TextTranslator)|
|[WebSearch](https://github.com/monkeypaste/WebSearch)|

:::info Project Dependencies
If you want to build any of projects mentioned above you'll need the `MonkeyPaste.Common` package:
```
dotnet add package MonkeyPaste.Common --version 1.0.0
```
:::

:::tip Divide & Conquer
They all are fairly simple. Only a few small classes that you can adapt for your own ideas.

Check the *Remarks* section on each projects readme to see the techincal aspects that particular plugin exemplifies, then you can blend those concepts together for your own needs.
:::





## Feedback
Feel free to raise an issue at [https://github.com/orgs/monkeypaste/repositories](https://github.com/orgs/monkeypaste/repositories)




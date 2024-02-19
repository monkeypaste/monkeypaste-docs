# Plugin Development
:::tip Clone the repos
This page is here just to describe the over-arching conventions needed to write your own plugin. The **best** way to get started is to clone an exisiting plugin, a list of ones is [here](#samples)
:::
## Overview

All plugin interaction in MonkeyPaste plugins uses a request/response format. Where MonkeyPaste is the *client* and the plugin acts as a *server*. Plugins, as far as MonkeyPaste is concerned are *stateless* in nature. There's no initialization or relative contexts, etc. just discrete requests and responses. This keeps it everything *simple* and *minimalistic*.

## Getting Started

:::note
This assumes you are on Windows (10 or higher) and have an instance of [Visual Studio](https://visualstudio.microsoft.com/vs/community/) already installed. But plugins can also be created on Mac or Linux with [VS Code](https://code.visualstudio.com/download) and [OmniSharp](http://www.omnisharp.net/) for free.
:::

Add the MonkeyPaste.Common.Plugin dll from nuget or the cli:
```
dotnet add package MonkeyPaste.Common.Plugin
```


:::info 
Javascript and python plugin wrappers are currently in an *alpha-stage of development*. Check back on the [plugin board](https://monkeypaste.com/forum/index.php?board=3.0) for more updates!
:::

### A Minimal Analyzer Example

#### Code

```csharp title="../MinimalExample/MinimalExample.cs" 
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
Every plugin must have a `manifest.json` file included in its bundle. It just provides basic meta and package information. 

While testing, this is a minimal `manifest.json` for a plugin that **only reads text** and **generates new text**:

```jsx title="../MinimalExample/manifest.json" 
{
  "title": "Minimal Example",
  "guid": "aa4ceef6-e050-4ed5-b308-7c99942436c3",
  "analyzer": {
    "inputType": {
      "text": true
    },
    "outputType": {
      "text": true
    }
  }
}
```

:::info Headless Components
The `analyzer` section of the `manifest.json` above can be omitted if your plugin implements `MpISupportHeadlessAnalyzerFormat` which lets you define your `MpAnalyzerComponent` at runtime (which is what the `analyzer` property is). 

::::::tip Headless is better
Headless is a better option in real usage but this is a minimal example. Look at some of the [sample repos](#samples) to learn more about `MpISupportHeadlessAnalyzerFormat`. 
::::::


 Required Fields:

| Field | Detail| Test | Publish|
| --- | --- | --- | ---|
| title | Any name is fine but it must have one |✅|✅|
| guid | An RFC 4122 compliant 128-bit GUID (UUID) with only letters, numbers and hyphens |✅|✅|
| version | This defaults to `1.0.0.0`. Setting it blank or improper formatting will mark the plugin invalid and it won't load. A major, minor, patch and revision format is required. |❌|✅|
| publishedAppVersion | The version of MonkeyPaste the plugin was published with. This can be found in the *System Tray->About* menu. |❌|✅|
| packageUrl | A publicly visible url to a zip compressed file (.zip) of the plugins published output. |❌|✅|

:::tip Guid Generator
To get a nice `guid` or if you receive an `InvalidPlugin` error due to the `guid` value you provide, you can use [https://www.guidgenerator.com](https://www.guidgenerator.com/online-guid-generator.aspx) with only 'Hyphens' checked (I think its default). The tool is free and what I use so MonkeyPaste should validate it fine if you run into issues (you probably won't).
:::

#### Folder Structure

```
MinimalExample/
    MinimalExample.dll
    manifest.json
    icon.png
```
The only requirements for folder structure are that the `manifest.json` and plugin assembly (whichever references a `MpIPluginComponentBase` ie. `MpIAnalyzeComponent` or `MpIAnalyzeComponentAsync`) **must be in the root folder** and the **root folder name must match the plugin assembly name**.

#### Testing
Your plugin will be loaded automatically on startup once the plugin folder (`MinimalExample/`) is in MonkeyPaste's root plugin folder found by clicking the 📁 button in the Plugin Browser, adding your plugin folder there and then restarting the application.

You will get toast notifications of any issues initializing the plugin and some will give you the option to fix and retry the errors in realtime (the retry/fix options may not make sense to the error but occasionally can save you some time). 

Beyond loading, debugging can be handled using `errorMessage` or `userNotifications` properties in the `MpAnalyzerPluginResponseFormat` that will be displayed as toast messages.

:::danger Avoid Repurposing paramid
Be sure to uninstall (in the *Plugin Browser*) your plugin **BEFORE** you change any `MpParameterFormat.controlType`'s when your testing. It's just safer :)

::::::info Background
The only information stored for each plugin parameter is its `paramId` and its **current value** as a `string`. All other aspects are dervied from its `MpParameterFormat`.

For example if you test your plugin using a parameter that's a `MpParameterControlType.TextBox` with `paramId="favorite-restaurant"` and then later on try to test a `MpParameterControlType.MultiSelectList` using that same `paramId="favorite-restaurant"` you may encounter unpredicatable results. 

The plugin cache (a subfolder in the plugin root directory called `.cache`) does its best to compare your `manifest.json` with what was used during last execution to deal with these kinds of changes but there are many unpredicatable circumstances that can **botch up your plugin**.

If your plugin becomes **botched up** you can uninstall it in the *Plugin Browser* then all its parameter data will be cleared and you can re-use the `paramId` safely.

Its just important to try to remember this circumstance and when in doubt, use the interface to formally uninstall it to clear data mismatches. 
::::::
##### Debugging 
You can enable step-tracing and debugging for your plugin by including symbol files (.pdb) in your plugin folder and then adding this line to your `manifest.json`:
```jsx title="../MinimalExample/manifest.json"
...
"debugMode": "Debug"
...
```

:::danger Breakpoints & the lag of death
If you experience input (mouse or keyboard) lag while step-tracing use the `DebugLocalInputOnly` option instead of `Debug` where shown above (some application functionality will be limited).

::::::info Background
This is a **threading issue** between *Visual Studio* and the low-level global input listeners within MonkeyPaste on *Windows* **only**. 
::::::

##### Attaching your Debugger
After you set `debugMode` in your `manifest.json` you should see something similar to below after starting up MonkeyPaste:

<p class="figure narrow"><img src={require('/img/plugin_development_attach_debugger.png').default} /></p>

Then in your plugin project (assuming you're using Visual Studio) select *Debug->Attach to Process...*.
<p class="figure narrow"><img src={require('/img/plugin_development_attach_debugger_vs2022_menu1.png').default} /></p>

In the *Attach to process* menu type 'MonkeyPaste' in the search box, select it and click *Attach* at the bottom.
<p class="figure narrow"><img src={require('/img/plugin_development_attach_debugger_vs2022_menu2.png').default} /></p>

Now anytime code from your plugin is invoked your breakpoints will be hit.

:::info More Info 
If you encounter any problems attaching your debugger, you can check out the [Visual Studio docs](https://learn.microsoft.com/en-us/visualstudio/debugger/attach-to-running-processes-with-the-visual-studio-debugger?view=vs-2022#BKMK_Attach_to_a_running_process) about attaching processes.
:::

:::info VS Code Support
You can debug your plugins with VS Code too, the process is a little more involved though. You can check out the [VS Code docs](https://code.visualstudio.com/docs/csharp/debugging) on configuring VS Code for C# and the steps to *attach to process* there.
:::

#### Publishing

##### Localizing

Explaining the details of localizing is outside the scope of this article. But if you look at any of the [sample repos](#samples) you may notice they all have `./Resources` folders and the [plugin ledger](https://github.com/monkeypaste/ledger) has a `./Cultures` folder too. 

It's not necessary to follow the sample's localization conventions but *you can* with your `manifest.json`. The neutral language is English(en-US) and the root level `manifest.json` should be the neutral manifest. *All* languages you want to support will need their **own** `./Resources/manifest.<culture-code>.json` file.

##### Packaging
Your release needs to be a zip file where the contents is your plugins container **folder** *not* the **contents** of the folder. The name can be whatever you want.

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
For the time being you need to fork https://github.com/monkeypaste/ledger project, add your `manifest.json` to the array in `ledger.json` and and issue a pull request on it. This is tentative though and may change so check back here for any updates about releasing.

## Samples
These are plugins I've made and they all should be available from the *Plugin Browser* to use right away. 
You can also clone one to help get you started.

They all are fairly simple. Only a few small classes that you can adapt for your own ideas.

Check the *Remarks* sections on each project readme (also in the *Plugin Browser*) to see the plugin-related techincal aspects that particular plugin exemplifies, then you can blend those concepts together for your stuff.

|Project Repo|
|---|
|[ChatGpt](https://github.com/monkeypaste/ChatGpt)|
|[ComputerVision](https://github.com/monkeypaste/ComputerVision)|
|[FileConverter](https://github.com/monkeypaste/FileConverter)|
|[GoogleLiteTextTranslator](https://github.com/monkeypaste/GoogleLiteTextTranslator)|
|[ImageAnnotator](https://github.com/monkeypaste/ImageAnnotator)|
|[QrCoder](https://github.com/monkeypaste/QrCoder)|
|[TextToSpeech](https://github.com/monkeypaste/TextToSpeech)|
|[TextTranslator](https://github.com/monkeypaste/TextTranslator)|
|[WebSearch](https://github.com/monkeypaste/WebSearch)|

## API Documentation

<p class="dl-btn">
<a class="fancy-hover" href="https://www.monkeypaste.com/apidocs/html/index.html"><img class="no-zoom" src={require('/img/view_docs_btn.png').default}/></a><br/>
</p>

## Feedback
Feel free to raise an issue at https://github.com/monkeypaste/MonkeyPaste.Common.Plugin or check out the [Forum](https://monkeypaste.com/forum/index.php?board=3.0) 
---
sidebar_position: 4
---
# Plugins

There are 2 types of plugins that MonkeyPaste currently supports:
1. [Analyzers](#analyzers)
2. [Clipboard](#clipboard)


## Analyzers
As their name implies, *Analyzers* analyze a clip's content or some set of the clips properties to create some type of useful output by *generating* new content or *annotating* its input content (always a clip).

For example translating the language of a text clip (like with the ['Google Lite Text Translator'](https://github.com/monkeypaste/GoogleLiteTextTranslator) plugin) will *generate* a new clip for that translation. Or running image analysis (like with the ['Image Annotator'](https://github.com/monkeypaste/ImageAnnotator) plugin) on a picture will *annotate* that picture with information about regions of interest or detected objects in that image. This information is *dependant* on the source clip. MonkeyPaste calls that information an *annotation*.

:::info Source Tracking
Under the covers, MonkeyPaste keeps a history of **all** its plugin interaction and connections for source->generated content as well as the specific settings that were used everytime an analyzer is executed. 

*Some* of this information is available in the *Clip Context-menu->Sources* sub-menu but there can be **a lot more** tracked then what you currently can see. Its just is filtered out because its not immediatly useful *yet*. This will change in future releases.
:::

## Clipboard
:::info Plugin Driven
All of MonkeyPaste's core platform integration is handled through the *Core Clipboard* plugin.
:::

Clipboard plugins are used for both clipboard *and* drag-and-drop read/write operations. Each clipboard will have a set of **formats** that it can handle for reading, writing or both. 

Each format a clipboard plugin can handle is basically its own *Analyzer* plugin, it will have its own parameters and presets. Unlike *Analyzer* plugins however, *Clipboard format* presets can be enabled or disabled for general (default) or application specific clipboard operations.

:::tip More Info
Check out the [VS Code Setup walkthrough](docs/tips/custom-write-setup-w-vscode.md) for a practical example of using *Clipboard format* presets
:::
 
## Plugin Browser
<p class="figure" align="left">
  <img src={require('/img/plugin_browser_button.png').default} width="300"/>  
</p>  
The *plugin browser* can be accessed from the *analyzer sidebar* by click the 🧩 button found to the right of the *analzyer selector* drop-down.
<p class="figure" align="left">
<img src={require('/img/auto_tag_plugin_browser.png').default} width="300" />
</p>

## Resetting Credentials and API Keys

For plugins with *shared* parameters, like [ChatGpt](https://www.github.com/monkeypaste/ChatGPT) or [Azure Computer Vision](https://www.github.com/monkeypaste/ComputerVision) you can reset/clear them from the *Analyzer Preset Table* by clicking the **Reset** button:

<p class="figure" align="left">
<img src={require('/img/reset_param_button.png').default} width="300" />
</p>

Now you'll see the *Reset Option Dialog*. Click **Reset Shared** to clear:

<p class="figure" align="left">
<img src={require('/img/reset_param_dialog.png').default} width="300" />
</p>
After the *shared* parameters are cleared when you run the analyzer again you will now see the *shared/execute parameter* notification so you can use different data:
<p class="figure" align="left">
<img src={require('/img/exec_param_ntf.png').default} width="300" />
</p>
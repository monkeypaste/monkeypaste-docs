---
sidebar_position: 5
---
# Triggers & Actions

:::info
Check out the [Automated Image Tagging](../tips/automated-image-tagging.md) walkthrough for more insights into **Triggers** and **Actions**.
:::

## Triggers
By some manner or another, triggers are **events** that produce **clips** matching some criteria for the specific type of trigger.

Below you will find basic summaries of the triggers currently available.

|Name|Description|
|---|---|
|Clip Added|Triggered when a clip of the selected type is **added**|
|Clip Tagged|Triggered when a clip is **linked** to the selected **tag**|
|Folder Watcher|Triggered when the selected **folders** content **changes**.The output will be a **new clip** of the file or folder that has changed along with the type of change|
|Monkey Copy|Simulates a 'Copy' key combination in the active application so this triggers input will be whatever is selected. This allows you to have some unique action workflow in the background while still behaving like a 'Copy' command in the active application.|
|Shortcut|When the recorded shortcut is pressed at anytime with the current clipboard|

:::tip MonkeyCopy Example #1
if you have a text translation plugin available you can select some text, perform a Monkey Copy shortcut, translate the text with an 'Analyze' action and then use the translation in a 'Set Clipboard' action to seamless translate text
:::
:::tip MonkeyCopy Example #2
Or another example, you have a 'Dessert Receipes' collection and with a Monkey Copy trigger you can copy a receipe you like with the shortcut and it wil be automatically added to 'Dessert Receipes' by using a 'Classify' action.
:::

## Actions
Like triggers, actions have **inputs** and **outputs** which will always contain the **source clip** provider by the **trigger**. 

|Name|Description|
|---|---|
|Alert|Used for custom alerts to help keep you aware of long-running action chains. Also these can be handy to narrow down parent output data when configuring 'Conditional' actions. Alerts have no affect on their input.|
|Analyzer|Processes triggered content or previous action output using a selected plugin.|
|Application Command|Invokes an Application Action.|
|Classify|Input content is linked to the selected collection|
|Conditional|Parses content or previous action output for text. When text is found, the output is ranges where those conditions were met. When comparision fails, no subsequent actions will be evaluated.|
|Delay|Priarily used in conjunction with the 'Repeat' Action for polling remote sources or aid with long running operations.|
|File Writer|Saves input to the selected folder.|
|Repeater|Used for creating action loops or repetive tasks. When repeated, it will execute all children again with its original input. When using an interval without a repeat count, the trigger will need to be disabled and reenabled to halt the repeating. Can be useful for polling or web scraping automation.|
|Set Clipboard|Sets the clipboard to the input clip.|

### Last Output
Some actions add data to *chain of execution* which is referred to as **Last Output**. 

The output may be a **new clip** like from the [Qr Coder Plugin](https://github.com/monkeypaste/QrCoder) which generates a QR code based on its **source clip**. 

Or **Last Output** can be some type of **annotation** about the parent action's **input** which is the case for the [Image Annotator Plugin](https://www.github.com/monkeypaste/ImageAnnotator) that outputs formatted information about the objects that it detected.

---
sidebar_position: 5
---
# Triggers & Actions

:::info Practical Example
Check out the [Automated Image Tagging](../tips/automated-image-tagging.md) walkthrough for more insights into **Triggers** and **Actions**.
:::

## Triggers
By some manner or another, triggers are **events** that produce **clips** matching some criteria for that specific type of trigger.

Below you will find basic summaries of the triggers currently available.

|Name|Description|
|---|---|
|Clip Added|Triggered when a clip of the selected type is **added** to the system in any way (clipboard, drag-and-drop, analyzer generated or duplicated).|
|Clip Tagged|Triggered when a clip is **linked** to the specified *Tag Collection*.|
|Folder Watcher|Triggered when the selected **folder**'s content **changes**. The output will be a **new** or **existing** (when the *Ignore Duplicates* preference is **enabled**) *File Clip* of the file or folder that has changed along with **the type of change** as its **[last output](#last-output)**.|
|***Monkey Copy***|Like a *Shortcut Trigger* but when the key combination is pressed, a 'Copy' event will be *simulated* in the active application so it **still works like copy** but then the chain of actions attached to the *Monkey Copy Trigger* will get executed in the background using the **simulated copy clipboard data** (see tips below for more info).|
|Shortcut|Triggered by a global shortcut you define. **If MonkeyPaste is active** it will *attempt* to use the selected clip (if there is one) as input. **Otherwise** it will *try* to use the clipboard as its input. <br/><br/>**Note:** a *Shortcut Trigger* will **still execute** if there is **no input** to keep it flexible (so it can be a macro trigger etc.) since its not a *data-driven event*.  |

:::tip MonkeyCopy Example #1 (one key translation)
If you hooked up some text translation analyzer->Set Clipboard action chain to a *Monkey Copy Trigger* then with **one key** it will copy some text you select, translate it then put the translation on the clipboard to paste where you need it.
:::
:::tip MonkeyCopy Example #2 (one key classify)
Let's say you have a 'Dessert Receipes' *Tag Collection* and you find a new receipe you like online. If you had a special 'Dessert Receipe' *Monkey Copy Trigger* shortcut you could just select the receipe text and type the shortcut then *automatically* add it to your 'Dessert Receipes' *Tag Collection* (by hooking a *Classify* action up to the *Monkey Copy Trigger*).
:::

## Actions
Actions always have **one** *input* and **some number** of *outputs* where it performs its action on the *input* and then passes the result to its children as its *output*.


|Name|Description|
|---|---|
|Alert| General purpose sound and/or system tray message alerts. *Alert action*'s have no affect on their input.|
|Analyzer|Processes its input clip using the assigned *Analyzer Preset*. |
|Application Command|Invokes the assigned application action. All *Application Command*'s are stateless and their input clip is **ignored**. |
|Classify|Links its input clip to the assigned *Tag Collection*.|
|Conditional|Performs a *text comparision* on the input clip or previous [action output](#last-output). When comparision fails (its not a match) **no child actions will be executed**. So it acts like a *logical gate*.|
|Delay|**(Experimental)** Primarily used in conjunction with the *Repeater Action* for polling remote sources or aid with long running operations.|
|File Writer|Saves input to the selected folder.|
|Repeater|**(Experimental)** Used for creating action loops or repetive tasks. When repeated, it will execute all children again with its original input. When using an interval without a repeat count, the trigger will need to be disabled and reenabled to halt the repeating. Can be useful for polling or web scraping automation.|
|Set Clipboard|Sets the clipboard to the input clip.|

:::danger be careful branching
There are ***no restrictions*** or any *scheduling system* in place for action chains (*yet*) and if you branch your chain (adding **more than one** child action to an action) you may get inconsistent results. After a branch there's no telling *when* some action will modify an input or *any guarentees* that some processing has completed on another branch. 
:::


### Last Output
<p class="figure">
  <img src={require('/img/last_output.png').default} width="250"/>  
</p>
Some actions add data to the *chain of execution* which is referred to as *Last Output*. 

*Last output* can be a **new clip** like from the [Qr Coder Plugin](https://github.com/monkeypaste/QrCoder) which generates a QR code based on its **source clip** or *Last Output* can be some type of **annotation** about its parent action's **output** which is the case for the [Image Annotator Plugin](https://www.github.com/monkeypaste/ImageAnnotator) that outputs formatted information about the objects that it detected.


## Designer Shapes
<p class="figure">
  <img src={require('/img/designer_shapes.png').default} width="250"/>  
</p>
The shapes for triggers and actions can help you understand how they work. 
- *Triggers* are **circles** and only have input from a *trigger event*. 
- *Condtional* actions are **diamonds** and their *condition* must evaluate to **true** for their child actions to **continue**.
- *All other* actions are squares and will always pass their **input** (with the result of their action) as **output** to their child actions.


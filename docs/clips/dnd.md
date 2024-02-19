# Drag-and-Drop

## Dropping Text onto Text Clips

### Text Drop Modes

|Line Color|Type|Description|Held Keys|
|---|---|---|---|
|🟥|Plain Text|The text being dropped will inherit whatever formating the clip has at that location in the text.| *None*|
|🟦|Formatted Text|The dragged text formatting will be merged into the clip (results may vary).|<kbd>Alt</kbd>|
|🟩|Copy|Only relevant when dragging from within MonkeyPaste. It will **copy** instead of **cut** the text. (Also **duplicate** the Clip on a drop into a *Collection*)|<kbd>Control</kbd>|
|🟥🟦🟩|Split|The insert position for the dropped text is **split** into separate paragraphs and the dropped text becomes sandwiched between as a new paragraph|<kbd>Shift</kbd>|

:::tip Paragraph vs Insert Drop Lines
Depending on where you position the mouse vertically over each line of text, you can drop the text as a *new paragraph* or *insert it into the line*. **Note** *split-mode* (by holding <kbd>Shift</kbd>) is *always* in *insert mode* (shown below in respective order):
<p class="figure spaced" align="center">
<img src={require('/img/block_drop.png').default} width="150"/>  
<img src={require('/img/inline_drop.png').default} width="150"/>  
<img src={require('/img/split_drop.png').default} width="150"/>  
</p>
:::


## External Content Drag-and-Drop 
By default you can drag something to the **top of your screen** to reveal MonkeyPaste so you can *easily* **drag-and-drop** content onto:
1. The *Pin Tray* to **add** it as a new clip.
2. Any *Tag Collection* to **link** it to that tag and **add** it as a new clip.
3. Any *Action* or *Trigger* to **add** it as a new clip before it gets **processed** by that action and its subsequent *chain of execution*.


## Dropping Tags onto Actions
You can also drop *any* **Collection** onto *any* **Action** to perform *batch processing* on **all** clips found for that tag! 🤓

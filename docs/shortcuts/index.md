---
sidebar_position: 4
---
# Shortcuts
:::warning unified keys
MonkeyPaste **ignores** the difference between left or right **modkeys** and num pad or home row **number keys**. They are all considered **the same key**. 
:::

## Managing Shortcuts
All available shortcuts can be found in the *Settings->Shortcuts* menu.

### Changing a Shortcut
You can change the keys for a shortcut by hovering over the keys and clicking the <img src={require('/img/record_button.png').default} height="20"/> button. 


## Global Routing Types

<p class="figure" align="left">
  <img src={require('/img/route_types.png').default} width="250"/>  
</p>  

### What are Routing Types?

*Routing Type* is a term used loosely in MonkeyPaste to describe *how* and *when* keyboard input is delivered to the active application from the opearting system.

|Type|Description|
| --- | --- |
|Passive |All shortcuts are passed through to active application. |
|Pre |The shortcut will be executed **before** the active application receives it so an active application shortcut *can* happen **after**.|
|Post |The shortcut will be executed **after** the active application receives it so an active application shortcut *can* happen **before**.|
|Override |The **last** key of the shortcut will be suppressed from input to the active application so it will be unknown to the active application. |
|Exclusive Override |**(Experimental)** This is a special type of override mode designed for the locking keys (Num Lock, Caps Lock and Scroll Lock). It only allows **one** key (non-modifier) for its assignment but will be executed *anytime* no matter what other keys are down. This prevents the lock key from getting stuck in its lock state.|

:::tip When in doubt Override
To ensure your global shortcut doesn't conflict with some other applications shortcut, set the *Routing Type* to *Override*. Also it helps to make it one you don't use in other applications then if it *does* conflict with one somewhere, it *won't really matter* since you don't use it anyways!
:::

::::::info Why No Sequences!?!
Sequences are a series of key strokes instead of just one combination to trigger a shortcut. Initially MonkeyPaste was designed to allow sequences but there's **serious** complexities that arise when also trying to support *Override* routing...it becomes crazy! 

So to keep the system stable I needed to pick one or the other and decided there's more advantages to *Override* since you likely won't have **that** many global shortcuts to deal with and it ensures they'll 'always' work. 
::::::


## Reference

### Editor (read-only)
|Name|Shortcut|
|---|---|
|Shift Line Up|<kbd>Alt</kbd> <kbd>Up</kbd>|
|Shift Line Down|<kbd>Alt</kbd> <kbd>Down</kbd>|
|Duplicate Selection|<kbd>Control</kbd> <kbd>D</kbd>|

### Application
|Name|Shortcut|
|---|---|
|Assign Shortcut|<kbd>Control</kbd> <kbd>I</kbd>|
|Clear Pin Tray|<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>W</kbd>|
|Copy Selection|<kbd>Control</kbd> <kbd>C</kbd>|
|Cut Selection|<kbd>Control</kbd> <kbd>X</kbd>|
|Decrease Focus|<kbd>Esc</kbd>|
|Delete Selected Items|<kbd>Delete</kbd>|
|Duplicate|<kbd>Control</kbd> <kbd>D</kbd>|
|Exit Application|<kbd>Control</kbd> <kbd>Q</kbd>|
|Find And Replace Selected Item|<kbd>Control</kbd> <kbd>H</kbd>|
|Force Minimize Main Window|<kbd>Control</kbd> <kbd>Escape</kbd>|
|Increase Focus|<kbd>Space</kbd>|
|Next Page|<kbd>PageDown</kbd>|
|Open Help|<kbd>F1</kbd>|
|Open In Window|<kbd>Control</kbd> <kbd>O</kbd>|
|Orient Main Window Bottom|<kbd>Control</kbd> <kbd>Down</kbd>|
|Orient Main Window Left|<kbd>Control</kbd> <kbd>Left</kbd>|
|Orient Main Window Right|<kbd>Control</kbd> <kbd>Right</kbd>|
|Orient Main Window Top|<kbd>Control</kbd> <kbd>Up</kbd>|
|Paste Selection|<kbd>Control</kbd> <kbd>V</kbd>|
|Paste To External|<kbd>Control</kbd> <kbd>Enter</kbd>|
|Permanently Delete|<kbd>Control</kbd> <kbd>Delete</kbd>|
|Previous Page|<kbd>PageUp</kbd>|
|Redo|<kbd>Control</kbd> <kbd>Y</kbd>|
|Rename|<kbd>F2</kbd>|
|Reset Selection Zoom|<kbd>Control</kbd> <kbd>0</kbd>|
|Scroll To End|<kbd>End</kbd>|
|Scroll To Home|<kbd>Home</kbd>|
|Select Next Column Item|<kbd>Right</kbd>|
|Select Next Row Item|<kbd>Down</kbd>|
|Select Previous Column Item|<kbd>Left</kbd>|
|Select Previous Row Item|<kbd>Up</kbd>|
|Show Settings|<kbd>Control</kbd> <kbd>,</kbd>|
|Toggle Append Manual Mode|<kbd>Control</kbd> <kbd>G</kbd>|
|Toggle Content Read Only|<kbd>Control</kbd> <kbd>E</kbd>|
|Toggle Filter Menu Visible|<kbd>Control</kbd> <kbd>K</kbd>|
|Toggle Main Window Locked|<kbd>Control</kbd> <kbd>L</kbd>|
|Toggle Pinned|<kbd>Control</kbd> <kbd>P</kbd>|
|Undo|<kbd>Control</kbd> <kbd>Z</kbd>|
|Window Size Down|<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>Down</kbd>|
|Window Size Left|<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>Left</kbd>|
|Window Size Right|<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>Right</kbd>|
|Window Size Up|<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>Up</kbd>|
|Zoom In On Selection|<kbd>Control</kbd> <kbd>=</kbd>|
|Zoom Out On Selection|<kbd>Control</kbd> <kbd>-</kbd>|

### Global
|Name|Shortcut|
|---|---|
|Manually Add From Clipboard|<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>F9</kbd>|
|Toggle Append Insert Mode|<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>F6</kbd>|
|Toggle Append Line Mode|<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>F5</kbd>|
|Toggle Append Paused|<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>F8</kbd>|
|Toggle Append Pre Mode|<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>F7</kbd>|
|Toggle Auto Copy Mode|<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>F2</kbd>|
|Toggle Listen To Clipboard|<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>F1</kbd>|
|Toggle Main Window|<kbd>Control</kbd> <kbd>F1</kbd>|
|Toggle Right Click Paste Mode|<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>F3</kbd>|

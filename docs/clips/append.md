# Append

## Background
When you need to copy *more than one thing* to get something done, it can get *messy*. All the <kbd>Alt</kbd> <kbd>Tab</kbd>'s (application switching), scrolling and back-and-forthing  is **error prone**, **distracting** and just down-right ***annoying***!

I know it may seem *trite* at first but once you start noticing when it happens, its hard not to admit *there must be a better way*... Enter, *Append Mode*!

## What is Append Mode?
Normally when you cut or copy something in an application that data **replaces** what was previously on the clipboard. Its just *gone*. No undo/redo, restore or anything, just *gone*. *Append Mode* changes this behavior to **add** the data ie. *appending* it to what is already present. 

## Details
<p class="figure spaced" align="center">
  <img src={require('/img/append_text_tile.png').default} width="30%"/>  
  <img src={require('/img/append_files_tile.png').default} width="30%"/>  
</p>  

To be as flexible as possible, *Append Mode* has **3** *2-way toggle switches* to decide **where** to *append* new clipboard data:
1. [Insert](#insert)
2. [Position](#position)
3. [Direction](#direction)

### Insert
|Name|Description|Text|Files|Shortcut|
|---|---|---|---|---|
|Block|New clipboard data is *appended* as a **new line**.|✅|✅|<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>F5</kbd>|
|Inline|New clipboard data is *appended* on the the **same line**.|✅|❌|<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>F6</kbd>|

:::info What are 'Blocks' and 'Inlines'?!
A **Block** is basically just a *paragraph* or **the text between 2 carriage returns (enter key presses)**. There's other types though too, like *table cells* or *list items*.

An **Inline** is a *strip* of text **inside** or a **range of text with the same formatting (like font, color, size etc.)**.
:::

### Position
|Name|Description|Shortcut|
|---|---|---|
|Extent|The *insert* is *positioned* at the **beginning** or **end** of current clipboard|<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>F9</kbd>|
|Manual| The *insert* is *positioned* where you have selected in the clip|<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>F9</kbd>|

### Direction 
:::warning *Direction* is Manual Only
By its definition, *Extent Mode* is **always** at the beginning or end of the text or list of files so ***Direction*** **is essentially ignored in** ***Extent Mode***.
:::
|Name|Description|Shortcut|
|---|---|---|
|Before|After an *append*, the **next** *insert position* will be at the **beginning of the last**.|<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>F7</kbd>|
|After|After an *append*, the **next** *insert position* will be the **end of the last**.|<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>F7</kbd>|

:::info *Before Mode* in practical terms
Using *Manual Before mode* essentially means the *Insert Position* stays **fixed** at a fixed *distance* (number of characters or files) from the beginning of the clip.

So in the (probably rare) case you would need it, *Manual Before mode* will append the data in the **reverse order that its copied**.
:::


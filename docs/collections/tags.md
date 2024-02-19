# Tags
Tags are way to classify clips by their content. Clips are not restricted to any one tag. You can link a clip to any tag you like. 

## How to tag a clip
There are a few ways you can link a clip to a tag but most commonly:
1. Right-click (desktop) or hold (mobile) over a clip to reveal the clip context menu
2. Hover and/or select the 'Tags' menu item
3. Left-click or tap the Tag to link to the clip

<p class="figure" align="center">
  <img src={require('/img/tagging_clip.png').default} width="300"/>  
</p>

:::tip Drag-and-drop onto Tags
Clips or any external data can be automatically linked to a tag by **dragging it onto the tag**. 
:::

## Direct vs. Indirect Links

Tags are hierarchial. For example lets say you add an image of a banana split to the bananas tag:

In the screenshot below the *indirect* link is highlighted in **yellow** and the direct link is in **red**.

<p class="figure" align="center">
 <img src={require('/img/tagging_indirect.png').default} width="75%"/>  
</p>

Now the banana split picture is *directly* linked to the *Bananas* tag. So selecting *Bananas* from the *Tag Tree* will show it as a result in the *query tray*. The banana split is **also** *indirectly* linked with the *Fruits* tag. So selecting the *Fruits* tag will show **any** items it has directly linked or a **child tag** has like in this case, the banana split from the *Bananas* tag.

If you move (by drag-and-drop) the *Bananas* tag somewhere outside of *Fruits* then the *Fruits* tag will no longer show the banana split since it was only *indirectly* linked. But the link to *Bananas* will remain since it was *directly* linked. If however, you *directly* linked the banana split to *Fruits* (so it would **also** be checked in the context-menu not shown as a box) nothing will change when selecting the *Fruits* tag.
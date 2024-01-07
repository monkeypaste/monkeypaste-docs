# Automated Tagging with Triggers and Plugins
Do you want a way to *automatically* tag the things you copy into organized groups so you can *use* them later?!?
Well *this* tip is for you then!

<p align="center">
  <video controls height="300">
    <source src="/docs/build/videos/auto_tagging.mkv"/>
  </video>
</p>

We'll use the [Image Annotator Plugin](https://www.github.com/monkeypaste/ImageAnnotator) available for download from the *Plugin Browser* to detect cats or dogs in images we copy and automatically tag them to cooresponding 'Cats' and 'Dogs' collections!

:::info What's it do?
The [Image Annotator Plugin](https://www.github.com/monkeypaste/ImageAnnotator) detects common objects in images and provides a name, box and score (between 0 and 1 of how sure it is about the name) for each object it detects. 
:::

:::tip Annotation Viewer
To see detailed information about *image annotations* **double-click** the analyzed image to **see** its annotations and then **double-click** an annotation to bring up the *annotation viewer* 
<p><img class="figure" src="/docs/build/img/auto_tag_annotations_view.png" /></p>
You can Check out the [Computer Vision](https://www.github.com/monkeypaste/ComputerVision) plugin to get much more detailed annotations.
:::


Here's how:

## Creating the Tags
1. Open the *Collections* sidebar and select the top-level *Tags* collection.
2. You'll now see a ➕ button in the top-left of the sidebar. Click the ➕ button to add a new tag.
3. A new tag named 'Untitled' will be added to the bottom of the list, right-click it and select *Rename* and change its name to 'Cats'.
4. Repeat steps #2-3 but make a 'Dogs' tag.
<p><img class="figure narrow" src="/docs/build/img/auto_tag_tag_setup.png" /></p>
:::tip Nesting & Grouping
Tags can be nested. If you added a 'Pets' tag and drag-and-dropped the 'Cats' and 'Dogs' tags we just made into it, then all the clips within them will become *implicitly* linked to 'Pets' and shown when 'Pets' is selected.
:::

## Adding the Image Annotator Plugin
1. Open the *Analyzer* sidebar and click the 🧩 button to reveal the *Plugin Browser*
2. Type 'Image Annotator' into the search box then select the *Browse* tab
3. Select 'Image Annotator' in the left pane and click the *Install* button from the right pane.
4. After a moment the plugin will be installed and ready for use.
<p><img class="figure" src="/docs/build/img/auto_tag_plugin_browser.png" /></p>

## Trigger Setup
1. Now open the *Triggers* sidebar click the ➕ button on the top-right of the sidebar to show the *Create Trigger* menu
2. Select the *Clip Added* trigger to create the new trigger
3. If its not automatically selected, select the 'Clip Added Trigger' from the *Trigger Selector* below the ➕ button
4. Scroll down to show the *Action Properties* view and click the 'Clip Added Trigger' label and rename it 'Image Copied Trigger'.
5. Then below in the properties, select 'Image' for the **Trigger** parameter since for this example we want to tag pictures of cats and dogs.
<p><img class="figure narrow" src="/docs/build/img/auto_tag_trig_props.png" /></p>
:::tip Integrated Help
All triggers, actions and their parameters have hints (little blue ℹ️ icons) to help you get familiar with using them.
:::
## Add the ImageAnnotator Action
1. We need a way to run the 'Image Annotator' plugin we just installed. To do this we add an *Analyze* action to the 'Image Copied Trigger' by right-clicking the green circle on right in the *Action Designer* view and selecting *Add->Analyze* from the *Add Action* pop-menu.
2. The new 'Analyze1' action will become selected and shown with an arrow pointing to it from the 'Image Copied Trigger'
3. Let's rename it to 'Analyze Image Objects' back in *Action Properties*
4. Now to use the Image Annotator, click the *Component Selector* for the **Analyzer** parameter and select *Image Annotator->Default Annotator*.
5. Finally we'll set the **Confidence** *parameter* to 0.5 using the slider. This will help filter out false-postives from annotator.
<p><img class="figure narrow" src="/docs/build/img/auto_tag_ann_props.png" /></p>
:::tip Plugin Presets
Analyzer *parameters* are stored using presets so you can re-use certain configurations later. All plugins will have at least 1 default preset (which is what we just picked from the *Component Selector*). You can add new presets at anytime by clicking the *Add Preset* button at the bottom of the *Analyzer* sidebar. 
:::

## Using Conditional Actions
To recap, we setup a trigger so when any *Image* is **added** it will then be **analyzed** by the *Image Annotator* which (among other things) **outputs** a list of the objects it detected. We only care about output containing the *words* 'Cat' or 'Dog'. This is what *Conditional* actions are for! 

When the condition is **true**, execution continues. When the condition is **false**, no actions stemming from a *Condtional* action will be performed.
1. Right-click the 'Analyze Image Objects' square in the *Action Designer* and select the *Add->Conditional* option and a new **Conditional** diamond will be added as a child to 'Analyze Image Objects'.
2. Now select the *Conditional* action diamond and lets rename it to 'Has Cats?'
3. Finally, set **Condition Data** to 'cat' in the textbox. <p><img src="/docs/build/img/auto_tag_cat_cond.png" class="figure narrow"/></p>
4. Since this condition is based on the 'Analyze Image Object' output, set **Input Property** to *Last Output* (more info on *Last Output* can be found [here](../triggers/index.md#last-output))
5. Repeat steps **1-4** by adding a 'Has Dogs?' *Conditional* action with its **Condition Data** parameter set to 'dog'. <p><img src="/docs/build/img/auto_tag_dog_cond.png" class="figure narrow"/></p>
:::tip
You can also **Copy** and **Paste** the 'Has Cats?' action and change what we need for **Step 4** too.
:::

:::info Designer Shapes
The shapes for triggers and actions can help you understand how they work. 
- *Triggers* are **circles** and only have input from a *trigger event*. 
- *Condtional* actions are **diamonds** and their *condition* must evaluate to **true** for their child actions to **continue**.
- *All other* actions are squares and will always pass their **input** (with the result of their action) as **output** to their child actions.
:::

## Tagging Clips with Classifiers
The last piece of this puzzle is using the **Classify** action which *automates* adding a clip to a specific **Tag**.
1. Right-click the 'Has Cats?' diamond and select the *Add->Classify* option and a new **Classify** square will be added as a child to 'Has Cats?'
2. Select it and rename it to 'Tag to Cats'.
3. Now click the dropdown for the **Tag** parameter and select the 'Cats' tag we made earlier.<p><img src="/docs/build/img/auto_tag_cat_class_props.png" class="figure narrow"/></p>
4. Repeat (or copy/paste) steps **1-3** but from the 'Has Dogs?' *Condtional* action.<p><img src="/docs/build/img/auto_tag_cat_class_props.png" class="figure narrow"/></p>

You should something like below in the *Action Designer*:

<p><img class="figure" src="/docs/build/img/auto_tag_complete_designer.png" /></p>


## Let's try it out!
Copy the images below and check the 'Cats' and 'Dogs' tags to see the results.

:::tip External Content Drag-and-Drop 
By default you can drag any text or image to the **top of your screen** to reveal MonkeyPaste so you can *easily* **drop** content on:
1. The *Pin Tray* to **add** it new clip
2. Any *Tag* **Collection** to **link** it to that tag and **add** it as a new clip.
3. Any **Action** or **Trigger** to add the new clip but also *run* that action and its subsequent *chain of execution*.
:::

:::tip Tag-to-Action Drag-and-Drop 
You can also drop *any* **Collection** onto *any* **Action** to perform *batch processing* on **all** clips found for that tag! 🤓
:::

|Example Images| |
|---|---|
|<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Siam_lilacpoint.jpg/294px-Siam_lilacpoint.jpg" width="100"/> |<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/362px-Cat_August_2010-4.jpg"  width="100"/>|
|<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Black_Labrador_Retriever_-_Male_IMG_3323.jpg/202px-Black_Labrador_Retriever_-_Male_IMG_3323.jpg" width="100"/> |<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Huskiesatrest.jpg/290px-Huskiesatrest.jpg"  width="100"/>|<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Chin_posing.jpg/146px-Chin_posing.jpg" width="100"/> |
|<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Trillium_Poncho_cat_dog.jpg/440px-Trillium_Poncho_cat_dog.jpg" width="100"/> |<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Octopus2.jpg/440px-Octopus2.jpg" width="100"/> |
### Observations

The **last row** of the example images will have some interesting results:
1. The first image has **both** a cat and a dog which means **both** ***Conditional*** actions were **true**.
2. The last image doesn't have any cats **or** dogs so *neither* **Conditional** actions were true they were both **false**.

:::info Background
The [Image Annotator Plugin](https://www.github.com/monkeypaste/ImageAnnotator) is a simple wrapper to [YoloV8](https://yolov8.com/#:~:text=What%20is%20YOLOv8%3F,as%20a%20command%20line%20interface.). With a *very* tiny model ( ~16mbs!) trained on **80** unique objects to keep  it fast and lightweight. 

If you want to add **MORE** objects (so it can find rabbits and octopi let's say) feel free to fork the [Image Annotator Plugin](https://www.github.com/monkeypaste/ImageAnnotator) repositiory and [make your own custom analyzer!!!🤓](../plugins/plugin-development.md)
:::

:::tip
To get a much detailed analysis you can use the [Computer Vision](https://www.github.com/monkeypaste/ComputerVision) plugin for the 'Analyze Image Objects' analyzer described. 
* Requires an [Azure Cognitive Services API key](https://azure.microsoft.com/en-us/free/ai-services/)
:::



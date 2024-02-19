# Templates

Text templates are special regions of text clips that allow you to *reuse* a clip like a **snippet**. 

## Creating a Template
Open the *Text Clip Editor* (<kbd>Control</kbd> <kbd>E</kbd> or click the button in the bottom-right corner of the tile) and select the 🏷️ button from toolbar as seen below:
<p class="figure">
  <img src={require('/img/templates_editor_add_menu.png').default} />  
</p>

## Types
There are a few types of templates currently supported and more to come!


|Type|Info|Shared|
|---|---|---|
|Static| A snippet of text shared across **all clips and instances** that reference it. | ✅|
|Date Time| A shared date and/or time ***format*** so when a clip is **pasted** or **drag-and-dropped** that ***format*** will be used *against* the **current time** in its portion of the output. |✅|
|Dynamic| A snippet only reusable inside **one** clip|❌|

:::info Shared Templates Properties
When a *shared template* is created in the *Text Clip Editor* it becomes available to **all** text clips. Any changes made to a *shared template* will also propagate to **all clips**.
:::

:::warning Deleting Shared Templates
After you create a *shared template*, it will remain available even if you delete all references to it (unlike a *dynamic template*). 

The **only** way to delete a *shared template* is by clicking the **Delete All** button from the *template properties panel* as seen below:

<p class="figure">
  <img src={require('/img/templates_delete_shared.png').default} />  
</p>
:::

## Use Examples
You maybe wondering *well what's the point!?* about all these templates, well I can understand that. Here's a few examples when they could be helpful:

- Boiler-plate emails. If you made a clip of an email you send all the time that's great use case for template snippets. You could create a 'My Signature' *Static Template* for the footer and a 'Todays Date' *Date Time Template* that could be used in the header. 
- Code Snippets. If you have a block of code you use often you could turn the variable names, etc. into *dynamic template*'s so you could use it as a snippet *anywhere* unlike a snippet system for a specific IDE or code-editor.


## Coming Soon!
There's a few types of experimental templates being developed which could be added if enough interest arises, primarily *Contact Templates*

### Templated Append
An optional **before** and/or **after** template (any of the types) that gets automatically tacked onto **appended clipboard text**. 

This could be useful if you need to make a big csv list (comma separated value) from random bits of text somewhere. If you enabled *Append Insert mode* (<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>F6</kbd>) and *Auto-Copy mode* (<kbd>Control</kbd> <kbd>Shift</kbd> <kbd>F2</kbd>) then made a **after** *dynamic template* of a comma ',' you could very quickly and accurately create your csv list without all the fumbling between windows and selections, etc.
### Contacts
Like a *Date Time Template* uses a **format** against the current time. A *Contact Template* would use a **contact property** (like name, address, phone number, etc.) against a contact from your email service (Gmail or Outlook are in the works). 

This would allow you to paste some common email you need just by selecting the persons name from the *paste toolbar*. 

## Thoughts and Feedback
This idea of *Text Templates* is somewhat novel (I've never seen anyhing that does this). And I don't know how much interest people will have with them but if you have any ideas or suggestions, I'd love to hear them! 

Feel free to reach out on the [MonkeyPaste forum](https://monkeypaste.com/forum/index.php?board=1.0) 
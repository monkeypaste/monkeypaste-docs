---
sidebar_position: 4
---
# Plugins

There are 2 types of plugins that MonkeyPaste currently supports:
1. [OLE](#ole)
2. [Analyzers](#analyzers)

## OLE
OLE (or object linking and embedding) is a general term used here to describe both clipboard and drag-and-drop interaction. OLE plugins come with some set of read and/or write data formats that it is designed to interpret. 

:::info
All of MonkeyPaste's core platform integration is handled through the *Core Clipboard* plugin.
:::

## Analyzers
Analyzers open many powerful and interesting doorways to enhancing your clipboard and workflows between different applications. As their name implies, they analyze a clip's content and/or properties to create some type of useful output. 

Analyzer output can be new, generated content or meta-information about the input clip. For example translating a clip of text would create a new clip of that translation. Or running image analysis on a picture will provide a set of annotations for the picture, be it regions of interest or general information about the image that is *dependant* on the source clip. MonkeyPaste calls that information an *annotation*.

### Annotations


 
## Plugin Browser
The *plugin browser* can be accessed from the *analyzer sidebar* by click the 🧩 button found to the right of the *analzyer selector* drop-down.
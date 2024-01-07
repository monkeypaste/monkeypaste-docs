---
sidebar_position: 4
---
# Shortcuts


## Managing Shortcuts
All available shortcuts can be found in the *Settings->Shortcuts* menu. 

## Application Shortcuts

## Route Types

|Type|Description|Global|
| --- | --- | --- |
| Internal|Is only executed when app is the active application |  ❌|
| Passive | All shortcuts are passed through to active application |✅|
| Pre | The shortcut will be executed **before** the active application receives it. |✅|
| Post | The shortcut will be executed **after** the active application receives it. |✅|
| Override | The **last** key of the shortcut will be suppressed from input to the active application |✅|
| Exclusive Override | **(Experimental)** This is a special type of override mode designed for the locking keys (Num Lock, Caps Lock and Scroll Lock). It only allows **one** key (non-modifier) for its assignment but will be executed *anytime* no matter what other keys are down. This prevents the lock key from getting stuck in its lock state.|✅|



---
sidebar_position: 2
---
# Account

To be as accessible as possible **all** features are fully available in the 3 account levels that MonkeyPaste supports. However to monetize this effort and [maintaining your privacy as an upmost precedent](https://www.monkeypaste.com/privacy) MonkeyPaste uses [content *recycling*](#content-recycling) to limit its internal storage based on the account type.

:::tip Linux is free
As a nod to Linux and free-for-use software in general, MonkeyPaste will default to the *'Unlimited'* account plan for **free on all Linux platforms.**
:::

# Capacity Limits

:::tip 
If you have the 'Unlimited' plan, there is no limit to the amount of content you store. MonkeyPaste is optimized to efficiently handle ***millions*** of clips. You can upgrade [here](https://www.monkeypaste.com/upgrade).
:::


## Content Limits

Free and basic accounts content capacity (will be referred to as *content cap*) is limited to some fixed amount so that newly added clips will replace the oldest in a first-in-first-out manner. Where the [oldest](#recycling-details) clip will be moved to the [Trash](docs/collections/trash.md).

:::tip 
Adding a clip to the **Favorites** collection guarantees it will not be recycled.
:::

:::warning 
If your **Favorites** collection has reached the content cap for your account, new content will be **blocked** to ensure it isn't moved to the trash. At that point you will have to delete one yourself or [upgrade your account](https://www.monkeypaste.com/upgrade).
:::

## Trash Limits

Trash capacity works just the same as [content capacity](#content-cap) except when a clip is recycled it will be **permanently deleted**.

## Content Recycling
MonkeyPaste determines how ***old*** a clip is by its most recent activity. Here are some of the activities that will reset a clips age and lower its recycling priority:
- Adding it from the clipboard
- Generating it via an action or analyzer
- Adding or removing it to a [**Tag** collection](docs/collections/tags.md)

# Account Changes

## Upgrading
Your account can be upgraded at anytime and any block or limiting will reflect that change in realtime for you.

## Downgrading
Failure to pay or intentionally downgrading your account will have **NO** effect on the clips you have stored at that time. Only **new** clips will be considered for recycling. What you have collected while paying **will remain intact**. 

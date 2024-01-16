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
<p>
  <img src={require('/img/account_cap_protect_clip.png').default} class="figure" title="Clips tagged to favorites will never be recycled 🔒"/>  
</p> 
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

# Free Account Setup Suggestions

By default with a free account, this clip capacity stuff can get pretty frustrating but there's a few settings that can help make that restrictions a bit more *user-friendly*.

## On-Demand clipboard listening

By pausing the clipboard listener, *System Tray->Pause* a 🎯 icon will appear in the top-right of the *Pin Tray* when there is something **new** on the clipboard. 
<p><img class="figure narrow" src={require('/img/free_acct_sug_bullseye_btn.png').default} /></p>

:::tip 
You can uncheck *Settings->Preferences->Listen To Clipboard On Startup* to **always** have the clipboard listener be paused.
:::

Now the ***only*** time MonkeyPaste will read the clipboard is when you click the 🎯 button.

## Capacity Hints & Watermarks

- Capacity notifications can be permanently hidden from the 3 dots menu 
- Cap clip watermark warnings can be hidden by checking *Settings->Preferences->Hide Capacity Watermarks*

## Transitioning from free-trial

If you tried the *Unlimited* plan and didn't decide to pay for it (you *dirty dog you*) you'll probably have a fair amount of entries stored up. To keep this monetization method afloat the cap system **ensures things added to your storage with the paid plan aren not lost**. 

So let's say you had 100 clips at the end of trial. Your capacity won't go over 100 after that **but** to prevent giving trial users a **rolling** storage of 100 items, the cap system picks clips **on or after** the **trial ends** which *may* make organizing your stuff pretty confusing, I get that but there's not much that can be done beyond the tip below...

:::tip Fresh slate
You can delete your storage at any time from *Settings->Preferences->System->Delete All Clips*
:::


---
sidebar_position: 2
---
# Account

To be as accessible as possible **all** features are fully available in the 3 account levels that MonkeyPaste supports. However to monetize this effort while [maintaining your privacy as an upmost precedent](https://www.monkeypaste.com/privacy) MonkeyPaste uses [content *recycling*](#content-recycling) to limit its internal storage based on the account type.

:::tip Linux will be free
Linux support is coming soon...As a nod to Linux and free-for-use software in general, MonkeyPaste will default to the *'Unlimited'* account plan for **free on** ***all*** **Linux platforms.**
:::

## Plans

|Type|Max Clips|Max Trash|
|---|---|---|
|Free|5|20|
|Basic|1,000|∞|
|Unlimited|∞|∞|

## How to Upgrade
You can upgrade in the app from the *Settings->Account* tab and selecting *Subscriptions* on the right-hand panel. Then select 'Basic' or (preferred) 'Unlimited' plans. 

:::tip 15% Yearly Discount
Select **Yearly** from the *subscription menu* to save 15%.
:::

:::warning Downgrading
Failure to pay or intentionally downgrading your account will have **NO** effect on the clips you have stored at that time. Only **new** clips will be considered for recycling. What you have collected while paying **will remain intact**. 
:::

## Limits
### Content

Free and basic account content capacity (will now be referred to as *content cap*) is limited to [some fixed amount](#plans) so that newly added clips will replace the oldest in a **first-in-first-out** manner. Where the [oldest](#content-recycling) clip will be moved to the [Trash](docs/collections/trash.md) when any new items are added.

:::tip Favorites is your safe place
<p>
  <img src={require('/img/account_cap_protect_clip.png').default} class="figure" title="Clips tagged to favorites will never be recycled 🔒"/>  
</p> 
Adding a clip to your **Favorites** collection prevents it from getting recycled.
:::

:::warning Favorite Recycling
To avoid having to block adding new clips because of content cap, MonkePaste will **automatically** remove the oldest clip from your *Favorites* collection **if and only if its at your plans limit** (see [here](#plans) for those limits).
:::

### Trash 

Trash capacity works just the same as [content capacity](#content) except when a clip is recycled it will become ***permanently deleted***.

### Plans
|Plan|Content Limit|Trash Limit|
|---|---|---|
|Free|5|20|
|Base|1000|∞|
|Unlimited|∞|∞|

:::info Big Data, No Problem
If you have the 'Unlimited' plan, there is ***no limit*** to the amount of content you can store! MonkeyPaste is optimized to efficiently handle ***millions*** of clips!!! You can [upgrade](#how-to-upgrade) at anytime.
:::

## Content Recycling
MonkeyPaste determines how ***old*** a clip is by its most recent activity. Here are some of the activities that will reset a clips age and lower its recycling priority:
- Adding it from the clipboard
- Generating it via an [action](docs/triggers/index.md#actions) or [analyzer](docs/plugins/index.md#analyzers)
- Adding or removing it to a [**Tag** collection](docs/collections/tags.md)

## Tips for free accounts

See [here](docs/tips/free-suggestions.md) for some tips about getting the most out of MonkeyPaste with the free account.
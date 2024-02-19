# Filters

Filters are stored searches and there's 2 types:
1. [Simple Search](#simple-search-filter)
2. [Advanced](#advanced-filter)

:::tip Filter Refreshing
Some filters use the current time (like the built-in **Today** *Filter*) and clicking the *Filter* again will refresh the results.
:::

## Simple Search Filter
<p class="figure" align="left">
  <img src={require('/img/simple_search_button.png').default} width="150"/>  
</p>  
Simple search is a quick or more general type of method to filter your clips. 

:::warning Active Collection Only 
If you don't see the search (or sort) button like in the picture above, a collection must be selected.
:::


### In-Place search
There are 2 ways to reveal the simple search filter:
1. Click the 🔎 button in the top-right of the main window
2. Start typing at any time when the main window is active and no input control is in focus

:::tip Live-Search
Live-Search is an optional feature that can be enabled or disabled at anytime from the *Settings->Preferences->Search* menu
:::

### Simple Search Options
<p class="figure" align="left">
  <img src={require('/img/simple_search.png').default} width="150"/>  
</p>  
With the simple search filter expanded, options are available by clicking on the 🔎 icon.

The simple search options are broken up into 3 groups and will be used in conjunction with the text you type into the search box. The 3 groups are:
|Type|Description|Caveats|
|---|---|---|
|Fields|The actual property of the clip, its source or meta-information about it (eg. Title or annotation) to compare with the search text entered.|*None*|
|Formats|The basic format of clips to include in the filter, being text,files or images.|Format selection is **required** and attempting to de-select all 3 formats will reset the format group to default (all selected). Otherwise there would be no results.|
|Operations|These are standard matching operations you can enable to further refine the results.|Enabling *Regular Expression* will disable the other options. If you want to include case-sensitivity or whole-word matching that needs to be supplied in the provided expression.|

## Advanced Filter

Advanced filtering works by performing the **simple search filter first** then each row of advanced filters in the **order they are listed**. The final output is the result of the provided [join operation](#join-operations) of some given filter against the results of the **previous** filter. 

### Creating Advanced Filters
There are a few way to create filters but here are the most common:

#### From the *Collections Sidebar*
<p class="figure" align="left">
  <img src={require('/img/create_adv_filter.png').default} width="250"/>  
</p>  
1. Select 'Filters' or any ['🗀 Group'](docs/collections/groups.md) collection inside of 'Filters' from the *Collections* side-bar
2. Click or tap the ➕ plus button in the top right of the the *Collections* side-bar to reveal the *Add collection* pop-up menu
3. Select 'Filter'
4. A new Filter will be added to the bottom of the selected Collection.

#### By expanding a simple search 
<p class="figure" align="left">
  <img src={require('/img/create_adv_filter2.png').default} width="200"/>  
</p>  
1. [Create a simple search](#in-place-search)
2. Click the ➕ plus button to the right of the search box to reveal the *advanced search panel*
3. Click the **Save** button at the top of the panel to save the filter to the root 'Filters' collection or select another collection to discard it

#### Duplicating 
<p class="figure" align="left">
  <img src={require('/img/dup_filter_button.png').default} width="250"/>  
</p>  
With the *advanced search panel* open click the **Duplicate** button at the top of the panel (shown above) to duplicate the filter. The new filter will be added to the root 'Filters' menu using the original filter's name and the suffix ' Copy'.

:::tip Monkey See, Monkey Duplicate
MonkeyPaste comes with a handful of read-only filters out-of-the-box ('All', 'Recent' and the 3 content formats under the 'Formats' group). To experiment with these, exapnd their advanced panel menu and duplicate to extend or alter the results.
:::

### Advanced Filter Criteria Rows
Each advanced filter row (referred now as a *filter criteria*) produces results like the *simple search filter* but with a much broader range of clip and input properties to compare against.

#### Adding a row 
<p class="figure" align="left">
  <img src={require('/img/add_filter_row.png').default} width="250"/>  
</p>  
1. Hover over any criteria in the *advanced search panel* 
2. click the ➕ plus button that appears in the top-right of the item (shown above). Now the new row will be added below.

:::tip Criteria Drag-and-drop
Criteria filters can be moved or duplicated (by holding the <kbd>Control</kbd> key) using the criteria drag handle on the left-side of the filter.
:::

#### Join Operations

##### Join Types

There are 3 types of join operations available for criteria rows.

|Name|Description|Default|
|---|---|---|
|And ∩|Only results that are found in *both* the current criteria **and** the previous rolled up results rows will be included|❌|
|Or ∪|*Any* results from the previous rolled up results **or** the current criteria row will be included.|✅|
|Not ⊄|Any results found using the current criteria will be omitted|❌|

:::note Or is default
Since 'Or' is the default join type and to keep everything a little more tidy, selecting it from the dropdown will hide the *criteria join type menu*. You just need to select the ⋮ 3 dots menu again to reveal it again.
:::

##### Changing the type
<p class="figure spaced" align="center">
  <img src={require('/img/join_op_button.png').default} height="100"/>
  <img src={require('/img/join_op_dropdown.png').default} height="100"/>  
</p> 
1. Hover over the criteria 
2. Click the ⋮ 3 dots on top-right of the row (shown above on the left) to reveal the *criteria join type menu* on the left (shown above on the right).
3. Now select one of the join operations.
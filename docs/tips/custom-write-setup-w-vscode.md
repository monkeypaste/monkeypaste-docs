# VS Code Interop
In most applications pasting or drag-and-drop from MonkeyPaste works as you would expect. But some applications, like [VS Code](https://code.visualstudio.com) prefer certain clipboard formats over others.

<p align="center">
  <video controls height="300">
    <source src={require('/videos/vs_code_custom_write_from_paste_bar.mp4').default}/>
  </video>
</p>

By default if you try to paste text from MonkeyPaste into VS Code it will paste a link to a temporary file which is *probably* not what you want! 

To fix this:
1. Reveal MonkeyPaste with VS Code active.
2. Double-click the clip you want to paste to show the paste bar.
3. Click the drop-down arrow next to the paste button.
:::info
This will show VS Codes clipboard format settings. By default all formats are enabled.
:::
4. Uncheck the 'Write' option.
:::info
At this point, clicking 'Paste' will paste **nothing** since all write formats are disabled.
:::
5. This will uncheck all write formats. Now finally check the 'Text' checkbox under the 'Write' menu to only allow text to be pasted.

The menu should now look something like below and only text will be pasted or dropped into VS Code:

<p align="center">
  <img src={require('/img/ole_format_button_write_menu_text_button.png').default} width="300"/>  
</p>  


# Material-UI - Points Taken
## Typography
- Used mainly fr text and text tags are not used in this case.
- It is mostly used for specifying the text type (header or paragraphy).
- By default, the output is a paragraphy
- You need to specify the variant type of the output text by using the folowing attributes:

    // variant="h1" color="primary"  - Header tag h1
    // variant="h2" color="primary"  - Header tag h2
    // variant="subtitle1" - Subheader 1
    // variant="subtitle2" - Subheader 1
    // variant="body1" - Paragraphy 1
    // variant="body2" - Paragraphy 2
    // variant="button" display="block"  - button text
    // variant="caption" display="block"  - caption text
    // variant="overline" display="block"  - overline text
- Coloring can be done by using the color attribute:
    = color="primary" or "secondary"
    = color="textPrimary" or "textSecondary"
- The attribute 'noWrap', makes the text not fall in another line and does not add
  a scroll. It only outputs 3 dots at the end.
- Read more about the elements in the following link (https://material-ui.com/api/typography/)

## Buttons
- Buttons offer interaction of the app or system with the user.
- Types of Buttons in material-UI are
1. Contained Buttons - Has the attribute variant called contained. Meaning the background of the button will show.
2. Text Buttons - Buttons that look like normal text. But have the functionality of a button
3. Outlined Buttons - Has no background, but only shows the border lines of the buttons.
4. Handling Buttons - These are buttons that holds functions in them.
5. Size Buttons - Buttons that need to be sized should carry the attribute size="small" or "medium" or "large".
6. Buttons with Icons & Label - These are buttons that holds an Icon inside.
        - DeleteIcon from
        - CloudUploadIcon
        - KeyboardVoiceIcon
        - Icon from
        - SaveIcon from
7. Icon Buttons - These are Icons that function like a button. They have an icon image.
8. Customized Buttons - Bottons that can be customized for personal standards.
9. Buttonbase
    // Read more about the buttons in the following link(https://mui.com/components/buttons/#button)

## Icons
- There are over 1780 icons that can be used for various functionality purpose and easy identification purpose for the user. It includes arrows, figures, cars, locations icons, and many others.
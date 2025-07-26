# Custom Dropdown Component

A sleek, customizable dropdown component with a modern design. This responsive component features smooth animations and multiple interaction states for an enhanced user experience.

## Features

- 🔄 Four distinct states: default, open (no selection), selected, and open (with selection)
- 🎨 Smooth animations for opening/closing transitions
- 📱 Fully responsive design
- 🎯 Interactive demo with real-time state tracking
- ⌨️ Keyboard support (ESC to close)
- ✨ Visual feedback on hover and selection
- 📝 Comprehensive documentation with visual examples

## Live Demo

[View Live Demo](https://nurf21.github.io/custom-dropdown)

## Customization

You can customize the dropdown by overriding these CSS variables:

```css
:root {
  --dropdown-bg: #2a2a3c;
  --dropdown-border: #3d3d52;
  --dropdown-text: #e0e0e8;
  --dropdown-hover: #323247;
  --dropdown-selected-bg: #3a2e6d;
  --dropdown-selected-text: #9a86fd;
  --dropdown-accent: #7b68ee;
}
```

## States

| State | Description |
|-------|-------------|
| **Default** | Shows placeholder text with down arrow |
| **Open (No Selection)** | Dropdown open with all options visible |
| **Selected** | Shows selected item with down arrow |
| **Open (With Selection)** | Dropdown open with selected item highlighted |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

- Font Awesome for icons
- [roadmap.sh](https://roadmap.sh/projects/custom-dropdown) for project idea
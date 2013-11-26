# Responsive Menu

A jQuery + CSS multi-level responsive menu.

Built for Wordpress custom menus but can be used anywhere (see example markup).

## Usage

Follow these steps to use the plugin:

1. Link scripts in `<head>`:
```html
	<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
	<script src="responsive-menu.min.js"></script>
```

2. Add markup:
```html
	<div id="primary-nav-button"><a href="#">Menu</a></div>
	<nav id="primary-nav">
		<ul class="menu">
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
			<li><a href="#">Blog</a></li>
			<li><a href="#">Store</a>
				<ul class="sub-menu">
					<li><a href="#">Latest Products</a></li>
				</ul>
			</li>
		</ul>
	</nav>
```

3. Hook up the plugin before `</body>`:
```html
	<script>
		jQuery(function ($) {
			$('#primary-nav').responsivemenu(); // Replace 'primary-nav' with your id
		});
	</script>
```

## Options

### width
Responsive width breakpoint that switches between desktop and mobile menu.

### button
The id of the menu button.

### animation
Menu animations.
#### effect
Animation effect\. Accepts "slide" or "fade"; anything else will use no animation.
#### show
Show animation speed (ms).
#### hide
Hide animation speed (ms).

### selected
Class applied to selected menu items\. Useful for CSS styling.

### arrow
Class used for dropdown arrow\. Useful for CSS styling.

**Example:**
```javascript
jQuery(function ($) {
	$('#primary-nav').responsivemenu({
		width: 480,
		button: 'primary-nav-button',
		animation : {
			effect: 'slide',
			show: 100,
			hide: 100
		},
		selected: 'selected',
		arrow: 'downarrow'
	});
});
```
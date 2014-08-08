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
 <button id="primary-nav-button" href="#">Menu</button>
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
 		$('#primary-nav').responsivemenu(); // Replace 'primary-nav' with your menu id
 	});
 </script>
 ```

## Options

### responsive
Enables responsive functions, such as adding/removing classes based on viewport width\. Disable this for simple drop-down menus.
*Defaults to true*

### width
Responsive width breakpoint that switches between desktop and mobile menu.
*Defaults to 480*

### button
The id of the menu button.
*Defaults to {menu-id}+'-button'.*

### animation
Menu animations.
#### effect
Animation effect\. Accepts "slide" or "fade"; anything else will use no animation.
*Defaults to 'slide'*
#### show
Show animation speed (ms).
*Defaults to 100*
#### hide
Hide animation speed (ms).
*Defaults to 100*

### selected
Class applied to selected menu items\. Useful for CSS styling.
*Defaults to 'selected'*

### arrow
Class used for dropdown arrow\. Useful for CSS styling.
*Defaults to 'downarrow'*

**Example:**
```javascript
jQuery(function ($) {
	$('#primary-nav').responsivemenu({
		responsive: true,
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
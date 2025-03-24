# ACF Lorem Ipsum

work in progress. Currently works specifically for ACF groups inside flexible content fields by adding a 'generate dummy content' button to each block.

Currently generates content for images, links, wysiwyg, oEmbed, file (assumes .mp4), and text/text area fields.

## usage

inside functions.php, enqueue the script in /wp-admin via enqueue_custom_admin_script hook.

```
function enqueue_custom_admin_script()
{
	wp_enqueue_script_module('flexible-content-dummy-content-button', get_template_directory_uri() . '/path/to/acf-lorem-ipsum/index.js', array(), filemtime(get_template_directory() . '/path/to/acf-lorem-ipsum/index.js'));
}
add_action('acf/input/admin_enqueue_scripts', 'enqueue_custom_admin_script');
```

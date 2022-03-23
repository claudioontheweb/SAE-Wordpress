<?php
/**
 * Oscura: Default posts query
 *
 * @package Oscura
 */

return array(
	'title'      => __( 'Default posts query', 'oscura' ),
	'categories' => array( 'oscura-query' ),
	'blockTypes' => array( 'core/query' ),
	'content'    => '<!-- wp:query {"queryId":2,"query":{"perPage":10,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true},"displayLayout":{"type":"flex","columns":2},"layout":{"inherit":false}} -->
	<div class="wp-block-query"><!-- wp:post-template -->
	<!-- wp:group {"layout":{"inherit":true}} -->
	<div class="wp-block-group"><!-- wp:post-featured-image {"align":"wide","className":"is-style-default"} /-->
	
	<!-- wp:group {"align":"wide"} -->
	<div class="wp-block-group alignwide"><!-- wp:post-terms {"term":"category","textAlign":"left","separator":"","className":"is-style-labels","fontSize":"small"} /-->
	
	<!-- wp:post-date {"style":{"typography":{"fontStyle":"italic","fontWeight":"400"}}} /--></div>
	<!-- /wp:group -->
	
	<!-- wp:post-title {"isLink":true,"align":"wide"} /-->
	
	<!-- wp:columns {"align":"wide"} -->
	<div class="wp-block-columns alignwide"><!-- wp:column {"width":"650px"} -->
	<div class="wp-block-column" style="flex-basis:650px"><!-- wp:post-excerpt /--></div>
	<!-- /wp:column -->
	
	<!-- wp:column {"width":""} -->
	<div class="wp-block-column"></div>
	<!-- /wp:column --></div>
	<!-- /wp:columns -->
	
	<!-- wp:spacer {"height":"50px"} -->
	<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer --></div>
	<!-- /wp:group -->
	<!-- /wp:post-template -->
	
	<!-- wp:query-pagination {"align":"wide","layout":{"type":"flex","justifyContent":"space-between"}} -->
	<!-- wp:query-pagination-previous {"fontSize":"medium"} /-->
	
	<!-- wp:query-pagination-numbers /-->
	
	<!-- wp:query-pagination-next {"fontSize":"medium"} /-->
	<!-- /wp:query-pagination --></div>
	<!-- /wp:query -->',
);

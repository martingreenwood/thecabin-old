<?php
/**
 * The template for displaying front page
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package bristles
 */

get_header('blank'); ?>

	<center>
		<header>
			<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/logo-w.svg" width="400" style="display:inline-block">
		</header>

		<div id="primary" class="content-area">
			
			<h1>NEW WEBSITE COMING SOON</h1>

			<ul class="social">
				<li>
					<a href="https://www.facebook.com/thecabinretail/">
						<i class="fa fa-facebook" aria-hidden="true"></i>
					</a>
				</li>			
				<li>
					<a href="https://www.twitter.com/thecabinretail">
						<i class="fa fa-twitter" aria-hidden="true"></i>
					</a>
				</li>			
				<li>
					<a href="https://www.instagram.com/thecabinretail">
						<i class="fa fa-instagram" aria-hidden="true"></i>
					</a>
				</li>			
			</ul>

			<h3>
				The Cabin (Worcester) Ltd<br>
				Trinity Street, Worcester, WR1 2PW<br>
			</h3>
			<h3>01905 612525 / info@thecabin.co.uk</h3>

			<?php
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content', 'page' );

			endwhile; // End of the loop.
			?>
		</div>
	</center>

<?php
get_footer('blank');

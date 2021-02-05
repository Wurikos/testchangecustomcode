import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<script
				async={true}
				src={"src"}
				type={"type"}
				crossorigin={"crossorigin"}
				integrity={"integrity"}
				referrerpolicy={"referrerpolicy"}
				place={"endOfHead"}
				rawKey={"601d1a667c061256e941fff6"}
			>
				{"console.log(\"Test\")"}
			</script>
			<link
				href={"fonts.googleapis.com"}
				rel={"stylesheet"}
				sizes={"300px"}
				type={"type"}
				media={"all"}
				as={"some as"}
				crossorigin={"crossign"}
				place={"endOfHead"}
				rawKey={"601d1abd2ab2d8bd908ce6bd"}
			/>
			<meta
				charset={"utf8"}
				name={"keywords"}
				content={"some value"}
				http-equiv={"some hhtp"}
				itemprop={"some itemprops"}
				place={"endOfHead"}
				rawKey={"601d1b3dc0c791e22903161b"}
			/>
		</RawHtml>
	</Theme>;
});
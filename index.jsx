import React from "react";

const Editable = ({
	children,
	editable = true,
	rootSelector = "#root",
	linksRoot = "/",
	onChange = () => {}
}) => {

	const replaceLocalLinks = html_string => {
		const html = new DOMParser().parseFromString(html_string, 'text/html');
	
		const domain = window.location.protocol + '//' + window.location.host;
		const links = html.querySelectorAll(`a[href^="${linksRoot}"]`);
		links.forEach(link => {
		  link.href = link.href.replace(/^\.\//, domain + '/');
		});
	  
		const images = html.querySelectorAll(`img[src^="${linksRoot}"]`);
		images.forEach(image => {
		  image.src = image.src.replace(/^\.\//, domain + '/');
		});
	
		const headLinks = html.querySelectorAll(`link[href^="${linksRoot}"]`);
		headLinks.forEach(link => {
			link.href = link.href.replace(/^\.\//, domain + '/');
		});
	
		const scripts = html.querySelectorAll(`script[src^="${linksRoot}"]`);
		scripts.forEach(script => {
			script.src = script.src.replace(/^\.\//, domain + '/');
		});
		return html.documentElement.outerHTML;
	};

	const convertRawHtmlToStyledHtml = rawHtml => {
		const pageContent = document.querySelector("html").cloneNode(true);
		pageContent.querySelector(rootSelector).innerHTML = rawHtml;
		const styledHtml = replaceLocalLinks(pageContent.innerHTML);
		return styledHtml;
	};

  	return (
    	<div
			contentEditable={editable}
			onInput={event => {
				const rawHtml = event.target.innerHTML;
				const styledHtml = convertRawHtmlToStyledHtml(rawHtml);
				onChange(rawHtml, styledHtml);
			}}
		>
			{children}
		</div>
  	);
};

export default Editable;

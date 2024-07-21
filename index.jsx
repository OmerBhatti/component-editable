import React from "react";

const Editable = ({
	children,
	editable = true,
	onChange = () => {} }
) => {

	const convertRawHtmlToStyledHtml = rawHtml => {
		const pageContent = document.querySelector("html").cloneNode(true);
		pageContent.querySelector("#root").innerHTML = rawHtml;
		const styledHtml = pageContent.innerHTML;
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

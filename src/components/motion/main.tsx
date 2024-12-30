import {
	createMotionA,
	createMotionArea,
	createMotionArticle,
	createMotionAside,
	createMotionAudio,
	createMotionBlockquote,
	createMotionButton,
	createMotionCanvas,
	createMotionCaption,
	createMotionCite,
	createMotionCode,
	createMotionCol,
	createMotionColgroup,
	createMotionDetails,
	createMotionDialog,
	createMotionDiv,
	createMotionEm,
	createMotionEmbed,
	createMotionFieldset,
	createMotionFigcaption,
	createMotionFooter,
	createMotionForm,
	createMotionH1,
	createMotionHeader,
	createMotionIframe,
	createMotionImg,
	createMotionInput,
	createMotionLabel,
	createMotionLegend,
	createMotionLi,
	createMotionMap,
	createMotionMenu,
	createMotionMeter,
	createMotionNav,
	createMotionObject,
	createMotionOption,
	createMotionP,
	createMotionPicture,
	createMotionPre,
	createMotionProgress,
	createMotionSection,
	createMotionSelect,
	createMotionSource,
	createMotionSpan,
	createMotionStrong,
	createMotionSub,
	createMotionSummary,
	createMotionSup,
	createMotionSvg,
	createMotionTable,
	createMotionTbody,
	createMotionTd,
	createMotionTextarea,
	createMotionTfoot,
	createMotionTh,
	createMotionThead,
	createMotionTr,
	createMotionTrack,
	createMotionUl,
	createMotionVideo,
} from "./create-element";

export const motion: Record<string, unknown> = {
	div: createMotionDiv,
	p: createMotionP,
	span: createMotionSpan,
	a: createMotionA,
	h1: createMotionH1,
	button: createMotionButton,
	input: createMotionInput,
	img: createMotionImg,
	ul: createMotionUl,
	li: createMotionLi,
	label: createMotionLabel,
	form: createMotionForm,
	select: createMotionSelect,
	option: createMotionOption,
	textarea: createMotionTextarea,
	table: createMotionTable,
	tr: createMotionTr,
	td: createMotionTd,
	th: createMotionTh,
	thead: createMotionThead,
	tbody: createMotionTbody,
	tfoot: createMotionTfoot,
	fieldset: createMotionFieldset,
	legend: createMotionLegend,
	strong: createMotionStrong,
	em: createMotionEm,
	blockquote: createMotionBlockquote,
	cite: createMotionCite,
	code: createMotionCode,
	pre: createMotionPre,
	sub: createMotionSub,
	sup: createMotionSup,
	nav: createMotionNav,
	header: createMotionHeader,
	footer: createMotionFooter,
	section: createMotionSection,
	article: createMotionArticle,
	aside: createMotionAside,
	video: createMotionVideo,
	audio: createMotionAudio,
	canvas: createMotionCanvas,
	progress: createMotionProgress,
	meter: createMotionMeter,
	details: createMotionDetails,
	summary: createMotionSummary,
	menu: createMotionMenu,
	dialog: createMotionDialog,
	iframe: createMotionIframe,
	embed: createMotionEmbed,
	object: createMotionObject,
	picture: createMotionPicture,
	source: createMotionSource,
	track: createMotionTrack,
	map: createMotionMap,
	area: createMotionArea,
	svg: createMotionSvg,
	col: createMotionCol,
	colgroup: createMotionColgroup,
	caption: createMotionCaption,
	figcaption: createMotionFigcaption,
};
import { component$ } from "@qwik.dev/core";
import type { DocumentHead } from "@qwik.dev/router";
import { motion } from "~/components/motion/main";

export default component$(() => {
	return (
		<>
			<h1>Hi 👋</h1>
			<div>
				Can't wait to see what you build with qwik!
				<br />
				Happy coding.
			</div>
			<motion.div
				animate={{ x: 50, y: 500, rotate: 45 }}
				options={{
					duration: 0.5,
					easing: "ease-in-out",
					repeat: 0,
					direction: "alternate",
				}}
			>
				hey
			</motion.div>
		</>
	);
});

export const head: DocumentHead = {
	title: "Welcome to Qwik",
	meta: [
		{
			name: "description",
			content: "Qwik site description",
		},
	],
};

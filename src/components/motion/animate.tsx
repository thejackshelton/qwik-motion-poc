import { component$, Slot, useId, useSignal } from "@qwik.dev/core";
import {
	type DOMKeyframesDefinition,
	type DynamicAnimationOptions,
} from "motion";
import { GetElement } from "./get-element";

export interface AnimatedMotionProps {
	animate: DOMKeyframesDefinition;
	options?: DynamicAnimationOptions;
	element: keyof HTMLElementTagNameMap | "svg";
}

export const AnimatedMotion = component$<AnimatedMotionProps>(
	({ element, animate: animateProps, options, ...attributes }) => {
		const ref = useSignal<Element>();
		const localId = useId();

		return (
			<>
				<GetElement
					element={element}
					ref={ref}
					props={attributes}
					data-local-id={localId}
				>
					<Slot />
				</GetElement>
				<script
					dangerouslySetInnerHTML={`
                        (async () => {
                            const element = document.querySelector('[data-local-id="${localId}"]');
                            if (element) {
                                const { animate } = await import('/node_modules/.vite/deps/motion.js');
                                animate(element, ${JSON.stringify(animateProps)}, ${JSON.stringify(options)});
                            }
                        })();
                    `}
				/>
			</>
		);
	},
);

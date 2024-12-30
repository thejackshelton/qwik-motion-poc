import { component$, Slot, useSignal, useVisibleTask$ } from "@qwik.dev/core";
import {
	animate,
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

		useVisibleTask$(() => {
			if (!ref.value) return;
			animate(ref.value, animateProps, options);
		});

		return (
			<GetElement element={element} ref={ref} props={attributes}>
				<Slot />
			</GetElement>
		);
	},
);

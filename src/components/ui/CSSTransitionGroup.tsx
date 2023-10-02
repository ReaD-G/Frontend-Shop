import { Children, PropsWithChildren, cloneElement, useRef } from 'react'
import { CSSTransition as _CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

const CSSTransition = (props: PropsWithChildren<CSSTransitionProps>) => {
	const nodeRef = useRef(null)

	return (
		<_CSSTransition {...props} nodeRef={nodeRef}>
			{/* @ts-expect-error: Let's ignore a single compiler error like this unreachable code */}
			<>
				{Children.map(props.children, child => {
					// @ts-ignore
					return cloneElement(child, { ref: nodeRef })
				})}
			</>
		</_CSSTransition>
	)
}

export default CSSTransition

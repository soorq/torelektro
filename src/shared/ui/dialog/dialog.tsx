'use client';

import { X } from '@phosphor-icons/react/dist/ssr';
import * as Dialog from '@radix-ui/react-dialog';
import * as React from 'react';
import './dialog.scss';

const Modal = Dialog.Root;

const ModalTrigger = Dialog.Trigger;

const ModalContent = React.forwardRef<
	React.ElementRef<typeof Dialog.Content>,
	React.ComponentPropsWithoutRef<typeof Dialog.Content>
>(({ className, children, ...props }, ref) => {
	return (
		<Dialog.Portal>
			<Dialog.Overlay {...props} className={`${className}`}>
				<Dialog.Content {...props} ref={ref} className={`popup__wrapper`}>
					<Dialog.Close className='popup__close' asChild>
						<button aria-label='закрыть'>
							<X weight='regular' size={30} fill='#fff' className='' />
						</button>
					</Dialog.Close>
					{children}
				</Dialog.Content>
			</Dialog.Overlay>
		</Dialog.Portal>
	);
});

export { Modal, ModalTrigger, ModalContent };

'use client';

import { X } from '@phosphor-icons/react/dist/ssr';
import * as Dialog from '@radix-ui/react-dialog';
import * as React from 'react';
import './dialog.scss';

const ModalTitle = Dialog.Title;
const ModalDescription = Dialog.Description;

const Modal = Dialog.Root;

const ModalTrigger = React.forwardRef<
	React.ElementRef<typeof Dialog.Trigger>,
	React.ComponentPropsWithoutRef<typeof Dialog.Trigger>
>(({ children, className, ...props }, ref) => (
	<Dialog.Trigger ref={ref} className={`${className ? className : 'trigger'}`} {...props}>
		{children}
	</Dialog.Trigger>
));

ModalTrigger.displayName = 'ModalTrigger';

const ModalContent = React.forwardRef<
	React.ElementRef<typeof Dialog.Content>,
	React.ComponentPropsWithoutRef<typeof Dialog.Content>
>(({ className, children, ...props }, ref) => {
	return (
		<Dialog.Portal>
			<Dialog.Overlay className='overlay' />
			<Dialog.Content {...props} ref={ref} className={`${className} content`}>
				<Dialog.Close className='close' asChild>
					<button aria-label='закрыть'>
						<X className='close__icon' weight='bold' size={25} />
					</button>
				</Dialog.Close>
				{children}
			</Dialog.Content>
		</Dialog.Portal>
	);
});

ModalContent.displayName = 'ModalContent';

export { Modal, ModalTitle, ModalDescription, ModalTrigger, ModalContent };

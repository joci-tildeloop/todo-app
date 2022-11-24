export const selectInputText = (event: FocusEvent) => {
	(event?.target as HTMLInputElement).select();
};

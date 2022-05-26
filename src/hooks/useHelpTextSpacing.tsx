/**
 * Gets appropiate spacing for the help text under an Input field
 * @param message string
 * @param threshold number - n. of characters to determine the n. of lines
 * @param small number
 * @param large number
 * @returns { helpTextSpacing: number }
 */
export const useHelpTextSpacing = ({ message = '', threshold = 43, small = 2, large = 8 }) => ({
  helpTextSpacing: message.length > threshold ? large : small,
});

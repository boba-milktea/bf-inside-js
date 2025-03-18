export const pyramid = (text) => {
  let savedText = '';

  for (let i = 0; i < text.length; i++) {
    savedText += text.substring(i) + '\n';
  }
  return savedText;
};

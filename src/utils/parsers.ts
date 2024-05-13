export const parsePhoneNumber = (str: string) => {
  const singleFormattedStr = str.replace(/[.-]/g, ' ');

  const [phoneNumber, extension] = singleFormattedStr.split('x');

  return {
    phoneNumber: phoneNumber,
    extension: `+${extension?.trim() || 0}`,
  };
}

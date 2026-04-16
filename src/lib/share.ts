export function getShareWhatsAppLink(productName: string, _image: string, productUrl: string): string {
  const message = encodeURIComponent(
    `Olha só essa ${productName} 😍\n\n ${productUrl}`
  );
  return `https://wa.me/?text=${message}`;
}

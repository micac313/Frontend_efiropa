import { generateSalePDF } from "../utils/pdfGenerator";

const handleConfirmSale = async () => {
  const saleResponse = await createSale({ items: cartItems });
  if (saleResponse?.data) {
    const pdf = generateSalePDF({ sale: saleResponse.data });
    pdf.save(`boleta_${saleResponse.data.id || Date.now()}.pdf`);
    enqueueSnackbar("Venta registrada y boleta generada ✅", { variant: "success" });
  }
};

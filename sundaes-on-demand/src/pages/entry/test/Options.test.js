import { render, screen } from "@testing-library/react";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";

import Options from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((img) => img.getAttribute("alt"));
  expect(altText).toEqual(["Vanilla scoop", "Chocolate scoop"]);
});

test("Displays image for each toppings option from server", async () => {
  render(<Options optionType="toppings" />, { wrapper: OrderDetailsProvider });

  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  const altText = toppingImages.map((img) => img.getAttribute("alt"));
  expect(altText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});

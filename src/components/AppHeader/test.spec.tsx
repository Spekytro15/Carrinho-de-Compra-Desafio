import { render, screen } from "@testing-library/react";
import Header from "@/components/AppHeader";

test("Title", () => {
  const { getByText } = render(<Header />);

  expect(getByText("mks sistemas")).toBeInTheDocument();
});

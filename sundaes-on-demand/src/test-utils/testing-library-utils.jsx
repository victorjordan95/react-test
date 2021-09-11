import { render } from '@testing-library/react';
import { OrderDetailsProvider } from '../contexts/OrderDetails';

const renderWithContext = (ui, options) => {
  return render(ui, { wrapper: OrderDetailsProvider, ...options });
}

// re-export everything
export * from '@testing-library/react';

// Override render function to provide OrderDetails context
export { renderWithContext as render };
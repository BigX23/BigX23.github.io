import { describe, it, expect, vi, beforeEach } from 'vitest';

const render = vi.fn();
const createRoot = vi.fn(() => ({ render }));

vi.mock('react-dom/client', () => ({ createRoot }));

describe('main entry', () => {
  beforeEach(() => {
    render.mockClear();
    createRoot.mockClear();
  });

  it('mounts the App into #root when the module is imported', async () => {
    document.body.innerHTML = '<div id="root"></div>';
    await import('./main');
    expect(createRoot).toHaveBeenCalledTimes(1);
    expect(render).toHaveBeenCalledTimes(1);
  });

  it('throws a helpful error when the root element is missing', async () => {
    const { mount } = await import('./main');
    expect(() => mount(null)).toThrow('Root element #root not found');
  });
});

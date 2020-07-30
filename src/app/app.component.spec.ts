// Component class testing

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let comp: AppComponent;
  beforeEach(() => {
    comp = new AppComponent();
  });

  it('#clicked() should toggle #isOn', () => {
    expect(comp.isOn).toBe(false, 'off at first');

    comp.clicked();
    expect(comp.isOn).toBe(true, 'on after click');

    comp.clicked();
    expect(comp.isOn).toBe(false, 'off after second clicked');
  });

  it('#clicked() should set #message to "is on"', () => {
    expect(comp.message).toMatch(/is off/i, 'off at first');

    comp.clicked();
    expect(comp.message).toMatch(/is on/i, 'on after clicked');
  });
});

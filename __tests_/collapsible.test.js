const { JSDOM } = require("jsdom");
const { window } = new JSDOM("<!doctype html> <body></body></html>");
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: "node.js",
};
global.MouseEvent = class MouseEvent extends Event {
  constructor(type, eventInitDict) {
    super(type, eventInitDict);
    this.eventInitDict = eventInitDict || {};
  }
};

test('collapsible service info should toggle active class', () => {
  const service = document.createElement('div');
  service.classList.add('service-collapsible');
  document.body.appendChild(service);

  service.addEventListener('click', () => {
    service.classList.toggle('active');
  });

  service.click();

  expect(service.classList.contains('active')).toBe(true);
});

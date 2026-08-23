export async function loadComponents(components) {
  await Promise.all(Object.entries(components).map(async ([selector, path]) => {
    const target = document.querySelector(selector);
    if (!target) return;
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Failed to load component: ${path}`);
    target.innerHTML = await response.text();
  }));
}

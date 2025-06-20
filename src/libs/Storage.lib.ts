function set(key: string, item: any) {
  if (!key) return;
  try {
    const jsonItem = JSON.stringify(item);
    localStorage.setItem(key, jsonItem);
    return item;
  } catch (e) {
    console.log(e);
  }
}

function get(key: string) {
  if (!key) return;
  try {
    return JSON.parse(localStorage.getItem(key) || 'null');
  } catch (e) {
    if (e instanceof Error) console.log(e);
    return;
  }
}

function init(key: string, item: any) {
  if (!key) set('model', {});
  try {
    if (!get(key)) set(key, item);
  } catch (e) {
    if (e instanceof Error) console.log(e.message);
  }
}

function remove(key: string) {
  localStorage.removeItem(key || '');
}

const Storage = {
  init,
  set,
  get,
  remove,
};

export default Storage;

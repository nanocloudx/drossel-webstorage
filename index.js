class DrosselWebStorage {
  /**
   * drossel web storage
   * @param {string} [namespace]
   * @param {boolean} [isSessionStorage = false]
   * @constructor
   */
  constructor(namespace, isSessionStorage = false) {
    if (!namespace) {
      throw new Error('drosselWebStorage: namespace arguments is required.');
      return;
    }
    this.namespace = String(namespace);
    this.storage = isSessionStorage ? sessionStorage : localStorage;
  }

  /**
   * save
   * @param {string} [key]
   * @param {string} [value = null]
   */
  save(key, value = null) {
    if (!key || typeof key !== 'string') {
      throw new Error('drosselWebStorage: key arguments is not valid.');
      return;
    }
    this.storage.setItem(this.__getFullKey(key), JSON.stringify(value));
    return true;
  }

  /**
   * load
   * @param {string} [key]
   */
  load(key) {
    if (!key || typeof key !== 'string') {
      throw new Error('drosselWebStorage: key arguments is not valid.');
      return;
    }
    return JSON.parse(this.storage.getItem(this.__getFullKey(key)));
  }

  /**
   * @param {string} [key]
   */
  remove(key) {
    if (!key || typeof key !== 'string') {
      throw new Error('drosselWebStorage: key arguments is not valid.');
      return;
    }
    this.storage.removeItem(this.__getFullKey(key));
    return null;
  }

  /**
   * exists
   * @param {string} [key]
   */
  exists(key) {
    if (!key || typeof key !== 'string') {
      throw new Error('drosselWebStorage: key arguments is not valid.');
      return;
    }
    return !!this.storage.getItem(this.__getFullKey(key));
  }

  /**
   * remove all
   */
  removeAll() {
    this.__getSelfKeys().forEach((key) => {
      this.storage.removeItem(key);
    });
    return null;
  }

  /**
   * load all
   */
  loadAll() {
    let obj = {};
    this.__getSelfKeys().forEach((key) => {
      obj[key.slice(this.namespace.length + 1)] = JSON.parse(this.storage.getItem(key));
    });
    return obj;
  }

  /**
   * get length
   */
  get length() {
    return this.__getSelfKeys().length;
  }

  /**
   * @private
   */
  __getFullKey(key) {
    if (!this.namespace) {
      return String(key);
    }
    return this.namespace + '.' + String(key);
  }

  /**
   * @private
   */
  __getSelfKeys() {
    return Object.keys(this.storage).filter((key) => !!key.match(new RegExp(this.namespace, 'y')));
  }
}

module.exports = DrosselWebStorage;

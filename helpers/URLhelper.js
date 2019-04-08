'use sctrict';

class URLHelper {
  constructor(config) {
    this.base = config.url.base;
    this.extensions = config.url.extensions;
  }

  buildFullUrls() {
    const fullUrl = [];
    this.extensions.forEach(extension => fullUrl.push(`${this.base}${extension}`));
    return fullUrl;
  }
}

module.exports = URLHelper;

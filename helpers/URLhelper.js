'use sctrict';

class URLHelper {
  constructor(config) {
    this.base = config.url.base;
    this.extensions = config.url.extensions;
    this.subservices = config.url.subservices;
  }

  buildFullUrls() {
    const fullUrl = [];
    this.extensions.forEach(extension => fullUrl.push(`${this.base}${extension}`));
    return fullUrl;
  }

  buildSubServiceUrls() {
    const fullUrl = [];
    this.subservices.forEach(subservice => fullUrl.push(`${this.base}services/${subservice}`));
    return fullUrl;
  }
}

module.exports = URLHelper;

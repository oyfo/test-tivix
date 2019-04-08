'use sctrict';

/* eslint-disable no-unused-expressions */
const fs = require('fs');
const { expect } = require('chai');
const request = require('request');
const URLHelper = require('./../helpers/URLhelper');


let config = process.env.npm_config_config || 'tuvix_test_env';
config = JSON.parse(fs.readFileSync(`${__dirname}/../config/${config}.json`));

describe('TC-01 Tivix smoke test', () => {
  const urlHelper = new URLHelper(config);
  const urls = urlHelper.buildFullUrls();
  urls.forEach((url) => {
    it(`Curling ${url} should return 200`, (done) => {
      request(url, (err, resp) => {
        expect(err).to.be.null;
        expect(resp.statusCode).to.equal(200);
        done(err);
      });
    });
  });

  // after((done) => {
  //    done();
  // });
});

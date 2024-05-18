module.exports = {
  rules: {
    'no-duplicate-selectors': true,
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless'],
        ignore: ['after-comment', 'first-nested'],
        severity: 'warning',
      },
    ],
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property'],
        ignore: ['after-comment', 'first-nested', 'inside-single-line-block'],
        severity: 'warning',
      },
    ],
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration'],
        ignore: ['after-comment', 'first-nested', 'inside-single-line-block'],
        severity: 'warning',
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
        severity: 'warning',
      },
    ],
  },
};
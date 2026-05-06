// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('isPhoneNumber', () => {
  test('returns true for (xxx) xxx-xxxx format', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('returns true for xxx-xxx-xxxx format', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });

  test('returns false when digits have no separators', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
  });

  test('returns false for incomplete final group', () => {
    expect(isPhoneNumber('123-456-789')).toBe(false);
  });
});

describe('isEmail', () => {
  test('returns true for a basic valid email', () => {
    expect(isEmail('user@test.com')).toBe(true);
  });

  test('returns true when domain contains underscore', () => {
    expect(isEmail('name@my_domain.org')).toBe(true);
  });

  test('returns false when @ is missing', () => {
    expect(isEmail('usertest.com')).toBe(false);
  });

  test('returns false for top-level domain longer than 3', () => {
    expect(isEmail('user@test.comm')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('returns true for valid alphanumeric password', () => {
    expect(isStrongPassword('Abcd1234')).toBe(true);
  });

  test('returns true for valid password with underscore', () => {
    expect(isStrongPassword('a_bcdef')).toBe(true);
  });

  test('returns false when first character is not a letter', () => {
    expect(isStrongPassword('1abcde')).toBe(false);
  });

  test('returns false when fewer than 4 characters', () => {
    expect(isStrongPassword('Ab1')).toBe(false);
  });
});

describe('isDate', () => {
  test('returns true for one-digit month/day date', () => {
    expect(isDate('1/2/2024')).toBe(true);
  });

  test('returns true for two-digit month/day date', () => {
    expect(isDate('12/31/2025')).toBe(true);
  });

  test('returns false when using dashes', () => {
    expect(isDate('12-31-2025')).toBe(false);
  });

  test('returns false for non-4-digit year', () => {
    expect(isDate('12/31/25')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('returns true for valid 3-digit hex with #', () => {
    expect(isHexColor('#abc')).toBe(true);
  });

  test('returns true for valid 6-digit hex without #', () => {
    expect(isHexColor('A1B2C3')).toBe(true);
  });

  test('returns false for invalid character in hex', () => {
    expect(isHexColor('#12G45F')).toBe(false);
  });

  test('returns false for invalid length', () => {
    expect(isHexColor('#12')).toBe(false);
  });
});

import bigInt, { BigInteger } from "big-integer";

export class MathUtils {
  constructor() {}

  randomPrime(bits: number): BigInteger {
    const min = bigInt.one.shiftLeft(bits - 1);
    const max = bigInt.one.shiftRight(bits).prev();

    while (true) {
      let p = bigInt.randBetween(min, max);
      if (p.isProbablePrime(256)) {
        return p;
      }
    }
  }

  generate(keySize: number) {
    const e = bigInt(65537);
    let p: BigInteger;
    let q: BigInteger;
    let totient;

    do {
      p = this.randomPrime(keySize / 2);
      q = this.randomPrime(keySize / 2);
      totient = bigInt.lcm(p.prev(), q.prev());
    } while (
      bigInt.gcd(e, totient).notEquals(1) ||
      p
        .minus(q)
        .abs()
        .shiftRight(keySize / 2 - 100)
        .isZero()
    );

    return {
      e,
      n: p.multiply(q),
      d: e.modInv(totient),
    };
  }

  encode(message: string) {
    console.log(message);
    const codes = message
      .split("")
      .map((i) => i.charCodeAt(0))
      .join("");
    console.log(codes);
    console.log(this.decode(bigInt(codes)));

    return bigInt(codes);
  }

  decode(code: BigInteger) {
    const codeString = code.toString();
    let decode = "";

    for (let i = 0; i < codeString.length; i += 2) {
      let num = Number(codeString.substr(i, 2));

      if (num <= 30) {
        decode += String.fromCharCode(Number(codeString.substr(i, 3)));
        i++;
      } else {
        decode += String.fromCharCode(num);
      }
    }

    return decode;
  }

  encrypt(message: BigInteger, n: BigInteger, e: BigInteger): BigInteger {
    return bigInt(message).modPow(e, n);
  }

  decrypt(message: BigInteger, d: BigInteger, n: BigInteger): BigInteger {
    return bigInt(message).modPow(d, n);
  }
}
const math = new MathUtils();

export default math;

// TESTES PARA A CLASSE MATHUTILS

// const message = 'Hello, World!';

// const keys = math.generate(250);

// console.log('Keys');
// console.log('n:', keys.n.toString());
// console.log('d:', keys.d.toString());
// console.log('e:', keys.e.toString());

// const encoded_message = math.encode(message);
// const encrypted_message = math.encrypt(encoded_message, keys.n, keys.e);
// const decrypted_message = math.decrypt(encrypted_message, keys.d, keys.n);
// const decoded_message = math.decode(decrypted_message);

// console.log('Message:', message);
// console.log('Encoded:', encoded_message.toString());
// console.log('Encrypted:', encrypted_message.toString());
// console.log('Decrypted:', decrypted_message.toString());
// console.log('Decoded:', decoded_message.toString());
// console.log('Correct?', message === decoded_message);
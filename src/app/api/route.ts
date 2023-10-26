import { NextRequest, NextResponse } from "next/server";

function generateTriangle(height: number) {
  const temp = [];
  const data = [];
  const heightToString = height.toString();

  for (let i = 0; i <= heightToString.length; i++) {
    let row = heightToString.charAt(i);
    for (let j = 1; j <= i; j++) {
      row += "0";
    }
    temp.push(row);
  }
  return temp;
}
function generateOddNumbersInRange(start: number, end: number) {
  const oddNumbers = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }

  return oddNumbers;
}

function isPrime(number: number) {
  if (number <= 1) return false; // 0 and 1 are not prime numbers
  if (number <= 3) return true; // 2 and 3 are prime numbers

  if (number % 2 === 0 || number % 3 === 0) return false; // Divisible by 2 or 3

  // Check for prime numbers by testing factors up to the square root of the number
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

function generatePrimes(limit: number) {
  const primes = [];
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) {
      primes.push(number);
    }
  }
  return primes;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const numberRange = Number(searchParams.get("number"));
  const name = searchParams.get("name");
  const result = generateTriangle(numberRange);

  switch (name) {
    case "segitiga":
      const result = generateTriangle(numberRange);
      return NextResponse.json(result);
      break;
    case "ganjil":
      const resultGanjil = generateOddNumbersInRange(1, numberRange);
      return NextResponse.json(resultGanjil);
      break;
    case "prima":
      break;
    default:
      break;
  }
}

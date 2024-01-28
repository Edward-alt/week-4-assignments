class DescriptiveStatistics {
  static mean(numbers) {
    return numbers.reduce((a, b) => a + b) / numbers.length;
  }

  static median(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedNumbers.length / 2);

    if (sortedNumbers.length % 2 === 0) {
      return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
    } else {
      return sortedNumbers[middleIndex];
    }
  }

  static mode(numbers) {
    const frequencyTable = {};
    let maxFrequency = 0;
    let modes = [];

    for (const number of numbers) {
      frequencyTable[number] = (frequencyTable[number] || 0) + 1;
      maxFrequency = Math.max(maxFrequency, frequencyTable[number]);
    }

    for (const number in frequencyTable) {
      if (frequencyTable[number] === maxFrequency) {
        modes.push(Number(number));
      }
    }

    return modes;
  }

  static range(numbers) {
    return Math.max(...numbers) - Math.min(...numbers);
  }

  static standardDeviation(numbers) {
    const mean = DescriptiveStatistics.mean(numbers);
    const squaredDifferences = numbers.map((number) => (number - mean) ** 2);
    const variance = DescriptiveStatistics.mean(squaredDifferences);
    return Math.sqrt(variance);
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Numbers: ${numbers}`);
console.log(`Mean: ${DescriptiveStatistics.mean(numbers)}`);
console.log(`Median: ${DescriptiveStatistics.median(numbers)}`);
console.log(`Mode: ${DescriptiveStatistics.mode(numbers)}`);
console.log(`Range: ${DescriptiveStatistics.range(numbers)}`);
console.log(`Standard Deviation: ${DescriptiveStatistics.standardDeviation(numbers)}`);

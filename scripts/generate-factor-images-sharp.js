const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Import the numberList
const numberList = require('./numberList');

// Create output directory if it doesn't exist
const outputDir = path.join(__dirname, '../public/static/images/factors');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to find all factors of a number
function findFactors(num) {
  const factors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      factors.push(i);
      if (i !== num / i) {
        factors.push(num / i);
      }
    }
  }
  return factors.sort((a, b) => a - b);
}

// Function to find factor pairs
function findFactorPairs(num) {
  const pairs = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      pairs.push([i, num / i]);
    }
  }
  return pairs;
}

// Function to find prime factorization
function findPrimeFactorization(num) {
  const factors = [];
  let n = num;
  let divisor = 2;
  
  while (n > 1) {
    while (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    }
    divisor++;
    if (divisor * divisor > n) {
      if (n > 1) {
        factors.push(n);
      }
      break;
    }
  }
  
  return factors;
}

// Function to split text into multiple lines
function splitIntoLines(text, maxWidth, charWidth = 8) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + word).length * charWidth <= maxWidth) {
      currentLine += (currentLine ? ' ' : '') + word;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);

  return lines;
}

// Function to generate SVG content
function generateSvgContent(num) {
  const factors = findFactors(num);
  const factorPairs = findFactorPairs(num);
  const primeFactors = findPrimeFactorization(num);

  // Fixed width and calculate height based on content
  const width = 600;
  const lineHeight = 24; // Increased line height for better readability
  const headerHeight = 30;
  const sectionSpacing = 15; // Increased section spacing
  const padding = 20;
  const bottomPadding = 30; // Extra padding at the bottom
  const maxTextWidth = width - (padding * 2);

  // Format factors into lines
  const factorsText = factors.join(', ');
  const factorLines = splitIntoLines(factorsText, maxTextWidth);

  // Format factor pairs into lines
  const pairsText = factorPairs.map(pair => `${pair[0]} × ${pair[1]}`).join(', ');
  const pairLines = splitIntoLines(pairsText, maxTextWidth);

  // Format prime factorization into lines
  const primeText = primeFactors.join(' × ');
  const primeLines = splitIntoLines(primeText, maxTextWidth);

  // Calculate total height needed with extra padding
  const contentHeight = headerHeight + 
    (factorLines.length * lineHeight) + 
    (pairLines.length * lineHeight) + 
    (primeLines.length * lineHeight) + 
    (sectionSpacing * 3) + 
    padding + 
    bottomPadding;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${contentHeight}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .title { font: bold 16px Inter, sans-serif; fill: #6d28d9; } /* purple-700 */
    .content { font: 14px Inter, sans-serif; fill: #1f2937; }
    .section { font: bold 14px Inter, sans-serif; fill: #6d28d9; } /* purple-700 */
  </style>
  <rect width="100%" height="100%" fill="#faf5ff" rx="8" ry="8"/> <!-- purple-50 -->
  <text x="${padding}" y="${padding + 15}" class="title">Factors of ${num}</text>
  
  <text x="${padding}" y="${headerHeight + padding + 15}" class="section">Factors:</text>
  ${factorLines.map((line, i) => 
    `<text x="${padding}" y="${headerHeight + padding + 15 + (i + 1) * lineHeight}" class="content">${line}</text>`
  ).join('')}
  
  <text x="${padding}" y="${headerHeight + padding + 15 + (factorLines.length + 1) * lineHeight}" class="section">Factor Pairs:</text>
  ${pairLines.map((line, i) => 
    `<text x="${padding}" y="${headerHeight + padding + 15 + (factorLines.length + 2 + i) * lineHeight}" class="content">${line}</text>`
  ).join('')}
  
  <text x="${padding}" y="${headerHeight + padding + 15 + (factorLines.length + pairLines.length + 2) * lineHeight}" class="section">Prime Factorization:</text>
  ${primeLines.map((line, i) => 
    `<text x="${padding}" y="${headerHeight + padding + 15 + (factorLines.length + pairLines.length + 3 + i) * lineHeight}" class="content">${line}</text>`
  ).join('')}
</svg>`;
}

// Function to generate and save image
async function generateImage(num) {
  const svgContent = generateSvgContent(num);
  const outputDir = path.join(__dirname, '../public/static/images/factors');
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = path.join(outputDir, `factors-of-${num}.png`);
  
  try {
    await sharp(Buffer.from(svgContent))
      .png()
      .toFile(outputPath);
    console.log(`Generated image for ${num}`);
  } catch (error) {
    console.error(`Error generating image for ${num}:`, error);
  }
}

// Generate images for all numbers
async function generateAllImages() {
  console.log(`Generating images for ${numberList.length} numbers...`);
  for (const num of numberList) {
    await generateImage(num);
  }
  console.log('All images generated successfully!');
}

// Run the script
generateAllImages(); 
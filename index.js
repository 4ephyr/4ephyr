#!/usr/bin/env node

// Transpile using Babel
require('@babel/register')({
    presets: ['@babel/preset-env']
  });
  
  // Import your main CLI script
  require('./src/main');
  
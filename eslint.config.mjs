import nextVitals from 'eslint-config-next/core-web-vitals';
 
const eslintConfig = [
  ...nextVitals,
  {
    // Replaces globalIgnores natively in ESLint v9
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts']
  }
];
 
export default eslintConfig;

/**
 * 暂存区检查
 * @author: SunSeekerX
 * @Date: 2020-11-13 12:46:27
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-08-24 12:00:03
 */

module.exports = {
  '*.{js,jsx,ts,tsx}': ['prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.md': ['prettier --write'],
  'package.json': ['sort-package-json'],
}

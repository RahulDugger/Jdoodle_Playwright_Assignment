import { test, expect, type Page } from '@playwright/test';

test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test('Jdoodle page title should be correct', async ({ }) => {
  // Get page title
  await page.goto("https://www.jdoodle.com/online-java-compiler");


  const tiltle = await page.title();
  console.log(tiltle);

  // Verify page title
  expect(tiltle).toEqual("Online Java Compiler - Online Java Editor - Java Code Online");

});


test('Header should be correct as Online Java Compiler IDE', async () => {
  // Get header on top of compiler
  let headerText = await page.locator('h1.text-md').textContent();

  console.log();

  // Verify header on top of compiler
  expect(headerText).toEqual("Online Java Compiler IDE ");
});

test('Compiler first keyword should be public', async ({ }) => {


  // get 1st keyword
  const btnStatus = await page.locator("(//div[@class='ace_line']//span[@class='ace_keyword'])[1]").allTextContents();

  console.log(btnStatus);

  // verify 1st keyword
  expect(btnStatus).toContain("public");
});


test('Compiler second keyword should be class', async ({ }) => {


  // get 2nd keyword
  const secondKeyword = await page.locator("(//div[@class='ace_line']//span[@class='ace_keyword'])[2]").allTextContents();

  console.log(secondKeyword);

  // verify 2nd keyword
  expect(secondKeyword).toContain("class");
});

test('Check all available font size', async ({ }) => {


  // get font sizes
  const fontSize = await page.locator("(//select[@id='fontSizeSelect'])[1]").textContent();

  console.log(fontSize);

  expect(fontSize).toEqual("11px 12px 13px 14px 15px 16px 17px 18px 19px 20px 21px 22px 23px 24px 25px ");
});

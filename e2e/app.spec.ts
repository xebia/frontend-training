import { test, expect } from '@playwright/test';

test('has home page with list of pokémon', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1, name: 'Pokémon' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'bulbasaur' })).toBeVisible();
});

test('navigates to pokemon detail', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'ivysaur' }).click();

  await page.waitForURL('**/pokemon/2/');

  await expect(
    page.getByRole('heading', { level: 1, name: 'Bulbasaur' }) // Mock name
  ).toBeVisible();
  await expect(page.getByText('ID: 2')).toBeVisible();
});

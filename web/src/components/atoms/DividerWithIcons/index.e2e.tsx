import { test, expect } from '@playwright/test'

test('basic test', async ({ page }) => {
  await page.goto('localhost')
  const ids = page.locator('div[data-id]')
  await expect(ids).toHaveLength(10)
})

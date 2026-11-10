import { expect, test } from "@playwright/test";
test("renders the optical workspace and updates FOV from camera controls", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /See the physics behind the frame/ })).toBeVisible();
  const horizontal = page.locator(".metric").filter({ hasText: "Horizontal" }).locator("strong");
  await expect(horizontal).toHaveText("39.6°");
  await page.getByLabel(/Focal length/).fill("85");
  await expect(horizontal).toHaveText("23.9°");
  await expect(page.getByText("ENGINE ONLINE")).toBeVisible();
});
test("keeps the workspace within the mobile viewport", async ({ page, isMobile }) => {
  await page.goto("/");
  if (isMobile) {
    const dimensions = await page.evaluate(() => ({ width: document.documentElement.clientWidth, scrollWidth: document.documentElement.scrollWidth }));
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.width);
    await expect(page.getByRole("heading", { name: /Optical setup/ })).toBeVisible();
    await expect(page.getByLabel(/ISO/)).toBeVisible();
  }
});

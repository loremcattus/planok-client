import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Abre la aplicación
  await page.goto('http://localhost:5174/');

  // Verifica que no esté creada la tarea antes de empezar
  await expect(page.locator('li').filter({ hasText: 'Pintar:toda la casa' })).toHaveCount(0); // No debe existir la tarea antes de ejecutar el test

  // Crea una tarea con título y descripción
  await page.getByRole('textbox', { name: 'Título' }).click();
  await page.getByRole('textbox', { name: 'Título' }).fill('Pintar');
  await page.getByRole('textbox', { name: 'Descripción' }).click();
  await page.getByRole('textbox', { name: 'Descripción' }).fill('toda la casa');
  await page.getByRole('button', { name: 'Crear' }).click();
  await page.waitForResponse(response => response.request().method() === 'POST' && response.status() === 201);
  // Verifica que la tarea se haya creado correctamente
  const tarea = page.locator('li').filter({ hasText: 'Pintar:toda la casa' });
  await expect(tarea).toContainText('Pintar');
  await expect(tarea).toContainText('toda la casa');

  // Marca la tarea como completada
  await page.getByRole('listitem').filter({ hasText: '✖Pintar:toda la casa' }).getByLabel('Marcar tarea como completada').click();
  await page.waitForResponse(response => response.request().method() === 'PUT' && response.status() === 200);
  // Verifica que la tarea esté marcada como completada (asumiendo que hay un cambio visual o de clase)
  const tareaCompletada = page.locator('li').filter({ hasText: 'Pintar:toda la casa' });
  await expect(tareaCompletada).toHaveClass(/completada/);

  // Elimina la tarea
  await page.getByRole('listitem').filter({ hasText: '✖Pintar:toda la casa' }).getByLabel('Eliminar tarea').click();
  await page.waitForResponse(response => response.request().method() === 'DELETE' && response.status() === 200);
  // Verifica que la tarea ya no esté en la lista
  await expect(page.locator('li').filter({ hasText: 'Pintar:toda la casa' })).toHaveCount(0);
});